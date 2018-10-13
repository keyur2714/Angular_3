import { Component, ViewChild, ElementRef } from '@angular/core';
import { StringUtilComponent } from './string-util.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@ViewChild';

  resultString : string = '';

  @ViewChild("str")
  str : ElementRef;


  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;

  @ViewChild("result")
  resultEl :  ElementRef;

  
  

  convertToUpperCase():void{
    console.log(this.str);
    let s = this.str.nativeElement.value;
    this.resultString = this.stringUtilComponent.convertUpperCase(s);
    //this.str.nativeElement.value = '';

    console.log(this.resultEl.nativeElement.innerHTML);
    console.log(this.stringUtilComponent.chEl.nativeElement.innerHTML);
  }

  convertToLowerCase(str:string):void{
    console.log(this.str);
    let s = this.str.nativeElement.value;
    this.resultString = this.stringUtilComponent.convertLowerCase(s);
  }

  convertToReverse(str:string):void{
    console.log(this.str);
    let s = this.str.nativeElement.value;
    this.resultString = this.stringUtilComponent.reverseString(s);

  }
}
