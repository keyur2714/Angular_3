import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private viewContainerRef:ViewContainerRef,private templateRef : TemplateRef<any>) { }

  @Input("appMyLoop") set myLoop(loopCounter: number){
    console.log(loopCounter);
    console.log(this.viewContainerRef);
    console.log(this.templateRef);
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
