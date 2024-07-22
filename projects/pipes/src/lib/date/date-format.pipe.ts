import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string): string {
    date = date.replace("/Date(", "");
    date = date.replace(")/", "");
    return new Date(+date).toLocaleDateString();
  }

}

@NgModule({
  declarations: [DateFormatPipe],
  exports: [DateFormatPipe],
})
export class DateFormatPipeModule {}
