import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../core/utils/utils';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  transform(input: any, power: number = 2): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return Math.pow(input, power);
  }
}

@NgModule({
  declarations: [PowPipe],
  exports: [PowPipe],
})
export class PowPipeModule {}
