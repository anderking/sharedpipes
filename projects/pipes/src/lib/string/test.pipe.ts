import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(input: any, pattern: any, flag: any): any {
    if (!isString(input) || !pattern) {
      return input;
    }

    const regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);

    return regexp.test(input);
  }
}

@NgModule({
  declarations: [TestPipe],
  exports: [TestPipe],
})
export class TestPipeModule {}
