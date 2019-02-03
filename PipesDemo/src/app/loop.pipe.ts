import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loop'
})
export class LoopPipe implements PipeTransform {

  transform(value: any, cnt?: number, temp?: string): any {
    let newVal = temp;
    for(let i=1;i<=cnt;i++){
      newVal = newVal + ' ' + value;
    }

    return newVal;
  }

}

