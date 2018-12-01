import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { Employee } from './employee.model';
@Component({
  selector: 'app-team-entry',
  templateUrl: './team-entry.component.html',
  styleUrls: ['./team-entry.component.css']
})
export class TeamEntryComponent implements OnInit {

  teamEntryForm : FormGroup;  

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createTeamForm();
    this.addNewEmployee();
  }

  createTeamForm(){
    this.teamEntryForm = this.formBuilder.group({
      teamName : ['',Validators.required],
      teamManager: ['',Validators.required],
      employees: this.formBuilder.array(
        []
      )      
    });
  }

  get employeeArray():FormArray{
    return this.teamEntryForm.get('employees') as FormArray;    
  }

  addNewEmployee(){
	  let fg = this.formBuilder.group(new Employee());
	  this.employeeArray.push(fg);	  
  }
  
  save(){
    console.log(this.teamEntryForm.value);
    console.log((<FormArray>this.teamEntryForm.get("employees")).controls);
  }
}
