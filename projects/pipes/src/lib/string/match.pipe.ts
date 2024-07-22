import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../core/utils/utils';

@Pipe({
  name: 'match',
})
export class MatchPipe implements PipeTransform {
  transform(input: any, pattern: any, flag: any): any {
    if (!isString(input)) {
      return input;
    }

    const regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
    return input.match(regexp);
  }
}

@NgModule({
  declarations: [MatchPipe],
  exports: [MatchPipe],
})
export class MatchPipeModule {}
