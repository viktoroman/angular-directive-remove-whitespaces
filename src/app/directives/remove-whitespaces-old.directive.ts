import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
// import _ from 'lodash';

@Directive({
  selector: 'input[bhRemoveWhitespacesOld], textarea[bhRemoveWhitespacesOld]',
})
export class RemoveWhitespacesOldDirective implements OnInit {
  private _formControl: AbstractControl<any, any> | null;
  @Input() onlySelfControlChanges = false;

  constructor(private control: NgControl, private inputElement: ElementRef) {}

  public ngOnInit(): void {
    this._formControl = this.control.control;
  }

  @HostListener('blur')
  public onBlur() {
    this.trimTextFieldValue();
  }

  private trimTextFieldValue(): void {
    console.log('trimTextFieldValue');
    if (this._formControl) {
      const currentControlValue: string = this._formControl.value;
      if (currentControlValue) {
        if (this.isInputTypeEmail) {
          this._formControl.setValue('', { emitEvent: false, onlySelf: true });
          this._formControl.setValue(currentControlValue.trim());
        } else if (this.needTrim(currentControlValue)) {
          this._formControl.setValue(currentControlValue.trim(), {
            onlySelf: this.onlySelfControlChanges,
          });
        }
      }
    }
  }

  private get isInputTypeEmail(): boolean {
    return (
      (this.inputElement?.nativeElement?.type ?? '').toLowerCase() === 'email'
    );
  }

  private needTrim(value: string): boolean {
    return value !== value.trim();
  }
}
