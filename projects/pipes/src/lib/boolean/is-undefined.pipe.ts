import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isUndefined } from '../core/utils/utils';

@Pipe({
  name: 'isUndefined',
})
export class IsUndefinedPipe implements PipeTransform {
  transform(value: any): boolean {
    return isUndefined(value);
  }
}

@NgModule({
  declarations: [IsUndefinedPipe],
  exports: [IsUndefinedPipe],
})
export class IsUndefinedPipeModule {}
