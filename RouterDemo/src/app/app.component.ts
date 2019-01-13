import { Component } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouterDemo';
  loggedIn : boolean = false;

  constructor(private authenticationService:AuthenticationService){}

  isLoggedIn():void{
    if(this.authenticationService.isAuthenticated())
      this.loggedIn = true;
  }
}
