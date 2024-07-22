import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'encodeURI',
})
export class EncodeURIPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return encodeURI(input);
  }
}

@NgModule({
  declarations: [EncodeURIPipe],
  exports: [EncodeURIPipe],
})
export class EncodeURIPipeModule {}
