import { Component, OnInit } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { TestService } from './test-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'PipesDemo';

  constructor(private testService: TestService){}

  msg : string = 'Hello Radhe Krishna...';

  grade : string = 'Fail';

  name : string = 'denish';

  today : Date = new Date();

  numbers = interval(1000);

  num = 0;

  sayHello():string{
    return this.testService.sayHello();
  }

  emp = {
    name : 'keyur',
    city : 'surat'
  };

  ngOnInit(){
    // this.numbers.subscribe(
    //   (num)=>{
    //     this.num = num;
    //   }
    // )
  }

  sum(num1:number,num2:number):number{
    return num1 + num2;
  }
}
