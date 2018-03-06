webpackJsonp([17],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListPageModule", function() { return ArticleListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_list__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArticleListPageModule = (function () {
    function ArticleListPageModule() {
    }
    ArticleListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__article_list__["a" /* ArticleListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__article_list__["a" /* ArticleListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ArticleListPageModule);
    return ArticleListPageModule;
}());

//# sourceMappingURL=article-list.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListPage; });
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
 * Generated class for the ArticleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticleListPage = (function () {
    function ArticleListPage(navCtrl, articleProvider, modalCtrl) {
        //this.currentArticles = this.articleProvider.query();
        this.navCtrl = navCtrl;
        this.articleProvider = articleProvider;
        this.modalCtrl = modalCtrl;
        this.articleIcon = "assets/img/article/article.gif";
    }
    ArticleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticleListPage');
        this.getAllArticle();
    };
    ArticleListPage.prototype.getAllArticle = function () {
        var _this = this;
        this.articleProvider.query().subscribe(function (data) {
            _this.currentArticles = data;
            // this.currentArticles = Array.of(this.currentArticles); 
        }, function (err) { return console.error(err); }, function () { return console.log('getArticles completed'); });
    };
    ArticleListPage.prototype.addArticle = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ArticleCreatePage');
        addModal.onDidDismiss(function (article) {
            console.log('hello boy ...');
            if (article) {
                console.log("hello toto ..." + article);
                _this.articleProvider.add(article).subscribe(function (data) {
                    console.log('Your article had been save ...');
                }, function (err) { return console.error(err); }, function () { return console.log('getArticles completed'); });
            }
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    ArticleListPage.prototype.updateArticle = function (article) {
        var _this = this;
        var addModal = this.modalCtrl.create('ArticleEditPage', {
            articleModal: article
        });
        addModal.onDidDismiss(function (article) {
            console.log('hello boy ...');
            if (article) {
                _this.articleProvider.update(article).subscribe(function (data) {
                    console.log('Your article had been updated ...');
                }, function (err) { return console.error(err); }, function () { return console.log('getArticles completed'); });
            }
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    /**
     * Delete an article from the list of articleProvider.
     */
    ArticleListPage.prototype.deleteArticle = function (article) {
        this.articleProvider.delete(article.id).subscribe(function (res) {
            // If the API returned a successful response,
            console.log('Your article had been deleted ...');
        }, function (err) {
            console.error('ERROR', err);
        });
        this.ionViewDidLoad();
    };
    /**
     * Navigate to the detail page for this article.
     */
    ArticleListPage.prototype.openArticle = function (article) {
        this.navCtrl.push('ArticleDetailPage', {
            article: article, articleIcon: this.articleIcon
        });
    };
    ArticleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article-list',template:/*ion-inline-start:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/article-list/article-list.html"*/'<!--\n  Generated template for the ArticleListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{ \'LIST_ARTICLE_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addArticle()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentArticles">\n      <button ion-item (click)="openArticle(item)">\n        <ion-avatar item-start>\n            <img [src]="articleIcon" />\n        </ion-avatar>\n        <h2>{{item.intitule}}</h2>\n        <p>{{item.nombre}}</p>\n        <ion-note item-end *ngIf="item.client">{{item.client.name}}</ion-note>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="info" (click)="updateArticle(item)">\n          {{ \'UPDATE_BUTTON\' | translate }}\n        </button>\n        <button ion-button color="danger" (click)="deleteArticle(item)">\n            {{ \'DELETE_BUTTON\' | translate }}\n          </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/article-list/article-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* ArticleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ArticleListPage);
    return ArticleListPage;
}());

//# sourceMappingURL=article-list.js.map

/***/ })

});
//# sourceMappingURL=17.js.map