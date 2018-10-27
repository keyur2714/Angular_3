import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Forms Demo...!';
  nm : string = '';
  ct : string = 'Pune';
  mobileNumber : string = '';
  isSubmitted : boolean = false;

  save(frm):void{
    this.isSubmitted = true;
    console.log(frm);
    console.log(frm.controls["name"].valid);
    console.log(frm.controls["name"].value);
    this.nm = frm.controls["name"].value;
    this.mobileNumber = frm.controls["mobileNo"].value;
  }
}
