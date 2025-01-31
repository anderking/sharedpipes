import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'last',
})
export class LastPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    // Returns undefined if empty
    return input[input.length - 1];
  }
}

@NgModule({
  declarations: [LastPipe],
  exports: [LastPipe],
})
export class LastPipeModule {}
