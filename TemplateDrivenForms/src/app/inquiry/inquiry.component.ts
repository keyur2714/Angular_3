import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';
import { Inquiry } from './inquiry.model';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  inquiry : Inquiry = new Inquiry();
  isSubmitted: boolean = false;
  courseList: Course[] = [];
  successMsg : string = '';
  
  constructor() { }

  ngOnInit() {
    let course1 = new Course();
    course1.id = 10;
    course1.courseCode = "ANGULAR";
    course1.courseName = "Angular 6";
    course1.fees = 12000;
    course1.trainerName = "keyur";

    let course2 = new Course();
    course2.id = 20;
    course2.courseCode = "R";
    course2.courseName = "Matchine Learning R";
    course2.fees = 14000;
    course2.trainerName = "Abhinav";

    let course3 = new Course();
    course3.id = 30;
    course3.courseCode = "HADOOP";
    course3.courseName = "BigData Hadoop";
    course3.fees = 15000;
    course3.trainerName = "Vaibhav";

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
  }

  save(frm){
    if(frm.valid){
      this.isSubmitted = true;
      console.log("Inquiry is Generated for Course : "+this.inquiry.course.courseName);
      this.successMsg = "Inquiry is Generated for Course : "+this.inquiry.course.courseName;
    }
  }

  reset(frm:NgForm){
    this.successMsg = '';
    // this.inquiry.course.courseName = '';
    // this.inquiry.name = null;
    // this.inquiry.mobileNo = null;
    // this.inquiry.email = null; 
    frm.setValue({
      course : this.courseList[0],
      name: 'keyur',
      mobileNo : '9898121212',
      email: 'keyurjava27@gmail.com'
    });
    
    //console.log(this.inquiry.course.courseName+" ===");   
    //frm.reset();
  }
}
