import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event And Property Bindings';
  flag : boolean = true;
  selectdedStatus : string = '';

  sayHello():void{
    console.log("Hello Radhe Krishna...!");
  }

  toggleButton(buttonStatus):void{
    console.log("Hello From Selected Country...!"+buttonStatus);
    this.selectdedStatus = buttonStatus === 'true' ? 'Disabled' : 'Enabled';
    this.flag = buttonStatus === 'true' ? true : false;
  }
}
