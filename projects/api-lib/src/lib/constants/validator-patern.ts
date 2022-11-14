export const PATTERNVALIDATORS = {
    Email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    String: /^[a-zA-Z0-9_.-]*$/,
    Number: /^[0-9]+$/,
    Name: /^[A-Za-z][A-Za-z]*$/,
    Date: /[1-9]|[12]\d|3[01]/,
    Month: /^(0?[1-9]|1[012])$/,
    Year: /^-?(0|[1-9]\d*)?$/
  };