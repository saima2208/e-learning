 import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { LoggedinUserService } from '../services/loggedin-user.service';
 

 @Component({
   selector: 'app-header',
   imports: [RegisterComponent, LoginComponent],
   templateUrl: './header.component.html',  
    styleUrl: './header.component.css'
 })
 export class HeaderComponent  implements OnInit {
  isUserLoggedIn: boolean = false;
  loggedinUserName: string = "";

  constructor(
    private loggedinUserService: LoggedinUserService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.loggedinUserService.isLoggedIn();

    if (this.isUserLoggedIn) {
      const loggedInUser = this.loggedinUserService.getLoggedInUser();
      this.loggedinUserName = loggedInUser ? loggedInUser.name : ''; 
    }    
  }

  logoutBtn() {
    this.loggedinUserService.logout();
    window.location.href="/home"
  }

}
