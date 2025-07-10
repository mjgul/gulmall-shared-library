import { NgIf } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StripePaymentService } from 'api-lib';
declare var Stripe: any;    

@Component({
      selector: 'stripe-payment',
      templateUrl: './stripe.component.html',
      standalone:true,
      imports:[NgIf]
    })
    export class StripePaymentComponent implements OnInit {

//@ViewChild('cardElement') cardElementRef: ElementRef;
//@ViewChild('expressCheckoutElement') expressCheckoutElementRef: ElementRef;

  private stripe: any;
  private elements:any;
   
      private cardElement: any;
      private clientSecret: string = "pk_live_FmCGEmZDZ7TkZUgA5H8it74U00lfOwlrgL" // Store the client secret for reuse.
      private readonly API_URL = "localhost:8090/test";

      // UI State Properties
  public isLoading = true; // Start in loading state
  public loadingMessage = 'Initializing Payment Options...';
  public isCardElementReady = false;
  public cardError: string | null = null;

      constructor(private cdr: ChangeDetectorRef, private stripePayment:StripePaymentService){}
      ngOnInit() {
            this.stripe = Stripe("pk_live_FmCGEmZDZ7TkZUgA5H8it74U00lfOwlrgL");
            
            
          }

         public mountCardElement(elements: any) {
            this.cardElement = elements.create('card');
            //this.cardElement.mount(this.cardElementRef.nativeElement);
            
            this.cardElement.on('ready', () => {
                this.isCardElementReady = true;
                this.cdr.detectChanges();
            });
        
            this.cardElement.on('change', (event: any) => {
              this.cardError = event.error ? event.error.message : null;
              this.cdr.detectChanges();
            });
          }

          presentLoading(message: string) {
            this.isLoading = true;
            this.loadingMessage = message;
            this.cdr.detectChanges();
          }

          dismissLoading() {
            this.isLoading = false;
            this.loadingMessage = '';
            this.cdr.detectChanges();
          }

          // This method now confirms the payment for the card element using the existing PaymentIntent.
  async payWithCard(event: Event) {
      event.preventDefault();
      this.presentLoading('Processing Payment...');
      
      // Confirm the payment on the frontend using the card details and the existing client secret.
      const { error } = await this.stripe.confirmPayment({
        clientSecret: this.clientSecret,
        elements: this.stripe.elements(), // Re-fetch elements for confirmation
        confirmParams: {
          return_url: window.location.href, // Required for some payment methods
        },
        redirect: 'if_required' // Prevents unnecessary redirects
      });

      
      
      this.dismissLoading();
      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          this.cardError = error.message;
        } else {
          alert('Payment Failed');
        }
      } else {
        this.cardError = null;
        alert('Success!');
      }
    }

    public async payWithLink(){
      (await this.stripePayment.initializePayment(200)).subscribe({
            next: (response:any) => {
              // 2. Initialize the Stripe Elements instance with the client secret from your backend.
              this.elements = this.stripe.elements({ clientSecret: response.clientSecret });
    
              // 3. Create and mount the Link Authentication Element (for faster checkout with Link).
              const expressCheckout = this.elements.create("expressCheckout");
              expressCheckout.mount('#express-checkout-element')
              expressCheckout.on('confirm', async () => {
                  
                  this.cdr.detectChanges();
                  // The payment confirmation is handled by the element itself.
                  // We just need to show a success message or handle redirection.
                  alert('Success!');
                  
                  this.cdr.detectChanges();
                  // You might want to reload or navigate away here.
              });
    
    
              // 4. Create and mount the main Payment Element.
            //   // This one element dynamically displays input fields for cards, wallets (Apple/Google Pay), etc.
            //   const paymentElement = this.elements.create("payment");
            //   paymentElement.mount("#payment-element");
              
              // 5. All elements are ready, hide the main loader.
              this.isLoading = false;
              this.cdr.detectChanges();
            },
            error: () => {
              this.loadingMessage = 'Error: Could not initialize checkout. Please refresh the page.';
              // Keep the loading spinner on error, as payments cannot proceed.
              this.cdr.detectChanges();
            }
          });
    }

    async handleSubmit(event: Event) {
      event.preventDefault();
  
      // if (this.isProcessing) {
      //   return; // Prevent multiple submissions
      // }
  
      //this.isProcessing = true;
      //this.errorMessage = null;
      this.cdr.detectChanges();
  
      // The `confirmPayment` function automatically collects data from the mounted
      // Payment Element and confirms the payment with the PaymentIntent.
      const { error } = await this.stripe.confirmPayment({
        elements: this.elements,
        confirmParams: {
          // This is the URL your customer will be redirected to after they pay.
          // It's required for some payment methods like iDEAL and Sofort.
          return_url: `${window.location.origin}/payment-success`, 
        },
      });
  
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // the `return_url`.
        //this.errorMessage = error.message;
      } else {
        // The customer was redirected. You'll likely want to handle the success
        // on the new page, but we can show a message here for debugging.
        //this.errorMessage = 'Payment processing...';
      }
  
      //this.isProcessing = false;
      this.cdr.detectChanges();
    }
    }