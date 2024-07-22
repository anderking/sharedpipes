import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'isArray',
})
export class IsArrayPipe implements PipeTransform {
  transform(value: any): boolean {
    return isArray(value);
  }
}

@NgModule({
  declarations: [IsArrayPipe],
  exports: [IsArrayPipe],
})
export class IsArrayPipeModule {}
