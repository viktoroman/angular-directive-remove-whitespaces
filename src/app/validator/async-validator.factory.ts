import { Observable, Observer, Subscription, timer } from 'rxjs';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { flatMap } from 'rxjs/operators';

type AsyncValidatorFactory = (
  service: (value: any) => Observable<any | null>
) => AsyncValidatorFn;

export const asyncValidatorFactory: AsyncValidatorFactory = (
  service: (value: any) => Observable<any | null>
): AsyncValidatorFn => {
  let subscription: Subscription = Subscription.EMPTY;
  return (input: AbstractControl) => {
    subscription.unsubscribe();
    return new Observable((observer: Observer<any | null>) => {
      subscription = timer(400)
        .pipe(flatMap(() => service(input.value)))
        .subscribe(observer);
      return () => subscription.unsubscribe();
    });
  };
};
