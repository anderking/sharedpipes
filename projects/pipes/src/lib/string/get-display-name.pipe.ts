import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'getDisplayName'
})
export class GetDisplayNamePipe implements PipeTransform {

  transform(id: string, data:any[]): string {
    let name:string = 'No data'

    if(data === null ) return name

    if( data.length > 0){
      data.forEach( (element:any) => {
        if ( element.RowKey === id ) name = element.Name
      })
    }

    return name;
  }

}

@NgModule({
  declarations: [GetDisplayNamePipe],
  exports: [GetDisplayNamePipe],
})
export class GetDisplayNamePipeModule {}