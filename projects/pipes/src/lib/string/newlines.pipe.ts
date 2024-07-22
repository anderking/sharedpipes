import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'newlines',
})
export class NewlinesPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }

    return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}

@NgModule({
  declarations: [NewlinesPipe],
  exports: [NewlinesPipe],
})
export class NewlinesPipeModule {}
