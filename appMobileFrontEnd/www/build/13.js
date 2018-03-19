webpackJsonp([13],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditPageModule", function() { return ClientEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_edit__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClientEditPageModule = (function () {
    function ClientEditPageModule() {
    }
    ClientEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__client_edit__["a" /* ClientEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__client_edit__["a" /* ClientEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ClientEditPageModule);
    return ClientEditPageModule;
}());

//# sourceMappingURL=client-edit.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientEditPage = (function () {
    function ClientEditPage(navCtrl, viewCtrl, navParams, clientProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.clientProvider = clientProvider;
        this.item = navParams.get('clientModal') || clientProvider.defaultClient;
    }
    ClientEditPage.prototype.ionViewDidLoad = function () {
    };
    ClientEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ClientEditPage.prototype.close = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ClientEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-edit',template:/*ion-inline-start:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-edit/client-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-title>{{ \'CLIENT_EDIT_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-group>\n\n      <ion-item-divider sticky>\n          <ion-label>\n              Client edit entry :\n          </ion-label>\n      </ion-item-divider>\n      <ion-item>\n          <ion-label>\n              name :\n          </ion-label>\n          <ion-input [(ngModel)]="item.name" type="string"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>\n              age :\n          </ion-label>\n        <ion-input [(ngModel)]="item.age" type="number"></ion-input>\n    </ion-item>\n  </ion-item-group>\n  <button ion-button block (click)="close()"> Edit </button>\n  <button ion-button block color="danger" (click)="cancel()">Cancel</button>\n\n</ion-content>'/*ion-inline-end:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-edit/client-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* ClientProvider */]])
    ], ClientEditPage);
    return ClientEditPage;
}());

//# sourceMappingURL=client-edit.js.map

/***/ })

});
//# sourceMappingURL=13.js.map