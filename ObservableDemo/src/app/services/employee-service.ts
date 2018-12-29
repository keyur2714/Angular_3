import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs/Rx';
export class EmployeeService{
 
    empList:Employee[] = [
        {
            "id":27,
            "name":"keyur",
            "dept":"IT"
        },
        {
            "id":26,
            "name":"denish",
            "dept":"IT"
        },
        {
            "id":44,
            "name":"vinit",
            "dept":"SALES"
        }
    ];

    getEmpList():Employee[]{
        return this.empList;
    }

    getEmpListWithObservable():Observable<Employee[]>{
        return Observable.of(this.empList);
    }

    getEmpListWithUpeerCaseNames():Observable<Employee[]>{
        return this.getEmpListWithObservable().map(
            (eList:Employee[])=>{                
                for(let emp of eList){
                   emp.name = emp.name.toUpperCase(); 
                }
                return eList;
            }
        ).catch(
            (error:any)=>{
                return Observable.throw(error);
            }
        );
    }

    getRandomNumber():Observable<number>{
        return Observable.interval(1000);
    }
}