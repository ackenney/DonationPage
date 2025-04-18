const nameValidationPattern = /^[a-zA-Z.\- ]+$/;
const dateValidationPattern = /^\d{4}-\d{2}-\d{2}$/;
const emailValidationPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const addressValidationPattern = /^[a-zA-Z0-9.,\- ]+$/;
const numberValidationPattern = /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const validateName = (name: string): boolean => nameValidationPattern.test(name);
export const validateDate = (date: string): boolean => dateValidationPattern.test(date);
export const validateEmail = (email: string): boolean => emailValidationPattern.test(email);
export const validateAddress = (address: string): boolean => addressValidationPattern.test(address);
export const validateNumber = (number: string): boolean => numberValidationPattern.test(number);