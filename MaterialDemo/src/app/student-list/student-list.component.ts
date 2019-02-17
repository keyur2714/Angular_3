import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from './student.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;   

  studentList: Student[] = [];

  displayedColumns: string[] = ['rollNo', 'name', 'mobileNo', 'email'];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    let stud1 = new Student();
    stud1.rollNo = 27;
    stud1.name = 'keyur';
    stud1.mobileNo = '7387029671';
    stud1.email = 'keyurjava27@gmail.com';

    let stud2 = new Student();
    stud2.rollNo = 26;
    stud2.name = 'denish';
    stud2.mobileNo = '7387029123';
    stud2.email = 'denishjava26@gmail.com';

    let stud3 = new Student();
    stud3.rollNo = 44;
    stud3.name = 'vinit';
    stud3.mobileNo = '7387029222';
    stud3.email = 'vinitjava44@gmail.com';

    this.studentList.push(stud1);
    this.studentList.push(stud2);
    this.studentList.push(stud3);

    this.dataSource.data = this.studentList;
  }

}
