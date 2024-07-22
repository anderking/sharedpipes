import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNil } from '../core/utils/utils';

@Pipe({
  name: 'isNil',
})
export class IsNilPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNil(value);
  }
}

@NgModule({
  declarations: [IsNilPipe],
  exports: [IsNilPipe],
})
export class IsNilPipeModule {}
