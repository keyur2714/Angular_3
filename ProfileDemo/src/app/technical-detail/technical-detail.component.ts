import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-detail',
  templateUrl: './technical-detail.component.html',
  styleUrls: ['./technical-detail.component.css']
})
export class TechnicalDetailComponent implements OnInit {

  technicalSkilSetList = [
    {
      frontEnd: "Angular 6",
      backEnd: "Java",
      os: "Windows",
      database: "MySql"
    },
    {
      frontEnd: "HTML 5",
      backEnd: "J2ee",
      os: "Ubantu",
      database: "MSSql"
    },
    {
      frontEnd: "Javascript",
      backEnd: "Node JS",
      os: "Solaris",
      database: "Oracle"
    },
    {
      frontEnd: "Typescript",
      backEnd: "Spring BOOT",
      os: "Linux",
      database: "MongoDB"
    },
    {
      frontEnd: "Bootstrap CSS",
      backEnd: "Hibernate",
      os: "MAC",
      database: "Postgre SQL"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
