import { NgModule } from '@angular/core';
import { ArrayPipesModule } from './array/array.module';
import { MathPipesModule } from './math/math.module';
import { BooleanPipesModule } from './boolean/boolean.module';
import { StringPipesModule } from './string/string.module';
import { ObjectPipesModule } from './object/object.module';
import { ObservablePipesModule } from './observable/observable-pipes.module';
import { AggregatePipesModule } from './aggregate/aggregate.module';
import { DatePipesModule } from './date/date-pipes.module';

@NgModule({
  exports: [
    ArrayPipesModule,
    MathPipesModule,
    BooleanPipesModule,
    StringPipesModule,
    ObjectPipesModule,
    ObservablePipesModule,
    DatePipesModule,
    AggregatePipesModule,
  ],
})
export class PipesModule { }
