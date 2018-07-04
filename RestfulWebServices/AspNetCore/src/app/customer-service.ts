import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, throwError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
//import { Rx } from 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs-operators';
//import 'rxjs/add/operator/map';

import { CustomerDto } from './dto/customer-dto'
import { map, catchError } from 'rxjs/operators';
import { Customer } from './models/customer';
import { error } from 'protractor';
import { Input } from '@angular/core'
import { ok } from 'assert';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class CustomerService {

  //const newCustomers: CustomerDto[] = this.customers as CustomerDto[]
  token: string = "Bearer ";
  url: string = "api/customers";
  customers: Customer[] = [];
  @Input() customer: Customer;

  constructor(private http: Http) { }

  addCustomerWithObservable(customerDto: CustomerDto): Observable<CustomerDto> {
    //this.token += window.localStorage['auth_token'];
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage['auth_token'];
    if (typeof token != 'undefined') {
      this.customers.push(customerDto as Customer);

      return this.http
        .post(this.url, customerDto, options)
        .pipe(map(this.extractData),
        catchError(this.handleError));

    } else {
      this.togglePopup();
      return Observable.throw(new Error("Login failed!"));
    }
  }

  getCustomersFromDb(): void {
    if (this.token == "Bearer ") {
      this.token += window.localStorage['auth_token'];
    }
    let headers = new Headers({ 'Authorization': this.token })
    this.http.get(this.url, { headers: headers })
      .subscribe(
      customers => {
        this.customers.push(...customers.json());
        //console.log(this.customers);
      },
      error => {
        this.handleError
      });
  }

  //getCustomersFromDb(): Observable<Response> {
  //  return this.http.get('/api/customers');
  //}

  getCustomerByID(id) {
    //this.token += window.localStorage['auth_token'];
    let headers = new Headers({ 'Authorization': this.token })
    this.http.get(`/api/customers/${id}`, { headers: headers })
      .subscribe(value => { this.customer = value.json() as Customer });

    //The alert function awaits the customer property to be set. This makes it one step behind the click event!!!
    //alert(this.customer.firstName + " " + this.customer.lastName + " Age=" + this.customer.age + " ID=" + this.customer.id);

    return this.customer;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in Customer Service', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };

  togglePopup() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  private extractData(res: Response) {
    let body = res.json();

    return body || {};
  }
}
