import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'dateFormat2'
})
export class DateFormat2Pipe implements PipeTransform {

  transform(date: string): string {
    if (date) {
      let aux = date.split("T");
      return aux[0] ? aux[0].replace(/-/g, "/") : "";
    }
    return "";
  }

}

@NgModule({
  declarations: [DateFormat2Pipe],
  exports: [DateFormat2Pipe],
})
export class DateFormat2PipeModule { }
