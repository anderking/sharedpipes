import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'some',
})
export class SomePipe implements PipeTransform {
  transform(input: any, predicate: Function): any {
    if (!isArray(input) || !predicate) {
      return input;
    }

    let result = false;
    let i = -1;

    while (++i < input.length && !result) {
      result = predicate(input[i], i, input);
    }

    return result;
  }
}

@NgModule({
  declarations: [SomePipe],
  exports: [SomePipe],
})
export class SomePipeModule {}
