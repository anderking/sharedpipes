import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }

    return input.trim();
  }
}

@NgModule({
  declarations: [TrimPipe],
  exports: [TrimPipe],
})
export class TrimPipeModule {}
