import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(num1,num2):void{
    this.result = parseInt(num1)+parseInt(num2); 
  }
  mul(num1,num2):void{
    this.result = parseInt(num1)*parseInt(num2); 
  }
  sub(num1,num2):void{
    this.result = parseInt(num1)-parseInt(num2); 
  }
  div(num1,num2):void{
    let no = parseInt(num2);
    if(no === 0)
      this.result = 0;
    else
      this.result = parseInt(num1)/parseInt(num2); 
  }
}
