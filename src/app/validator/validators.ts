import { AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

// error when less then 3 letter
export function lessThreeLetterValidator(
  control: AbstractControl
): ValidationErrors | null {
  return control.value?.length <= 3 ? { three: true } : null;
}

export function isFiveA(
  value: string | null
): Observable<ValidationErrors | null> {
  return of(value).pipe(
    map((v) => (v === 'aaaaa' ? { fiveA: true } : null)),
    delay(1000)
  );
}
