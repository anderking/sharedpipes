import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { pad, isString } from '../core/utils/utils';

@Pipe({
  name: 'pad',
})
export class PadPipe implements PipeTransform {
  transform(input: any, length: number = 0, character: string = ' '): any {
    if (!isString(input)) {
      return input;
    }

    return pad(input, length, character);
  }
}

@NgModule({
  declarations: [PadPipe],
  exports: [PadPipe],
})
export class PadPipeModule {}
