import { NgModule } from '@angular/core';

import { EmptyPipeModule } from './empty.pipe';
import { HeadPipeModule } from './head.pipe';
import { InitialPipeModule } from './initial.pipe';
import { LastPipeModule } from './last.pipe';
import { JoinPipeModule } from './join.pipe';
import { TailPipeModule } from './tail.pipe';
import { UniqPipeModule } from './uniq.pipe';
import { WithoutPipeModule } from './without.pipe';
import { MapPipeModule } from './map.pipe';
import { WherePipeModule } from './where.pipe';
import { FirstOrDefaultPipeModule } from './first-or-default.pipe';
import { RangePipeModule } from './range.pipe';
import { PluckPipeModule } from './pluck.pipe';
import { ReversePipeModule } from './reverse.pipe';
import { OrderByPipeModule } from './order-by.pipe';
import { CountPipeModule } from './count.pipe';
import { SomePipeModule } from './some.pipe';
import { EveryPipeModule } from './every.pipe';
import { ShufflePipeModule } from './shuffle.pipe';
import { TakePipeModule } from './take.pipe';
import { DropPipeModule } from './drop.pipe';
import { DeepPipeModule } from './deep.pipe';
import { ChunkPipeModule } from './chunk.pipe';
import { FlattenPipeModule } from './flatten.pipe';
import { IntersectionPipeModule } from './intersection.pipe';
import { UnionPipeModule } from './union.pipe';
import { TakeWhilePipeModule } from './take-while.pipe';
import { TakeUntilPipeModule } from './take-until.pipe';
import { ArrayFilterPipeModule } from './array-filter.pipe';

@NgModule({
  imports: [
    ChunkPipeModule,
    CountPipeModule,
    DeepPipeModule,
    DropPipeModule,
    EmptyPipeModule,
    EveryPipeModule,
    FirstOrDefaultPipeModule,
    FlattenPipeModule,
    HeadPipeModule,
    InitialPipeModule,
    IntersectionPipeModule,
    JoinPipeModule,
    LastPipeModule,
    MapPipeModule,
    OrderByPipeModule,
    PluckPipeModule,
    RangePipeModule,
    ReversePipeModule,
    ShufflePipeModule,
    SomePipeModule,
    TailPipeModule,
    TakeUntilPipeModule,
    TakeWhilePipeModule,
    TakePipeModule,
    UnionPipeModule,
    UniqPipeModule,
    WherePipeModule,
    WithoutPipeModule,
    ArrayFilterPipeModule
  ],
})
export class ArrayPipesModule {}
