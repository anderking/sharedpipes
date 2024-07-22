import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'timeFormat2'
})
export class TimeFormat2Pipe implements PipeTransform {

  transform(date: string): string {
    let aux = date.split("T");
    return aux[1] ? aux[1].slice(0, 5) : "";
  }
}

@NgModule({
  declarations: [TimeFormat2Pipe],
  exports: [TimeFormat2Pipe],
})
export class TimeFormat2PipeModule { }
