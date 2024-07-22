import { Pipe, PipeTransform, NgModule, Inject } from "@angular/core";
import { ITranslateService } from "@shared/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: "translate"
})
export class TranslatePipe implements PipeTransform {
  // anywhere in the library where the service is needed
  constructor(@Inject('ITranslateService') private _ts: ITranslateService) {

  }
  transform(value: string): Observable<string> {
    return this._ts.getLangLibrary$().pipe(
      map((template: any) => template[value] ? template[value] : value)
    )
  }
}

@NgModule({
  declarations: [TranslatePipe],
  exports: [TranslatePipe],
})
export class TranslatePipeModule {}