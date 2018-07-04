import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Http } from '@angular/http';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-customer-details',
  templateUrl: 'customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  private prevId: any;

  constructor(private http: Http, private customerService: CustomerService) { }

  ngOnInit() {
  }

  toggleCustomerID() {
    let currentId = this.customer.id;
    let id = `customer-details-${currentId}`;
    if (this.prevId == currentId) {
      //document.getElementById(id).style.display = 'none';
      document.getElementById(id).innerHTML = "";
      this.prevId = "";
    } else {
      //document.getElementById(id).style.display = 'block';
      document.getElementById(id).innerHTML = currentId.toString();
      this.prevId = currentId;
    }
  }
}
