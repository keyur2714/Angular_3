import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EmployeeService } from './services/employee-service';
import { Employee } from './model/employee.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';
  newNumbers = Observable.interval(1000);
  randomNumber = 0;
  myGeneratedNumber = 0;
  empList: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    // this.newNumbers.subscribe(
    //   (success)=>{
    //     this.myGeneratedNumber = success;
    //   },
    //   (error)=>{

    //   }
    // );
    //this.empList = this.employeeService.getEmpList();
    this.employeeService.getEmpListWithUpeerCaseNames().subscribe(
      (response: Employee[])=>{
        this.empList = response;
      },
      (error)=>{
        console.log(error);
      }
    )



    // this.employeeService.getRandomNumber().subscribe(
    //   (num:number)=>{
    //     this.randomNumber = num;
    //   }
    // )
  }

}
