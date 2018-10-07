import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  msg: string = 'Hello Radhe Krishna...!';

  @Output("getFormattedMsg")
  getMessageEvent =new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(1);
    this.getMessageEvent.emit(this.msg.toLowerCase());
  }

}
