import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { resolveObject } from '../core/utils/utils';

@Pipe({
  name: 'resolveObject'
})
export class ResolveObjectPipe implements PipeTransform {

  transform(field: string, obj: Object, key: string): string {
    return resolveObject(obj, key)
  }

}

@NgModule({
  declarations: [ResolveObjectPipe],
  exports: [ResolveObjectPipe],
})
export class ResolveObjectPipeModule { }