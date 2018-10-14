import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive Demo';
  color : string = 'orange';

  friendsList : string [] = [
    "keyur",
    "denish",
    "vinit",
    "darsh",
    "Ami"
  ];

  colorList : string[] = [
    "green",
    "yellow",
    "blue",
    "pink",
    "red"
  ];

}
