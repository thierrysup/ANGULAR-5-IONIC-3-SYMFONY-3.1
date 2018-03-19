webpackJsonp([20],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCreatePageModule", function() { return ArticleCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_create__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArticleCreatePageModule = (function () {
    function ArticleCreatePageModule() {
    }
    ArticleCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__article_create__["a" /* ArticleCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__article_create__["a" /* ArticleCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ArticleCreatePageModule);
    return ArticleCreatePageModule;
}());

//# sourceMappingURL=article-create.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCreatePage; });
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
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticleCreatePage = (function () {
    function ArticleCreatePage(navCtrl, viewCtrl, navParams, articleProvider, clientProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.clientProvider = clientProvider;
        this.client_id = 0;
        this.item = navParams.get('articleModal') || articleProvider.defaultArticle;
    }
    ArticleCreatePage.prototype.ionViewDidLoad = function () {
        this.assignClients();
    };
    ArticleCreatePage.prototype.assignClientToItem = function (id) {
        var _this = this;
        this.clientProvider.queryById(id).subscribe(function (data) {
            _this.client = data;
            _this.item.client = _this.client;
        }, function (err) { return console.error(err); }, function () { return console.log('getArticle completed'); });
    };
    ArticleCreatePage.prototype.assignClients = function () {
        var _this = this;
        this.clientProvider.query().subscribe(function (data) {
            _this.clients = data;
        }, function (err) { return console.error(err); }, function () { return console.log('getClients completed'); });
    };
    ArticleCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ArticleCreatePage.prototype.close = function () {
        //alert("id is "+this.client_id);
        this.assignClientToItem(this.client_id);
        this.viewCtrl.dismiss(this.item);
    };
    ArticleCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article-create',template:/*ion-inline-start:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/article-create/article-create.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-title>{{ \'ARTICLE_CREATE_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-group>\n\n      <ion-item-divider sticky>\n          <ion-label>\n              Article new entry :\n          </ion-label>\n      </ion-item-divider>\n      <ion-item>\n          <ion-label>\n              intitule :\n          </ion-label>\n          <ion-input [(ngModel)]="item.intitule" type="string"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>\n              nombre :\n          </ion-label>\n        <ion-input [(ngModel)]="item.nombre" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          client :\n        </ion-label>\n        <ion-select [(ngModel)]="client_id">\n          <ion-option *ngFor="let item of clients" value="{{item.id}}">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n  </ion-item-group>\n  <button ion-button block (click)="close()"> Create </button>\n  <button ion-button block color="danger" (click)="cancel()">Cancel</button>\n\n</ion-content>'/*ion-inline-end:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/article-create/article-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* ArticleProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* ClientProvider */]])
    ], ArticleCreatePage);
    return ArticleCreatePage;
}());

//# sourceMappingURL=article-create.js.map

/***/ })

});
//# sourceMappingURL=20.js.map