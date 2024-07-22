import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'dateFormat3'
})
export class DateFormat3Pipe implements PipeTransform {

  transform(date: string): string {
    let dateIn = new Date(date);
    if (dateIn > new Date("2000-01-01")) {
      let aux = date.split("T");
      let dateOut = aux[0].split("-");
      return dateOut[0] + "-" + dateOut[1] + "-" + dateOut[2];
    } else {
      return "";
    }
  }
}
@NgModule({
  declarations: [DateFormat3Pipe],
  exports: [DateFormat3Pipe],
})
export class DateFormat3PipeModule { }
