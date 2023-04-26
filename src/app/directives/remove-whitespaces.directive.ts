import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
// import _ from 'lodash';

@Directive({
  selector: 'input[bhRemoveWhitespaces], textarea[bhRemoveWhitespaces]',
})
export class RemoveWhitespacesDirective implements OnInit {
  private _formControl: AbstractControl<any, any>;
  private originalRegisterOnChange: (fn: any) => void;

  constructor(private control: NgControl, private inputElement: ElementRef) {
    if (this.control.valueAccessor) {
      console.log('SET: trimValueAccessor');
      this.trimValueAccessor(this.control.valueAccessor);
    }
  }

  public ngOnInit(): void {
    if (this.control.control) {
      console.log('SET: _formControl');
      this._formControl = this.control.control;
    }
  }

  @HostListener('blur')
  public onBlur() {
    if (this._formControl) {
      const orig = this._formControl.updateValueAndValidity;
      this._formControl.updateValueAndValidity = () => {};

      const value = this._formControl.value;
      this._formControl.setValue(
        typeof value === 'string' ? value.trim() : value,
        { emitValue: false, onlySelf: true }
      );

      this._formControl.updateValueAndValidity = orig;
    }
  }

  private trimValueAccessor(valueAccessor: ControlValueAccessor) {
    this.originalRegisterOnChange = valueAccessor.registerOnChange;

    valueAccessor.registerOnChange = (fn) => {
      return this.originalRegisterOnChange.call(
        valueAccessor,
        (value: string) => {
          return fn(typeof value === 'string' ? value.trim() : value);
        }
      );
    };
  }
}
