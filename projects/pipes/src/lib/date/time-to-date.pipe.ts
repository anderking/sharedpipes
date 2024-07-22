import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'timeToDate'
})
export class TimeToDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);
    let month = (date.getUTCMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;
    let dateNumber = date.getUTCDate().toString();
    dateNumber = dateNumber.length === 1 ? '0' + dateNumber : dateNumber;
    return `${dateNumber}/${month}/${date.getUTCFullYear()}`;
  }

}

@NgModule({
  declarations: [TimeToDatePipe],
  exports: [TimeToDatePipe],
})
export class TimeToDatePipeModule {}