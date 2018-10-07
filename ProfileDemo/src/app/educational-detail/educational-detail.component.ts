import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational-detail',
  templateUrl: './educational-detail.component.html',
  styleUrls: ['./educational-detail.component.css']
})
export class EducationalDetailComponent implements OnInit {
  sscEducationInfo = {
    qualification: "10th",
    degree: "SSC",
    per: 72.14
  };

  hscEducationInfo = {
    qualification: "12th",
    degree: "HSC",
    per: 66.50
  };

  graduationEducationInfo = {
    qualification: "BTech IT",
    degree: "Graduate",
    per: 77.14
  };

  postGraduateEducationInfo = {
    qualification: "MTech IT",
    degree: "Post Graduate",
    per: 65.00
  };

  constructor() { }

  ngOnInit() {
  }

}
