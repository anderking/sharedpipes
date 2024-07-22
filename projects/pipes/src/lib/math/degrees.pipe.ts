import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../core/utils/utils';

@Pipe({
  name: 'degrees',
})
export class DegreesPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return (input * 180) / Math.PI;
  }
}

@NgModule({
  declarations: [DegreesPipe],
  exports: [DegreesPipe],
})
export class DegreesPipeModule {}
