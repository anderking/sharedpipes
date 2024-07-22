import { NgModule } from '@angular/core';

import { KeysPipeModule } from './keys.pipe';
import { ToArrayPipeModule } from './to-array.pipe';
import { DefaultsPipeModule } from './defaults.pipe';
import { ResolveObjectPipeModule } from './resolve-object.pipe';

@NgModule({
  imports: [KeysPipeModule, ToArrayPipeModule, DefaultsPipeModule,ResolveObjectPipeModule],
})
export class ObjectPipesModule {}
