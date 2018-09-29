import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'If Else Demo';
  age : number = 18;
  per : number = 71;
  grade : string = '';

  calculateGrade(){
    if(this.per >= 70){
      this.grade = "Distinction";
    }else if(this.per >= 60){
      this.grade = "First";
    }else if(this.per >= 50){
      this.grade = "Second";
    }else if(this.per >= 40){
      this.grade = "Pass";
    }else{
      this.grade = "Fail";
    }
  }
}
