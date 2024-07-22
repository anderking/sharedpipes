import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(errors: any): any {
    let error = '';
    Object.keys(errors).reverse().map((key: string) => {
      error = key
    });
    return error;
  }

}

@NgModule({
  declarations: [ErrorMessagePipe],
  exports: [ErrorMessagePipe],
})
export class ErrorMessagePipeModule {}
