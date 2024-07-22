import { NgModule } from '@angular/core';

import { BytesPipeModule } from './bytes.pipe';
import { CeilPipeModule } from './ceil.pipe';
import { FloorPipeModule } from './floor.pipe';
import { RoundPipeModule } from './round.pipe';
import { DegreesPipeModule } from './degrees.pipe';
import { RadiansPipeModule } from './radians.pipe';
import { RandomPipeModule } from './random.pipe';
import { SqrtPipeModule } from './sqrt.pipe';
import { PowPipeModule } from './pow.pipe';
import { AbsPipeModule } from './abs.pipe';
import { OrdinalPipeModule } from './ordinal.pipe';

@NgModule({
  imports: [
    AbsPipeModule,
    BytesPipeModule,
    CeilPipeModule,
    DegreesPipeModule,
    FloorPipeModule,
    OrdinalPipeModule,
    PowPipeModule,
    RadiansPipeModule,
    RandomPipeModule,
    RoundPipeModule,
    SqrtPipeModule,
  ],
})
export class MathPipesModule {}
