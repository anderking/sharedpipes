import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isDeepObject, wrapDeep } from '../core/utils/utils';

@Pipe({
  name: 'deep',
})
export class DeepPipe implements PipeTransform {
  transform(value: any): any {
    if (isDeepObject(value)) {
      return value;
    }

    return wrapDeep(value);
  }
}

@NgModule({
  declarations: [DeepPipe],
  exports: [DeepPipe],
})
export class DeepPipeModule {}
