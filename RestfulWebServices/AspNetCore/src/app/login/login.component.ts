import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from '../login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginAuthenticationService) { }

  ngOnInit() {
  }

  manageCredentials(username: any, password: any): any {
    this.loginService.authentication(username, password)
  }

  logout() {
    this.loginService.clearDetails();
  }
 
}
