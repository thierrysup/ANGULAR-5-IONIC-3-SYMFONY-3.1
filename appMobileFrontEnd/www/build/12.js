webpackJsonp([12],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListPageModule", function() { return ClientListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_list__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClientListPageModule = (function () {
    function ClientListPageModule() {
    }
    ClientListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__client_list__["a" /* ClientListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__client_list__["a" /* ClientListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ClientListPageModule);
    return ClientListPageModule;
}());

//# sourceMappingURL=client-list.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListPage; });
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
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientListPage = (function () {
    function ClientListPage(navCtrl, clientProvider, modalCtrl) {
        //this.currentClients = this.clientProvider.query();
        this.navCtrl = navCtrl;
        this.clientProvider = clientProvider;
        this.modalCtrl = modalCtrl;
        this.clientIcon = "assets/img/client/client.png";
    }
    ClientListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientListPage');
        this.getAllClient();
    };
    ClientListPage.prototype.getAllClient = function () {
        var _this = this;
        this.clientProvider.query().subscribe(function (data) {
            _this.currentClients = data;
            // this.currentClients = Array.of(this.currentClients); 
        }, function (err) { return console.error(err); }, function () { return console.log('getClients completed'); });
    };
    ClientListPage.prototype.addClient = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ClientCreatePage');
        addModal.onDidDismiss(function (client) {
            console.log('hello boy ...');
            if (client) {
                _this.clientProvider.add(client).subscribe(function (data) {
                    console.log('Your client had been save ...');
                }, function (err) { return console.error(err); }, function () { return console.log('getClients completed'); });
            }
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    ClientListPage.prototype.updateClient = function (client) {
        var _this = this;
        var addModal = this.modalCtrl.create('ClientEditPage', {
            clientModal: client
        });
        addModal.onDidDismiss(function (client) {
            console.log('hello boy ...');
            if (client) {
                _this.clientProvider.update(client).subscribe(function (data) {
                    console.log('Your client had been updated ...');
                }, function (err) { return console.error(err); }, function () { return console.log('getClients completed'); });
            }
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    /**
     * Delete an client from the list of clientProvider.
     */
    ClientListPage.prototype.deleteClient = function (client) {
        this.clientProvider.delete(client.id).subscribe(function (res) {
            // If the API returned a successful response,
            console.log('Your client had been deleted ...');
        }, function (err) {
            console.error('ERROR', err);
        });
        this.ionViewDidLoad();
    };
    /**
     * Navigate to the detail page for this client.
     */
    ClientListPage.prototype.openClient = function (client) {
        this.navCtrl.push('ClientDetailPage', {
            client: client, clientIcon: this.clientIcon
        });
    };
    ClientListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-list',template:/*ion-inline-start:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-list/client-list.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{ \'LIST_CLIENT_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addClient()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentClients">\n      <button ion-item (click)="openClient(item)">\n        <ion-avatar item-start>\n            <img [src]="clientIcon" />\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p>{{item.age}}</p>\n        <!-- <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note> -->\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="info" (click)="updateClient(item)">\n          {{ \'UPDATE_BUTTON\' | translate }}\n        </button>\n        <button ion-button color="danger" (click)="deleteClient(item)">\n            {{ \'DELETE_BUTTON\' | translate }}\n          </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/tchinda/tutorial/githubpush/Full-starter/appMobileFrontEnd/src/pages/client-list/client-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* ClientProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ClientListPage);
    return ClientListPage;
}());

//# sourceMappingURL=client-list.js.map

/***/ })

});
//# sourceMappingURL=12.js.map