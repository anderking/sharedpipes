import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({ name: 'arrayFilter' })
export class ArrayFilterPipe implements PipeTransform {
    transform(
        data: Array<Object>,
        idArray: Array<string>,
        valueArray: Array<any>
    ): Array<Object> {
        if (data) {
            let aux = data.filter((item: any) => {
                let compare = true;
                for (let i = 0; i < idArray.length; i++) {
                    if (item[idArray[i]] != valueArray[i]) compare = false;
                }
                return compare;
            });
            return aux;
        }
        return [];
    }
}

@Pipe({ name: 'arrayFilter2' })
export class ArrayFilter2Pipe implements PipeTransform {
    transform(
        data: Array<Object>,
        fieldName: string,
        valueName: string,
        type = true
    ): Array<Object> {
        let res = [];
        if (type)
            res = data ? data.filter((resource: any) => resource[fieldName] == valueName) : [];
        else
            res = data ? data.filter((resource: any) => resource[fieldName] != valueName) : [];
        return res;
    }
}

@Pipe({ name: "filterData2ShowText" })
export class filterData2ShowTextPipe implements PipeTransform {
    transform(
        id: number,
        data: object[],
        idName: string,
        fieldName: string
    ): any {
        if (data) {
            let auxObject: any = data.find((item: any) => {
                return item[idName] == id
            });
            return auxObject ? auxObject[fieldName] : "";
        }
        return "";
    }
}

@NgModule({
    declarations: [ArrayFilterPipe, filterData2ShowTextPipe, ArrayFilter2Pipe],
    exports: [ArrayFilterPipe, filterData2ShowTextPipe, ArrayFilter2Pipe],
})
export class ArrayFilterPipeModule { }