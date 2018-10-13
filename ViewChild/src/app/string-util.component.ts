import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector : 'app-string-util',
    template : `<h1 #ch>Hi</h1>Result is : <ng-content></ng-content>`,
    styles : []
})
export class StringUtilComponent {

    @ViewChild("ch")
    chEl :  ElementRef;

    constructor(){
        console.log("String Util Component Object Created...!");
    }
 
    convertUpperCase(str : string):string{
        return str.toUpperCase();
    }    

    convertLowerCase(str : string):string{
        return str.toLowerCase();
    }

    reverseString(str : string):string{
        console.log(str.split(''));
        console.log(str.split('').reverse());
        console.log(str.split('').reverse().join(''));
        return str.split('').reverse().join('');
    }

}