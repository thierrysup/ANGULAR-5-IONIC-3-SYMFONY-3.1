webpackJsonp([14],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailPageModule", function() { return ClientDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_detail__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClientDetailPageModule = (function () {
    function ClientDetailPageModule() {
    }
    ClientDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__client_detail__["a" /* ClientDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__client_detail__["a" /* ClientDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ClientDetailPageModule);
    return ClientDetailPageModule;
}());

//# sourceMappingURL=client-detail.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailPage; });
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
var ClientDetailPage = (function () {
    function ClientDetailPage(navCtrl, navParams, clientProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientProvider = clientProvider;
        this.articleIcon = "assets/img/article/article.gif";
        this.item = navParams.get('client') || clientProvider.defaultClient;
        this.clientIcon = navParams.get('clientIcon');
    }
    ClientDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDetailPage');
    };
    ClientDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-detail',template:/*ion-inline-start:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-detail/client-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ item.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content>\n   <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + clientIcon + \')\'"> \n  </div>\n\n  <div class="item-detail" padding>\n    <h2>{{item.name}}</h2>\n    <p>{{item.age}}</p>\n  </div>\n</ion-content>\n -->\n\n<ion-content class="client-detail">\n  <ion-list>\n      <ion-card>\n          <ion-item *ngIf="item">\n              <ion-avatar item-start>\n                  <img [src]="clientIcon">\n              </ion-avatar>\n              <h2>{{item.name}}</h2>\n              <p>{{item.age}}</p>\n              <ion-note item-end >{{item.articles.length}}</ion-note> \n            </ion-item>\n      </ion-card>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding *ngFor="let article of item.articles">\n      <button ion-item >\n        <ion-avatar item-start>\n            <img [src]="articleIcon" />\n        </ion-avatar>\n        <h2>{{article.intitule}}</h2>\n        <p>{{article.nombre}}</p>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n  <!-- <ion-fab bottom right>\n      <button ion-fab (click)="addObjectif()"><ion-icon name="chatboxes" class="icon-white"></ion-icon></button>\n  </ion-fab> -->\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-detail/client-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* ClientProvider */]])
    ], ClientDetailPage);
    return ClientDetailPage;
}());

//# sourceMappingURL=client-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map