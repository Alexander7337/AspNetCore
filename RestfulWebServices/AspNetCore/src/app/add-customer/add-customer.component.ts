import { Component, OnInit } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { CustomerDto } from '../dto/customer-dto';
import { Http, Headers } from '@angular/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Input } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer-service';
import { win32 } from 'path';

@Component({
  selector: 'app-add-customer',
  templateUrl: 'add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerDto = new CustomerDto();
  firstName: string;
  lastName: string;
  age: number;
  errorMassage: string;

  customers: Customer[] = [];
  customer: Customer;

  constructor(private customerService: CustomerService, private http: Http) { }
  
  ngOnInit() {
    //this.http.get('/api/customers').subscribe(values => { this.customers = values.json() as Customer[] });
  }

  addCustomerByService(): void {
    this.customerService.addCustomerWithObservable(this.customerDto).subscribe(customer => {
      this.handleSuccess(customer)
    },
      error => this.errorMassage = <any>error)
  }

  private handleSuccess(customer: CustomerDto) {
    console.log(`${customer.firstName} has been added to DB.`);
  }

  private hidePopup() {
    this.customerService.togglePopup();
  }
}
