import { NgModule } from '@angular/core';

import { GroupByPipeModule } from './group-by.pipe';
import { MaxPipeModule } from './max.pipe';
import { MeanPipeModule } from './mean.pipe';
import { MinPipeModule } from './min.pipe';
import { SumPipeModule } from './sum.pipe';

@NgModule({
  imports: [GroupByPipeModule, MaxPipeModule, MeanPipeModule, MinPipeModule, SumPipeModule],
})
export class AggregatePipesModule {}
