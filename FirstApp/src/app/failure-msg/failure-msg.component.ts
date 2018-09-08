import { Component,OnInit } from '@angular/core';
@Component({
    selector: 'app-failure-msg',
    template: `<h1>{{failureMsg}}</h1>`,
    styles: ['h1{ border: 1px solid blue; color: red;}']
})
export class FailureMsgComponent implements OnInit{
    failureMsg : string = "Sorry This is Fail...!";

    constructor(){
        console.log("FailureMsgComponent Object Created...!");
    }

    ngOnInit(){
        console.log("FailureMsgComponent Inititalized...!");
    }
}