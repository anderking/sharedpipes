import { Pipe, PipeTransform, NgModule } from '@angular/core';


@Pipe({ name: 'orderTableColumns' })
export class OrderTableColumnsPipe implements PipeTransform {
  transform(data: { name: string }[]): any {
    return data.map(item => item.name);
  }
}

@NgModule({
  declarations: [OrderTableColumnsPipe],
  exports: [OrderTableColumnsPipe],
})
export class OrderTableColumnsPipeModule {}
