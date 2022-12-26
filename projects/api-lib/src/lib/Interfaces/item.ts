import { Iname } from './name';
import { Iimage } from './image';

export interface Iitem {
   name: string;
   id?:string;
   description: string;
   price: number;
   image?: Iimage[];
}