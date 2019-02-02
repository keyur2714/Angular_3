import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  isValidUser: boolean;  
  errorStatus : number = 0;

  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  login(frm):void{
    if(frm.valid){
      this.authenticationService.authenticate(this.email,this.password).subscribe(
        (users: User[])=>{          
            for(let user of users){
                if(user.userName === this.email && user.password === this.password){
                    console.log(user.token)                                        
                    this.isValidUser = true;
                    sessionStorage.setItem("token",user.token);
                }                        
            }
            this.authenticationService.setAuthenticated(this.isValidUser);            
            if(this.isValidUser){              
              this.router.navigate([this.authenticationService.getReDirectUrl()]);
              this.errorStatus = 200;
            }else{
              this.errorStatus = 401;
              this.router.navigate(['signin']);
            }
        }        
      )      
    }
  }
}
