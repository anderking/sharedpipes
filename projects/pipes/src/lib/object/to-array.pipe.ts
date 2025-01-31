import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isObject } from '../core/utils/utils';

@Pipe({ name: 'toArray' })
export class ToArrayPipe implements PipeTransform {
  transform(input: any): any {
    if (!isObject(input)) {
      return input;
    }

    return Object.keys(input).map(value => input[value]);
  }
}

@NgModule({
  declarations: [ToArrayPipe],
  exports: [ToArrayPipe],
})
export class ToArrayPipeModule {}
