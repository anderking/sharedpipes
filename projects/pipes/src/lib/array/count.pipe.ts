import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { count } from '../core/utils/utils';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  transform(input: any): any {
    return count(input);
  }
}

@NgModule({
  declarations: [CountPipe],
  exports: [CountPipe],
})
export class CountPipeModule {}
