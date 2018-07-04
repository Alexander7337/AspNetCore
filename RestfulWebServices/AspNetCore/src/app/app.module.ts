import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Customer } from './models/customer';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component'
import { CustomerDto } from './dto/customer-dto';
import { CustomerService } from './customer-service';
import { CustomerComponent } from './customer/customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthenticationService } from './login-service';

import { MatGridListModule, MatList } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    CustomerComponent,
    CustomersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    Customer,
    CustomerDto,
    CustomerService,
    LoginAuthenticationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
