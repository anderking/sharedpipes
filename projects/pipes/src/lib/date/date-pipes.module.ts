import { NgModule } from '@angular/core';
import { TimeToDatePipeModule } from './time-to-date.pipe';
import { DateFormatPipeModule } from './date-format.pipe';
import { DateFormat2PipeModule } from './date-format2.pipe';
import { TimeFormat2PipeModule } from './time-format2.pipe';
import { DateFormat3PipeModule } from './date-format3.pipe';



@NgModule({
  imports: [
    TimeToDatePipeModule,
    DateFormat2PipeModule,
    DateFormatPipeModule,
    DateFormat3PipeModule,
    TimeFormat2PipeModule
  ],
})
export class DatePipesModule { }
