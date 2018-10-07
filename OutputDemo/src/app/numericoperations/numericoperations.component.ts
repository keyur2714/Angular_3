import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numericoperations',
  templateUrl: './numericoperations.component.html',
  styleUrls: ['./numericoperations.component.css']
})
export class NumericoperationsComponent implements OnInit {

  result : number = 0;

  @Output()
  getResult = new EventEmitter<number>();

  @Output("getFormattedResult")
  getResult1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(num1,num2){
    this.result = parseInt(num1)+parseInt(num2);
    this.getResult.emit(this.result);
    this.getResult1.emit("Reuslt is : "+this.result);
  }

  sub(num1,num2){
    this.result = parseInt(num1) - parseInt(num2);
    this.getResult.emit(this.result);
    this.getResult1.emit("Reuslt is : "+this.result);
  }


  mul(num1,num2){
    this.result = parseInt(num1) * parseInt(num2);
    this.getResult.emit(this.result);
    this.getResult1.emit("Reuslt is : "+this.result);
  }


  div(num1,num2){
    if(num2 == 0)
      this.result = 0;
    else
      this.result = parseInt(num1) / parseInt(num2);
    this.getResult.emit(this.result);
    this.getResult1.emit("Reuslt is : "+this.result);
  }

}
