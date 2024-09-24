import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() {}

  // Method to validate if a field is required
  validateRequired(value: string): string | null {
    if (!value) {
      return 'This field is required.';
    }
    return null;
  }

  // Method to validate maxlength
  validateMaxLength(value: string, maxLength: number): string | null {
    if (value && value.length > maxLength) {
      return `Max length is ${maxLength} characters.`;
    }
    return null;
  }

  // Method to validate pattern (e.g., email)
  validatePattern(value: string, pattern: string): string | null {
    const regex = new RegExp(pattern);
    if (value && !regex.test(value)) {
      return 'Invalid format.';
    }
    return null;
  }

  // Composite validation function for a field
  validateField(value: string, validations: any[]): string[] {
    const errors: string[] = [];

    validations.forEach(validation => {
      switch (validation.name) {
        case 'required':
          const requiredError = this.validateRequired(value);
          if (requiredError) errors.push(requiredError);
          break;
        case 'maxlength':
          const maxLengthError = this.validateMaxLength(value, validation.value);
          if (maxLengthError) errors.push(maxLengthError);
          break;
        case 'pattern':
          const patternError = this.validatePattern(value, validation.value);
          if (patternError) errors.push(patternError);
          break;
      }
    });

    return errors;
  }
}

