import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { Employee } from './employee.model';
import { Team } from './team';
@Component({
  selector: 'app-team-entry',
  templateUrl: './team-entry.component.html',
  styleUrls: ['./team-entry.component.css']
})
export class TeamEntryComponent implements OnInit {

  teamEntryForm : FormGroup;  
  team: Team = new Team();
  isSubmitted: boolean = false;

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
 
  get empFormArray(): FormArray{
	  return this.teamEntryForm.get('employees') as FormArray;
  }

  addNewEmployee(){
	  let fg = this.formBuilder.group(new Employee());
	  this.empFormArray.push(fg);	  
  }
  
  save(){
      this.isSubmitted = true;
      let data = JSON.stringify(this.teamEntryForm.value);
	    console.log('-----Team in JSON Format-----');
      console.log(data);
      this.team = this.teamEntryForm.value;    
  }
}
