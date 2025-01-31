import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../core/utils/utils';

@Pipe({
  name: 'radians',
})
export class RadiansPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return (input * Math.PI) / 180;
  }
}

@NgModule({
  declarations: [RadiansPipe],
  exports: [RadiansPipe],
})
export class RadiansPipeModule {}
