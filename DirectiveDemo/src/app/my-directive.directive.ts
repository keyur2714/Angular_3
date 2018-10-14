import { Directive,AfterViewInit,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements AfterViewInit{

  @Input()
  color : string = 'green';

  @Input()
  fontSize : string = '20px';

  constructor(private elementRef:ElementRef) { 
    console.log("Directive Object Created...!");
  }

  ngAfterViewInit(){
    console.log(this.elementRef);
    console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.innerHTML = this.elementRef.nativeElement.innerHTML.toUpperCase();
  }
}
