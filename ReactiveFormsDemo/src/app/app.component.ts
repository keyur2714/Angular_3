import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSubmitted: boolean = false;

  studentForm = new FormGroup(
    {
      rollNo: new FormControl('',Validators.required),
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      std: new FormControl(),
      hobbies: new FormArray([new FormControl()])
    }
  );

  setRequired(){
    this.studentForm.get("std").setValidators(Validators.required);
  }
  addHobbyControl(){
    let hobby=new FormControl();
    (<FormArray>this.studentForm.get("hobbies")).push(hobby);    
  }
  save(){
    this.isSubmitted = true;
    console.log(this.studentForm.value);
    console.log(this.studentForm.valid);
    console.log(this.studentForm.get("rollNo").value);
    console.log(this.studentForm.get("name").value);
    console.log(this.studentForm.get("name").valid);
    console.log(this.studentForm.get("std").value);    
    console.log((<FormArray>this.studentForm.get("hobbies")).controls);    
  }
}
