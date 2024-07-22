import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CollectionPredicate, every } from '../core/utils/utils';

@Pipe({
  name: 'every',
})
export class EveryPipe implements PipeTransform {
  transform(input: any, predicate: CollectionPredicate): any {
    return every(input, predicate);
  }
}

@NgModule({
  declarations: [EveryPipe],
  exports: [EveryPipe],
})
export class EveryPipeModule {}
