import { Pipe, PipeTransform, NgModule } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'orderArray' })
export class OrderArrayPipe implements PipeTransform {

    transform(value: Array<Object>, orderBy: Object): any {
        if (value.length) {
            const sortKeys = Object.keys(orderBy);
            const sortValues = Object.values(orderBy)
            return _.orderBy(value, sortKeys, sortValues);
        }
        return value;
    }
}

@NgModule({
    declarations: [OrderArrayPipe],
    exports: [OrderArrayPipe],
  })
  export class OrderArrayPipeModule {}
