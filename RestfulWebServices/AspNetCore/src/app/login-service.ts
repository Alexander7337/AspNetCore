import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './models/login'
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginAuthenticationService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  authentication(username: string, password: string): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    var model = {
      client_id: "a1",
      /* client_secret: "secret",*/
      username: username,
      password: password,
      scope: "resourcesScope anotherScope offline_access",
      grant_type: "password"
    };
    let model_json = JSON.stringify(model);

    let temp = `client_id=a1&username=${username}&password=${password}&scope=resourcesScope%20anotherScope%20offline_access&grant_type=password`;

    let options = new RequestOptions();
    options.headers = headers;
    //options.search = params;
    //options.body = model_json;

    this.http.post("http://localhost:57131/connect/token", temp, httpOptions)
      .subscribe(
        (success: any) => {
          localStorage.setItem('auth_token', success.access_token);
          this.isLoggedIn = true;
          //window.location.href = "http://localhost:4200/";
          window.location.reload();  
        })
  }

  clearDetails(): any {
    localStorage.clear();
    this.isLoggedIn = false;
    location.reload();
  }

  isValid(): any {
    if (typeof localStorage['auth_token'] != 'undefined') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
