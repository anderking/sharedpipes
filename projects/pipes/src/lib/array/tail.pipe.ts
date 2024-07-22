import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'tail',
})
export class TailPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    return input.slice(1, input.length);
  }
}

@NgModule({
  declarations: [TailPipe],
  exports: [TailPipe],
})
export class TailPipeModule {}
