import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core'
import { Http } from '@angular/http';
import { Response } from '@angular/http'

import { Customer } from './models/customer'
import { Observable } from 'rxjs';

import { Input } from '@angular/core'
import { CustomerDto } from './dto/customer-dto';
import { CustomerService } from './customer-service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title: string = "Angular - .NET Core"

  constructor(private _httpService: Http, private customerService: CustomerService) { }

  @Input() customer: Customer;
  customers: Customer[] = [];
 
  errorMassage: string;
  
  ngOnInit() {
    this._httpService.get('/api/customers').subscribe(values => { this.customers = values.json() as Customer[] });
  }

  getCustomerByID(id) {
    this._httpService.get(`/api/customers/${id}`).subscribe(value => { this.customer = value.json() as Customer });

    //The alert function awaits the customer property to be set. This makes it one step behind the click event!!!
    //alert(this.customer.firstName + " " + this.customer.lastName + " Age=" + this.customer.age + " ID=" + this.customer.id);

    return this.customer;
  }
}
