import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer-service';

import { MatGridList, MatList } from '@angular/material';
import { Input } from '@angular/core';
import { LoginAuthenticationService } from '../login-service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  private toggleDetails: boolean = false;
  private prevId: any;
  customers: Customer[];
  @Input() customer: Customer;
  isLoggedIn: boolean = this.loginService.isValid();

  constructor(private customerService: CustomerService, private loginService: LoginAuthenticationService) { }

  ngOnInit() {
    //this.customerService.getCustomersFromDb().subscribe(customers => { this.customers = customers.json() });
    this.customerService.getCustomersFromDb();
    this.customers = this.customerService.customers;
  }

  showDetails() {
    this.toggleDetails = !this.toggleDetails
  }

  toggleCustomerID() {
    let currentId = this.customer.id;
    if (this.prevId == currentId) {
      document.getElementById("customer-details").style.display = 'none';
    } else {
      document.getElementById("customer-details").style.display = 'block';
      this.prevId = currentId;
    }
  }
}
