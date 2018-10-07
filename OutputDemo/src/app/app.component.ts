import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Output Demo';

  msg : string = "Hello Good Morning...!";
  formattedMsg : string = '';

  rk : number = 0;
  formattedResult : string = '';

  getMsg(msg){
    console.log(2);
    this.formattedMsg = msg;
  }

  getNumericResults(r){
    this.rk = r;
  }

  getStringResults(strResult){
    this.formattedResult = strResult;
  }
}
