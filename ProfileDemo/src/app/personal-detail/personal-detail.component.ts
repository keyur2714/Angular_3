import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName: string = "keyur";
  lastName: string = "Thakur";
  dateOfBirth: string = "27/12/1986";
  gender: string = "Male";
  
  constructor() { }

  ngOnInit() {
  }

}
