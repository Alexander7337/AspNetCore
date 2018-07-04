import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer-service';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer;
  private toggleDetails: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  showDetails() {
    this.toggleDetails = !this.toggleDetails
  }

}
