import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Http } from '@angular/http';
import { Response } from '@angular/http'

import { Customer } from './models/customer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: Http) { }

  customers: Customer[] = [];
  ngOnInit() {
    let temp = this._httpService.get('/api/customers').forEach(obj => obj.json() as Customer[]);
    let temp2 = this._httpService.get('/api/customers').subscribe((res: Response) => res.json().response);
    this._httpService.get('/api/customers').subscribe(values => { this.customers = values.json() as Customer[] });
  }

  title = 'app';
}
