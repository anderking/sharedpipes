import { NgModule } from '@angular/core';

import { IsEqualPipeModule } from './is-equal.pipe';
import { IsGreaterOrEqualPipeModule } from './is-greater-or-equal.pipe';
import { IsGreaterPipeModule } from './is-greater.pipe';
import { IsIdenticalPipeModule } from './is-identical.pipe';
import { IsLessOrEqualPipeModule } from './is-less-or-equal.pipe';
import { IsLessPipeModule } from './is-less.pipe';
import { IsNotEqualPipeModule } from './is-not-equal.pipe';
import { IsNotIdenticalPipeModule } from './is-not-identical.pipe';
import { IsNullPipeModule } from './is-null.pipe';
import { IsUndefinedPipeModule } from './is-undefined.pipe';
import { IsNilPipeModule } from './is-nil.pipe';
import { IsFunctionPipeModule } from './is-function.pipe';
import { IsNumberPipeModule } from './is-number.pipe';
import { IsStringPipeModule } from './is-string.pipe';
import { IsArrayPipeModule } from './is-array.pipe';
import { IsObjectPipeModule } from './is-object.pipe';
import { IsDefinedPipeModule } from './is-defined.pipe';

@NgModule({
  imports: [
    IsNullPipeModule,
    IsUndefinedPipeModule,
    IsNilPipeModule,
    IsFunctionPipeModule,
    IsNumberPipeModule,
    IsStringPipeModule,
    IsArrayPipeModule,
    IsObjectPipeModule,
    IsDefinedPipeModule,
  ],
})
export class TypesPipesModule {}

@NgModule({
  imports: [
    IsEqualPipeModule,
    IsGreaterOrEqualPipeModule,
    IsGreaterPipeModule,
    IsIdenticalPipeModule,
    IsLessOrEqualPipeModule,
    IsLessPipeModule,
    IsNotEqualPipeModule,
    IsNotIdenticalPipeModule,
  ],
})
export class ConditionsPipesModule {}

@NgModule({
  imports: [ConditionsPipesModule, TypesPipesModule],
})
export class BooleanPipesModule {}
