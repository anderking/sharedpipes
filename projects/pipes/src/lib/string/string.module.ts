import { NgModule } from '@angular/core';

import { LeftPadPipeModule } from './left-pad.pipe';
import { MatchPipeModule } from './match.pipe';
import { PadPipeModule } from './pad.pipe';
import { ReplacePipeModule } from './replace.pipe';
import { RightPadPipeModule } from './right-pad.pipe';
import { SplitPipeModule } from './split.pipe';
import { TestPipeModule } from './test.pipe';
import { TrimPipeModule } from './trim.pipe';
import { NewlinesPipeModule } from './newlines.pipe';
import { CapitalizePipeModule } from './capitalize.pipe';
import { UpperFirstPipeModule } from './upperfirst.pipe';
import { TemplatePipeModule } from './template.pipe';
import { EncodeURIPipeModule } from './encode-uri.pipe';
import { EncodeURIComponentPipeModule } from './encode-uri-component.pipe';
import { DecodeURIPipeModule } from './decode-uri.pipe';
import { DecodeURIComponentPipeModule } from './decode-uri-component.pipe';
import { TruncatePipeModule } from './truncate.pipe';
import { RepeatPipeModule } from './repeat.pipe';
import { SlugifyPipeModule } from './slugify.pipe';
import { StripTagsPipeModule } from './strip-tags.pipe';
import { LatinizePipeModule } from './latinize.pipe';
import { WrapPipeModule } from './wrap.pipe';
import { WithPipeModule } from './with.pipe';
import { ReverseStrPipeModule } from './reverse-str.pipe';
import { ErrorMessagePipeModule } from './error-message.pipe';
import { TranslatePipeModule } from './translate.pipe';
import { GetDisplayNamePipeModule } from './get-display-name.pipe';

@NgModule({
  imports: [
    CapitalizePipeModule,
    DecodeURIComponentPipeModule,
    DecodeURIPipeModule,
    EncodeURIComponentPipeModule,
    LeftPadPipeModule,
    MatchPipeModule,
    PadPipeModule,
    ReplacePipeModule,
    RightPadPipeModule,
    SplitPipeModule,
    TestPipeModule,
    TrimPipeModule,
    NewlinesPipeModule,
    UpperFirstPipeModule,
    TemplatePipeModule,
    EncodeURIPipeModule,
    TruncatePipeModule,
    RepeatPipeModule,
    SlugifyPipeModule,
    StripTagsPipeModule,
    LatinizePipeModule,
    WrapPipeModule,
    WithPipeModule,
    ReverseStrPipeModule,
    ErrorMessagePipeModule,
    TranslatePipeModule,
    GetDisplayNamePipeModule
  ]
})
export class StringPipesModule {}
