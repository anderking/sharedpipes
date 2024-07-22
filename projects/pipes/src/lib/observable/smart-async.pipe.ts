import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({
  name: 'smartAsync'
})
export class SmartAsyncPipe implements PipeTransform {

  transform<T>(value: T): Observable<T> {
    if (value instanceof Observable)
      return value.pipe(
        delay(0)
      );
    else {
      return new BehaviorSubject(value).pipe(
        delay(0)
      );
    }
  }

}

@NgModule({
  declarations: [SmartAsyncPipe],
  exports: [SmartAsyncPipe],
})
export class SmartAsyncPipeModule {}
