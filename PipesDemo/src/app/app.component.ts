import { Component, OnInit } from '@angular/core';
import { Observable,interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';

  msg : string = 'Hello Radhe Krishna...';

  grade : string = 'Fail';

  name : string = 'keyur';

  today : Date = new Date();

  numbers = interval(1000);

  num = 0;

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
}
