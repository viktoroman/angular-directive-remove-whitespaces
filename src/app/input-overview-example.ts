import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { asyncValidatorFactory } from './validator/async-validator.factory';
import { isFiveA, lessThreeLetterValidator } from './validator/validators';

@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  public control = new FormControl('');
  public controlTwo = new FormControl('');

  constructor() {
    this.control.setValidators(lessThreeLetterValidator);
    this.control.setAsyncValidators(
      asyncValidatorFactory((value) => isFiveA(value))
    );
    this.control.updateValueAndValidity();
    this.control.markAsTouched();

    this.controlTwo.setValidators(lessThreeLetterValidator);
    this.controlTwo.setAsyncValidators(
      asyncValidatorFactory((value) => isFiveA(value))
    );
    this.controlTwo.updateValueAndValidity();
    this.controlTwo.markAsTouched();
  }
}
