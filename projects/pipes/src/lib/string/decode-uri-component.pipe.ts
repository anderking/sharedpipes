import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'decodeURIComponent',
})
export class DecodeURIComponentPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return decodeURIComponent(input);
  }
}

@NgModule({
  declarations: [DecodeURIComponentPipe],
  exports: [DecodeURIComponentPipe],
})
export class DecodeURIComponentPipeModule {}
