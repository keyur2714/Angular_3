import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConvert'
})
export class StatusConvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newValue : string = '';
    if(value === 'Dist'){
      newValue = 'dist';
    }else if(value === 'First'){
      newValue = 'first';
    }else if(value === 'Second'){
      newValue = 'second';
    }else if(value === 'Pass'){
      newValue = 'pass';
    }else if(value === 'Fail'){
      newValue = 'fail';
    }

    return newValue;
  }

}
