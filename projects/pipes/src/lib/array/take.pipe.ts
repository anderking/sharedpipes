import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'take',
})
export class TakePipe implements PipeTransform {
  transform(input: any, quantity?: number): any {
    if (!isArray(input)) {
      return input;
    }

    return input.slice(0, quantity || 1);
  }
}

@NgModule({
  declarations: [TakePipe],
  exports: [TakePipe],
})
export class TakePipeModule {}
