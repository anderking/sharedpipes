import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'encodeURIComponent',
})
export class EncodeURIComponentPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return encodeURIComponent(input);
  }
}

@NgModule({
  declarations: [EncodeURIComponentPipe],
  exports: [EncodeURIComponentPipe],
})
export class EncodeURIComponentPipeModule {}
