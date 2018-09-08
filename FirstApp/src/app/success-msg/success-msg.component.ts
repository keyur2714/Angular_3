import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-msg',
  templateUrl: './success-msg.component.html',
  styleUrls: ['./success-msg.component.css']
})
export class SuccessMsgComponent implements OnInit {

  msg: string = "This Activity has been done successfully...!";

  constructor() {
    console.log(" Object created...");
   }

  ngOnInit() {
    console.log(" SuccessMsgCoomponent Initialized...");
  }

}
