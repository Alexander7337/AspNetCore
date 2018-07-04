(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-customer/add-customer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-customer/add-customer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-warning {\r\n  color: #3C3C3C;\r\n  box-shadow: 0px 2px 0px #bc4809;\r\n}\r\n\r\n.btn-warning:hover {\r\n  box-shadow: 0px 2px 0px #bc4809;\r\n}\r\n\r\nlegend.custom-fieldset {\r\n  width: inherit;\r\n  padding: 0 10px;\r\n  border-bottom: none;\r\n  color: #317a9f;\r\n  font-size: small;\r\n}\r\n\r\n.page-title {\r\n  font-family: 'PT Serif', serif;\r\n  font-style: italic;\r\n  color: #1e4368;\r\n  margin-top: 35px;\r\n}\r\n\r\n.popup {\r\n  position: absolute;\r\n  display: inline-block;\r\n  left: 40%;\r\n  top: 40%;\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  border-color: black;\r\n}\r\n\r\n/* The actual popup */\r\n\r\n.popup .popuptext {\r\n  visibility: hidden;\r\n  width: 380px;\r\n  background-color: lemonchiffon;\r\n  color: black;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 50px 10px;\r\n  position: absolute;\r\n  border-color: black;\r\n  border: 1px solid;\r\n  font-size: large;\r\n}\r\n\r\n/* Toggle this class - hide and show the popup */\r\n\r\n.popup .show {\r\n  visibility: visible;\r\n  -webkit-animation: fadeIn 1s;\r\n  animation: fadeIn 1s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-customer/add-customer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-customer/add-customer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"form-group\" style=\"border: 1px solid #eeeeee; border-radius: 10px; padding: 10px; margin: 0px 75px 0px 52px\">\r\n  <legend class=\"custom-fieldset page-title\">\r\n    Add Customer Form\r\n  </legend>\r\n  <div>\r\n    <div class=\"col-md-2\">\r\n      <!--<label>First Name: </label>-->\r\n      <input [(ngModel)]=\"customerDto.firstName\" placeholder=\"First Name\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <!--<label>Last Name: </label>-->\r\n      <input [(ngModel)]=\"customerDto.lastName\" placeholder=\"Last Name\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <!--<label>Age: </label>-->\r\n      <input [(ngModel)]=\"customerDto.age\" placeholder=\"Age\" class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button (click)=\"addCustomerByService()\" class=\"btn btn-warning\">Add Customer</button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"firstName\" [ngClass]=\"'success'\"> {{firstName}} Added. </div>\r\n  <div *ngIf=\"errorMessage\" [ngClass]=\"'error'\"> {{errorMessage}} </div>\r\n</fieldset>\r\n<br />\r\n\r\n<div class=\"popup\" (click)=\"hidePopup()\">\r\n  <span class=\"popuptext\" id=\"myPopup\">You should log in the application before adding a new customer in the database.</span>\r\n</div>\r\n\r\n<!--<h3>Add Customer with Observable </h3>\r\n\r\n<div>\r\n  <div>\r\n    <label>First Name: </label>\r\n    <input [(ngModel)]=\"customerDto.firstName\" />\r\n  </div>\r\n  <div>\r\n    <label>Last Name: </label>\r\n    <input [(ngModel)]=\"customerDto.lastName\" />\r\n  </div>\r\n  <div>\r\n    <label>Age: </label>\r\n    <input [(ngModel)]=\"customerDto.age\" />\r\n  </div>\r\n  <br />\r\n  <div>\r\n    <button (click)=\"addCustomerByService()\">Add Customer</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"firstName\" [ngClass]=\"'success'\"> {{firstName}} Added. </div>\r\n<div *ngIf=\"errorMessage\" [ngClass]=\"'error'\"> {{errorMessage}} </div>-->\r\n"

/***/ }),

/***/ "./src/app/add-customer/add-customer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-customer/add-customer.component.ts ***!
  \********************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dto_customer_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/customer-dto */ "./src/app/dto/customer-dto.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-service */ "./src/app/customer-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(customerService, http) {
        this.customerService = customerService;
        this.http = http;
        this.customerDto = new _dto_customer_dto__WEBPACK_IMPORTED_MODULE_1__["CustomerDto"]();
        this.customers = [];
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        //this.http.get('/api/customers').subscribe(values => { this.customers = values.json() as Customer[] });
    };
    AddCustomerComponent.prototype.addCustomerByService = function () {
        var _this = this;
        this.customerService.addCustomerWithObservable(this.customerDto).subscribe(function (customer) {
            _this.handleSuccess(customer);
        }, function (error) { return _this.errorMassage = error; });
    };
    AddCustomerComponent.prototype.handleSuccess = function (customer) {
        console.log(customer.firstName + " has been added to DB.");
    };
    AddCustomerComponent.prototype.hidePopup = function () {
        this.customerService.togglePopup();
    };
    AddCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/add-customer/add-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\r\n  color: green;\r\n  font-size: 20px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<script type=\"text/javascript\" src=\"main.js?v=12392823\"></script>\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  <img width=\"300\" alt=\".Net Core Logo\" src=\"../assets/core.png\"/>\r\n</div>\r\n\r\n<app-login></app-login>\r\n<app-add-customer></app-add-customer>\r\n<app-customers-list></app-customers-list>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-service */ "./src/app/customer-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, customerService) {
        this._httpService = _httpService;
        this.customerService = customerService;
        this.title = "Angular - .NET Core";
        this.customers = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/customers').subscribe(function (values) { _this.customers = values.json(); });
    };
    AppComponent.prototype.getCustomerByID = function (id) {
        var _this = this;
        this._httpService.get("/api/customers/" + id).subscribe(function (value) { _this.customer = value.json(); });
        //The alert function awaits the customer property to be set. This makes it one step behind the click event!!!
        //alert(this.customer.firstName + " " + this.customer.lastName + " Age=" + this.customer.age + " ID=" + this.customer.id);
        return this.customer;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
    ], AppComponent.prototype, "customer", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "./src/app/add-customer/add-customer.component.ts");
/* harmony import */ var _dto_customer_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dto/customer-dto */ "./src/app/dto/customer-dto.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-service */ "./src/app/customer-service.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers-list/customers-list.component */ "./src/app/customers-list/customers-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-service */ "./src/app/login-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"],
                _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_8__["AddCustomerComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__["CustomerComponent"],
                _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_12__["CustomersListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"]
            ],
            providers: [
                _models_customer__WEBPACK_IMPORTED_MODULE_6__["Customer"],
                _dto_customer_dto__WEBPACK_IMPORTED_MODULE_9__["CustomerDto"],
                _customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"],
                _login_service__WEBPACK_IMPORTED_MODULE_14__["LoginAuthenticationService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-details/customer-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\r\n  box-shadow: 0px 2px 0px #0b4980;\r\n}\r\n\r\n\r\n.btn-primary:hover {\r\n  box-shadow: 0px 2px 0px #0b4980;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>{{customer.firstName}} has an ID = {{customer.id}}</div>-->\r\n<button (click)=\"toggleCustomerID()\" class=\"btn btn-primary\">Details</button>\r\n"

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-service */ "./src/app/customer-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(http, customerService) {
        this.http = http;
        this.customerService = customerService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent.prototype.toggleCustomerID = function () {
        var currentId = this.customer.id;
        var id = "customer-details-" + currentId;
        if (this.prevId == currentId) {
            //document.getElementById(id).style.display = 'none';
            document.getElementById(id).innerHTML = "";
            this.prevId = "";
        }
        else {
            //document.getElementById(id).style.display = 'block';
            document.getElementById(id).innerHTML = currentId.toString();
            this.prevId = currentId;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"])
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer-service.ts":
/*!*************************************!*\
  !*** ./src/app/customer-service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/customer */ "./src/app/models/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        //const newCustomers: CustomerDto[] = this.customers as CustomerDto[]
        this.token = "Bearer ";
        this.url = "api/customers";
        this.customers = [];
    }
    CustomerService.prototype.addCustomerWithObservable = function (customerDto) {
        //this.token += window.localStorage['auth_token'];
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var token = localStorage['auth_token'];
        if (typeof token != 'undefined') {
            this.customers.push(customerDto);
        }
        else {
            this.togglePopup();
        }
        return this.http
            .post(this.url, customerDto, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CustomerService.prototype.getCustomersFromDb = function () {
        var _this = this;
        if (this.token == "Bearer ") {
            this.token += window.localStorage['auth_token'];
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': this.token });
        this.http.get(this.url, { headers: headers })
            .subscribe(function (customers) {
            (_a = _this.customers).push.apply(_a, customers.json());
            var _a;
            //console.log(this.customers);
        }, function (error) {
            _this.handleError;
        });
    };
    //getCustomersFromDb(): Observable<Response> {
    //  return this.http.get('/api/customers');
    //}
    CustomerService.prototype.getCustomerByID = function (id) {
        var _this = this;
        //this.token += window.localStorage['auth_token'];
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': this.token });
        this.http.get("/api/customers/" + id, { headers: headers })
            .subscribe(function (value) { _this.customer = value.json(); });
        //The alert function awaits the customer property to be set. This makes it one step behind the click event!!!
        //alert(this.customer.firstName + " " + this.customer.lastName + " Age=" + this.customer.age + " ID=" + this.customer.id);
        return this.customer;
    };
    CustomerService.prototype.handleError = function (error) {
        console.error('An error occurred in Customer Service', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ;
    CustomerService.prototype.togglePopup = function () {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    };
    CustomerService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"])
    ], CustomerService.prototype, "customer", void 0);
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>{{customer.firstName}}</td>\r\n<td>{{customer.lastName}}</td>\r\n<td>{{customer.age}}</td>\r\n<td><button (click)=\"showDetails()\">Details</button></td>\r\n\r\n<!--{{customer.firstName}} {{customer.lastName}}, {{customer.age}}\r\n<button (click)=\"showDetails()\">Details</button>-->\r\n<!--<app-customer-details *ngIf=\"toggleDetails\" [customer]=\"customer\"></app-customer-details>-->\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer-service */ "./src/app/customer-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService) {
        this.customerService = customerService;
        this.toggleDetails = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.showDetails = function () {
        //if (this.customerService.getCustomerByID(this.customer.id)) {
        //  this.customer = this.customerService.getCustomerByID(id);
        //} else {
        //  console.log("Customer was null in Customer Details.")
        //}
        this.toggleDetails = !this.toggleDetails;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"])
    ], CustomerComponent.prototype, "customer", void 0);
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customers-list/customers-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/customers-list/customers-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr{\r\n  width: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customers-list/customers-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/customers-list/customers-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ul *ngFor=\"let customer of customers\">\r\n  <li>\r\n    <app-customer [customer]=\"customer\"></app-customer>\r\n  </li>\r\n</ul>-->\r\n\r\n<table *ngIf=\"isLoggedIn\" class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Age</th>\r\n      <th></th>\r\n      <th>ID From DB</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let customer of customers\">\r\n      <td>{{customer.firstName}}</td>\r\n      <td>{{customer.lastName}}</td>\r\n      <td>{{customer.age}}</td>\r\n      <td><app-customer-details [customer]=customer></app-customer-details></td>\r\n      <td id=\"customer-details-{{customer.id}}\"></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!--<ng-grid *ngFor=\"let customer of customers\" class=\"table\">\r\n  <tr>\r\n    <app-customer [customer]=\"customer\"></app-customer>\r\n  </tr>\r\n</ng-grid>-->\r\n<!--<app-customer-details [(ngModel)]=\"customer\"></app-customer-details>-->\r\n\r\n<!--<md-grid-list md-cols=\"3\" md-row-height=\"4:3\">\r\n  <md-grid-tile *ngFor=\"let customer of customers\">\r\n    <span>{{customer.firstName}} {{customer.lastName}}</span><span>{{customer.age}}</span><button (click)=\"showDetails()\">Details</button>\r\n  </md-grid-tile>\r\n</md-grid-list>-->\r\n<!--<div>\r\n  <mat-grid-list cols=\"4\" [rowHeight]=\"basicRowHeight\" gutterSize=\"10px\" >\r\n    <mat-grid-tile *ngFor=\"let customer of customers\" class=\"mat-grid-tile-custom\" href=\"node_modules/@angular/material/prebuilt-themes/indigo-pink.css\">\r\n      <div>{{customer.firstName}} {{customer.lastName}}, {{customer.age}} <button (click)=\"showDetails()\">Details</button></div>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/customers-list/customers-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customers-list/customers-list.component.ts ***!
  \************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer-service */ "./src/app/customer-service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-service */ "./src/app/login-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(customerService, loginService) {
        this.customerService = customerService;
        this.loginService = loginService;
        this.toggleDetails = false;
        this.isLoggedIn = this.loginService.isValid();
    }
    CustomersListComponent.prototype.ngOnInit = function () {
        //this.customerService.getCustomersFromDb().subscribe(customers => { this.customers = customers.json() });
        this.customerService.getCustomersFromDb();
        this.customers = this.customerService.customers;
    };
    CustomersListComponent.prototype.showDetails = function () {
        //if (this.customerService.getCustomerByID(this.customer.id)) {
        //  this.customer = this.customerService.getCustomerByID(id);
        //} else {
        //  console.log("Customer was null in Customer Details.")
        //}
        this.toggleDetails = !this.toggleDetails;
    };
    CustomersListComponent.prototype.toggleCustomerID = function () {
        var currentId = this.customer.id;
        if (this.prevId == currentId) {
            document.getElementById("customer-details").style.display = 'none';
        }
        else {
            document.getElementById("customer-details").style.display = 'block';
            this.prevId = currentId;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"])
    ], CustomersListComponent.prototype, "customer", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.css */ "./src/app/customers-list/customers-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/dto/customer-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/customer-dto.ts ***!
  \*************************************/
/*! exports provided: CustomerDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDto", function() { return CustomerDto; });
var CustomerDto = /** @class */ (function () {
    function CustomerDto() {
    }
    return CustomerDto;
}());



/***/ }),

/***/ "./src/app/login-service.ts":
/*!**********************************!*\
  !*** ./src/app/login-service.ts ***!
  \**********************************/
/*! exports provided: LoginAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthenticationService", function() { return LoginAuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginAuthenticationService = /** @class */ (function () {
    function LoginAuthenticationService(http) {
        this.http = http;
    }
    LoginAuthenticationService.prototype.authentication = function (username, password) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //let params = new URLSearchParams();
        //params.append('client_id', "a1");
        //params.append('username', username);
        //params.append('password', password);
        //params.append('scope', "resourcesScope anotherScope offline_access");
        //params.append('grant_type', "password");
        var model = {
            client_id: "a1",
            /* client_secret: "secret",*/
            username: username,
            password: password,
            scope: "resourcesScope anotherScope offline_access",
            grant_type: "password"
        };
        var model_json = JSON.stringify(model);
        //let model2 = {
        //  "response_type": "token",
        //  "client_id": "a2",
        //  "redirect_uri": "http://localhost:61773/",
        //  "scope": "resourcesScope anotherScope offline_access",
        //  "state": "allowed"
        //};
        var temp = "client_id=a1&username=" + username + "&password=" + password + "&scope=resourcesScope%20anotherScope%20offline_access&grant_type=password";
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        options.headers = headers;
        //options.search = params;
        //options.body = model_json;
        this.http.post("http://localhost:57131/connect/token", temp, httpOptions)
            .subscribe(function (success) {
            localStorage.setItem('auth_token', success.access_token);
            _this.isLoggedIn = true;
            window.location.href = "http://localhost:61775/";
        });
    };
    LoginAuthenticationService.prototype.clearDetails = function () {
        localStorage.clear();
        this.isLoggedIn = false;
        location.reload();
    };
    LoginAuthenticationService.prototype.isValid = function () {
        if (typeof localStorage['auth_token'] != 'undefined') {
            this.isLoggedIn = true;
        }
        return this.isLoggedIn;
    };
    LoginAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginAuthenticationService);
    return LoginAuthenticationService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-warning {\r\n  color: #3C3C3C;\r\n  box-shadow: 0px 2px 0px #bc4809;\r\n}\r\n\r\n.btn-warning:hover {\r\n  box-shadow: 0px 2px 0px #bc4809;\r\n}\r\n\r\n.btn-danger {\r\n  \r\n  box-shadow: 0px 2px 0px #c3002f;\r\n}\r\n\r\nlegend.custom-fieldset {\r\n  width: inherit;\r\n  padding: 0 10px;\r\n  border-bottom: none;\r\n  color: #317a9f;\r\n  font-size: small;\r\n}\r\n\r\n.page-title {\r\n  font-family: 'PT Serif', serif;\r\n  font-style: italic;\r\n  color: #1e4368;\r\n  margin-top: 35px;\r\n}\r\n\r\n/*@media (min-width: 1200px) {\r\n  .container {\r\n    width: 95%;\r\n  }\r\n}*/\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"width: 93%; margin: 0px 52px 0px 52px;\">\r\n\r\n  <fieldset class=\"form-group\" style=\"border: 1px solid #eeeeee; border-radius: 10px; padding: 10px\">\r\n    <legend class=\"custom-fieldset page-title\">\r\n      Login Form\r\n    </legend>\r\n\r\n    <form class=\"\">\r\n      <div class=\"ui stack segment\">\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input col-md-2\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" class=\"form-control\" />\r\n            <span style=\"color:red;\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input col-md-2\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" class=\"form-control\" />\r\n            <span style=\"color:red\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <button type=\"button\" (click)=\"manageCredentials(username,password)\" class=\"btn btn-warning\">\r\n            Login\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger\">\r\n            Logout\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"ui error\" style=\"color:red;\"></div>\r\n      </div>\r\n    </form>\r\n\r\n  </fieldset>\r\n\r\n  <!--<h3 class=\"ui header centered\">Login Form</h3>\r\n  <form class=\"ui large form validate-me\">\r\n\r\n    <div class=\"ui stack segment\">\r\n      <div class=\"field\">\r\n        <div class=\"ui left icon input col-md-2\">\r\n          <i class=\"user icon\"></i>\r\n          <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" class=\"form-control\"/>\r\n          <span style=\"color:red;\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <div class=\"ui left icon input col-md-2\">\r\n          <i class=\"lock icon\"></i>\r\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" class=\"form-control\"/>\r\n          <span style=\"color:red\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"button\" (click)=\"manageCredentials(username,password)\" class=\"btn btn-warning\">\r\n          Login\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"ui error\" style=\"color:red;\"></div>\r\n\r\n    </div>\r\n\r\n  </form>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-service */ "./src/app/login-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.manageCredentials = function (username, password) {
        this.loginService.authentication(username, password);
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.clearDetails();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RMD-AYanev\Documents\Visual Studio 2017\Projects\RestfulWebServices\AspNetCore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map