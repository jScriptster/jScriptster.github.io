webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ways_overview_ways_overview_component__ = __webpack_require__("./src/app/ways-overview/ways-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__way_details_way_details_component__ = __webpack_require__("./src/app/way-details/way-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__way_details_edit_way_details_edit_component__ = __webpack_require__("./src/app/way-details-edit/way-details-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'meine-routen', component: __WEBPACK_IMPORTED_MODULE_3__ways_overview_ways_overview_component__["a" /* WaysOverviewComponent */] },
    { path: 'meine-routen/details/:id', component: __WEBPACK_IMPORTED_MODULE_4__way_details_way_details_component__["a" /* WayDetailsComponent */] },
    { path: 'meine-routen/details/:id/bearbeiten', component: __WEBPACK_IMPORTED_MODULE_5__way_details_edit_way_details_edit_component__["a" /* WayDetailsEditComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  width: 100%;\n  max-width: 550px;\n  margin: 0 auto;\n  padding: 0 10px;\n  border-left: 1px solid #1f2329;\n  border-right: 1px solid #1f2329;\n  min-height: 100vh; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_sta_da_service__ = __webpack_require__("./src/app/shared/service/sta-da.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(staDaService) {
        this.staDaService = staDaService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_sta_da_service__["a" /* StaDaService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_http_interceptors__ = __webpack_require__("./src/app/shared/http-interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_common_deutschebahn_request_service__ = __webpack_require__("./src/app/shared/service/common-deutschebahn-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_fa_sta_service__ = __webpack_require__("./src/app/shared/service/fa-sta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_sta_da_service__ = __webpack_require__("./src/app/shared/service/sta-da.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_auth_service__ = __webpack_require__("./src/app/shared/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_service_way_service__ = __webpack_require__("./src/app/shared/service/way.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_persistence_service__ = __webpack_require__("./src/app/shared/service/persistence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ways_overview_ways_overview_component__ = __webpack_require__("./src/app/ways-overview/ways-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__way_details_way_details_component__ = __webpack_require__("./src/app/way-details/way-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__way_details_edit_way_details_edit_component__ = __webpack_require__("./src/app/way-details-edit/way-details-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__station_search_station_search_component__ = __webpack_require__("./src/app/station-search/station-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__station_station_component__ = __webpack_require__("./src/app/station/station.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_pipes_station_preview_pipe__ = __webpack_require__("./src/app/shared/pipes/station-preview.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_pipes_facility_out_of_order_alarm_pipe__ = __webpack_require__("./src/app/shared/pipes/facility-out-of-order-alarm.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_pipes_favor_filter_pipe__ = __webpack_require__("./src/app/shared/pipes/favor-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ways_overview_ways_overview_component__["a" /* WaysOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__way_details_way_details_component__["a" /* WayDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__way_details_edit_way_details_edit_component__["a" /* WayDetailsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__station_search_station_search_component__["a" /* StationSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__station_station_component__["a" /* StationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_pipes_station_preview_pipe__["a" /* StationPreviewPipe */],
                __WEBPACK_IMPORTED_MODULE_20__shared_pipes_facility_out_of_order_alarm_pipe__["a" /* FacilityOutOfOrderAlarmPipe */],
                __WEBPACK_IMPORTED_MODULE_21__shared_pipes_favor_filter_pipe__["a" /* FavorFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_service_common_deutschebahn_request_service__["a" /* CommonDeutschebahnRequestService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_service_fa_sta_service__["a" /* FaStaService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_service_sta_da_service__["a" /* StaDaService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_4__shared_http_interceptors__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_10__shared_service_way_service__["a" /* WayService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_service_persistence_service__["a" /* PersistenceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a class=\"button button--large\" routerLink=\"/meine-routen\">Jetzt starten!</a>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/decorator/canIUseIndexedDbDecorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canIUseIndexedDbDecorator;
function canIUseIndexedDbDecorator() {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result;
            if (window.indexedDB) {
                result = originalMethod.apply(this, args);
            }
            return result;
        };
        return descriptor;
    };
}


/***/ }),

/***/ "./src/app/shared/http-interceptors/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/shared/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.auth.getAuthorizationToken();
        var authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/http-interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_interceptor__ = __webpack_require__("./src/app/shared/http-interceptors/auth-interceptor.ts");
/* "Barrel" of Http Interceptors */


var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__auth_interceptor__["a" /* AuthInterceptor */], multi: true }
];


/***/ }),

/***/ "./src/app/shared/model/facility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facility; });
var Facility = /** @class */ (function () {
    function Facility(id, type, description, state) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.state = state;
    }
    return Facility;
}());



/***/ }),

/***/ "./src/app/shared/model/station.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Station; });
var Station = /** @class */ (function () {
    function Station(id, name, federalState, hasSteplessAccess, hasWiFi, favorFacilities) {
        if (favorFacilities === void 0) { favorFacilities = []; }
        this.id = id;
        this.name = name;
        this.federalState = federalState;
        this.hasSteplessAccess = hasSteplessAccess;
        this.hasWiFi = hasWiFi;
        this.favorFacilities = favorFacilities;
    }
    return Station;
}());



/***/ }),

/***/ "./src/app/shared/model/way.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Way; });
var Way = /** @class */ (function () {
    function Way(id, title, stations) {
        if (title === void 0) { title = ''; }
        if (stations === void 0) { stations = []; }
        this.id = id;
        this.title = title;
        this.stations = stations;
    }
    return Way;
}());



/***/ }),

/***/ "./src/app/shared/pipes/facility-out-of-order-alarm.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityOutOfOrderAlarmPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FacilityOutOfOrderAlarmPipe = /** @class */ (function () {
    function FacilityOutOfOrderAlarmPipe() {
    }
    FacilityOutOfOrderAlarmPipe.prototype.transform = function (value, hasSteplessAccess, cssClassOk, cssClassAlarm) {
        var isAlarm = false;
        if (!value || value.length === 0) {
            isAlarm = hasSteplessAccess !== 'yes';
        }
        else {
            var result = value.filter(function (facility) {
                return facility.state !== 'ACTIVE';
            });
            isAlarm = result.length > 0;
        }
        return isAlarm ? cssClassAlarm : cssClassOk;
    };
    FacilityOutOfOrderAlarmPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'facilityOutOfOrderAlarm'
        })
    ], FacilityOutOfOrderAlarmPipe);
    return FacilityOutOfOrderAlarmPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/favor-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FavorFilterPipe = /** @class */ (function () {
    function FavorFilterPipe() {
    }
    FavorFilterPipe.prototype.transform = function (value, favor) {
        var result;
        if (favor && favor.length > 0) {
            result = value.filter(function (element) {
                return favor.indexOf(element.id) > -1;
            });
        }
        else {
            result = value.filter(function (element) {
                return element.state !== 'ACTIVE';
            });
        }
        return result;
    };
    FavorFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'favorFilter',
            pure: false
        })
    ], FavorFilterPipe);
    return FavorFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/station-preview.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationPreviewPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StationPreviewPipe = /** @class */ (function () {
    function StationPreviewPipe() {
    }
    StationPreviewPipe.prototype.transform = function (value, maxShowCount) {
        if (maxShowCount === void 0) { maxShowCount = 3; }
        if (value.length === 0) {
            return 'Enthält keine Stationen.';
        }
        var returnStr = '';
        var showCount = Math.min(maxShowCount, value.length);
        for (var i = 0, len = showCount; i < len; i++) {
            returnStr += value[i].name;
            if (i < len - 1) {
                returnStr += ', ';
            }
        }
        var rest = value.length - showCount;
        if (rest > 0) {
            returnStr += "... (+" + rest + " weitere)";
        }
        return returnStr;
    };
    StationPreviewPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'stationPreview'
        })
    ], StationPreviewPipe);
    return StationPreviewPipe;
}());



/***/ }),

/***/ "./src/app/shared/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getAuthorizationToken = function () {
        return 'Bearer ce5b7e69afc24ea2ff90c5e6aeb4945c';
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/service/common-deutschebahn-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonDeutschebahnRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonDeutschebahnRequestService = /** @class */ (function () {
    function CommonDeutschebahnRequestService(http) {
        this.http = http;
        this.DOMAIN = 'https://api.deutschebahn.com';
    }
    CommonDeutschebahnRequestService.prototype.get = function (resource, params) {
        var httpParamsFromObject = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({
            fromObject: params
        });
        return this.fetch('GET', resource, httpParamsFromObject);
    };
    CommonDeutschebahnRequestService.prototype.fetch = function (method, ressource, params) {
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */](method, this.DOMAIN + "/" + ressource, {
            params: params
        });
        return this.http.request(req);
    };
    CommonDeutschebahnRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CommonDeutschebahnRequestService);
    return CommonDeutschebahnRequestService;
}());



/***/ }),

/***/ "./src/app/shared/service/fa-sta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaStaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_deutschebahn_request_service__ = __webpack_require__("./src/app/shared/service/common-deutschebahn-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_facility__ = __webpack_require__("./src/app/shared/model/facility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaStaService = /** @class */ (function () {
    function FaStaService(requestService) {
        this.requestService = requestService;
        this.RESSOUCE = 'fasta/v2/stations';
        this.cache = {};
        this.subjectMap = {};
    }
    FaStaService.prototype.fetch = function (stationId, forceServerRequest) {
        var _this = this;
        if (forceServerRequest === void 0) { forceServerRequest = false; }
        var subject = this.subjectMap[stationId] = this.subjectMap[stationId] || new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        var facilities;
        if (forceServerRequest !== true && this.cache[stationId]) {
            facilities = this.cache[stationId];
            subject.next(facilities);
            return;
        }
        this.requestService.get(this.RESSOUCE + "/" + stationId, {}).subscribe(function (result) {
            if (result['body'] && result['body'].facilities) {
                facilities = _this.castFacilities(result['body'].facilities);
                _this.cache[stationId] = facilities;
                subject.next(facilities);
            }
        });
    };
    FaStaService.prototype.getFacilitiesByStation = function (stationId) {
        var subject = this.subjectMap[stationId] = this.subjectMap[stationId] || new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        return subject.asObservable();
    };
    FaStaService.prototype.castFacilities = function (data) {
        var facilities = [];
        data.forEach(function (element) {
            facilities.push(new __WEBPACK_IMPORTED_MODULE_2__model_facility__["a" /* Facility */](element.equipmentnumber, element.type, element.description, element.state));
        });
        return facilities;
    };
    FaStaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_deutschebahn_request_service__["a" /* CommonDeutschebahnRequestService */]])
    ], FaStaService);
    return FaStaService;
}());



/***/ }),

/***/ "./src/app/shared/service/persistence.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorator_canIUseIndexedDbDecorator__ = __webpack_require__("./src/app/shared/decorator/canIUseIndexedDbDecorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersistenceService = /** @class */ (function () {
    function PersistenceService() {
        this.PRESETS = [
            {
                IDENTIFIER: 'ways',
                DB_NAME: 'stt_ways',
                DB_VERSION: 1,
                DB_STORE_NAME: 'ways'
            }
        ];
        this.databases = {};
        this.fetchAllSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    PersistenceService.prototype.fetchAll = function (presetIdentifier) {
        if (presetIdentifier === void 0) { presetIdentifier = 'ways'; }
        var preset = this.getDbPreset(presetIdentifier);
        this.init(preset, this.getAll, [preset]);
        return this.fetchAllSubject.asObservable();
    };
    PersistenceService.prototype.save = function (obj, presetIdentifier) {
        if (presetIdentifier === void 0) { presetIdentifier = 'ways'; }
        console.log('save', obj);
        var preset = this.getDbPreset(presetIdentifier);
        this.init(preset, this.addOrUpdate, [preset, obj]);
    };
    PersistenceService.prototype.kill = function (obj, presetIdentifier) {
        if (presetIdentifier === void 0) { presetIdentifier = 'ways'; }
        console.log('kill', obj);
        var preset = this.getDbPreset(presetIdentifier);
        this.init(preset, this.delete, [preset, obj.id]);
    };
    PersistenceService.prototype.init = function (preset, successCallback, successParams) {
        var _this = this;
        if (this.databases[preset.IDENTIFIER]) {
            successCallback.apply(this, successParams);
            return;
        }
        var request = indexedDB.open(preset.DB_NAME, preset.DB_VERSION);
        request.onerror = function (event) {
            console.error(event);
        };
        request.onsuccess = function (event) {
            _this.databases[preset.IDENTIFIER] = request.result;
            successCallback.apply(_this, successParams);
        };
        request.onupgradeneeded = function (event) {
            var db = event.target['result'];
            var objectStore = db.createObjectStore(preset.DB_STORE_NAME, { keyPath: "id" });
            //objectStore.createIndex("name", "name", { unique: false });
        };
    };
    PersistenceService.prototype.getDbPreset = function (presetIdentifier) {
        var result = this.PRESETS.filter(function (element) {
            return element.IDENTIFIER === presetIdentifier;
        });
        return result[0];
    };
    PersistenceService.prototype.getObjectStore = function (preset, mode) {
        if (mode === void 0) { mode = 'readwrite'; }
        var tx = this.databases[preset.IDENTIFIER].transaction(preset.DB_STORE_NAME, mode);
        return tx.objectStore(preset.DB_STORE_NAME);
    };
    PersistenceService.prototype.addOrUpdate = function (preset, data) {
        var objectStore = this.getObjectStore(preset);
        var readRequest = objectStore.get(data.id);
        readRequest.onsuccess = function () {
            var result = readRequest.result;
            var writeRequest;
            if (result) {
                writeRequest = objectStore.put(data);
            }
            else {
                writeRequest = objectStore.add(data);
            }
            writeRequest.onsuccess = function () {
                console.log('put or add');
            };
        };
        readRequest.onerror = function () {
            console.log('err');
        };
    };
    PersistenceService.prototype.getAll = function (preset) {
        var _this = this;
        var objectStore = this.getObjectStore(preset);
        var result = {
            identifier: preset.IDENTIFIER,
            records: []
        };
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                result.records.push(cursor.value);
                cursor.continue();
            }
            else {
                _this.fetchAllSubject.next(result);
            }
        };
    };
    PersistenceService.prototype.delete = function (preset, id) {
        var objectStore = this.getObjectStore(preset);
        var request = objectStore.delete(id);
        request.onsuccess = function (event) {
            console.log('delete');
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__decorator_canIUseIndexedDbDecorator__["a" /* canIUseIndexedDbDecorator */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"])
    ], PersistenceService.prototype, "fetchAll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__decorator_canIUseIndexedDbDecorator__["a" /* canIUseIndexedDbDecorator */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PersistenceService.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__decorator_canIUseIndexedDbDecorator__["a" /* canIUseIndexedDbDecorator */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PersistenceService.prototype, "kill", null);
    PersistenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PersistenceService);
    return PersistenceService;
}());



/***/ }),

/***/ "./src/app/shared/service/sta-da.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaDaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_deutschebahn_request_service__ = __webpack_require__("./src/app/shared/service/common-deutschebahn-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_station__ = __webpack_require__("./src/app/shared/model/station.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaDaService = /** @class */ (function () {
    function StaDaService(requestService) {
        this.requestService = requestService;
        this.RESSOUCE = 'stada/v2/stations';
        this.stationSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    StaDaService.prototype.find = function (query) {
        var _this = this;
        this.requestService.get(this.RESSOUCE, {
            searchstring: query + "*",
            limit: 5
        }).subscribe(function (result) {
            var stationList = _this.castResult(result['body']);
            _this.stationSubject.next(stationList);
        });
    };
    StaDaService.prototype.getSearchResults = function () {
        return this.stationSubject.asObservable();
    };
    StaDaService.prototype.castResult = function (result) {
        var stationList = [];
        if (result && result.result) {
            result.result.forEach(function (element) {
                stationList.push(new __WEBPACK_IMPORTED_MODULE_2__model_station__["a" /* Station */](element.number, element.name, element.federalState, element.hasSteplessAccess, element.hasWiFi));
            });
        }
        return stationList;
    };
    StaDaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_deutschebahn_request_service__["a" /* CommonDeutschebahnRequestService */]])
    ], StaDaService);
    return StaDaService;
}());



/***/ }),

/***/ "./src/app/shared/service/way.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_way__ = __webpack_require__("./src/app/shared/model/way.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__persistence_service__ = __webpack_require__("./src/app/shared/service/persistence.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WayService = /** @class */ (function () {
    function WayService(persistenceServcie) {
        var _this = this;
        this.persistenceServcie = persistenceServcie;
        this.ways = [];
        this.newWaySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.killWaySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.readySubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        var fetchAllObservable = this.persistenceServcie.fetchAll('ways');
        if (fetchAllObservable) {
            var subscription_1 = fetchAllObservable.subscribe(function (result) {
                subscription_1.unsubscribe();
                result['records'].forEach(function (record) {
                    var way = new __WEBPACK_IMPORTED_MODULE_3__model_way__["a" /* Way */](record.id, record.title, record.stations);
                    _this.ways.push(way);
                });
                _this.readySubject.next(true);
            });
        }
        else {
            this.readySubject.next(true);
        }
    }
    WayService.prototype.create = function () {
        var way = new __WEBPACK_IMPORTED_MODULE_3__model_way__["a" /* Way */](this.getNextId());
        this.ways.push(way);
        this.newWaySubject.next(way);
        this.save(way.id);
    };
    WayService.prototype.kill = function (wayId) {
        var way = this.getWayById(wayId);
        this.ways = this.ways.filter(function (element) {
            return element.id !== wayId;
        });
        this.killWaySubject.next(way);
        this.persistenceServcie.kill(way);
    };
    WayService.prototype.getWays = function () {
        return this.ways;
    };
    WayService.prototype.getNextId = function () {
        var newId = Math.floor(10000 * Math.random()) + 10000;
        var uniqueCheck = this.ways.filter(function (element) {
            return element.id === "" + newId;
        });
        if (uniqueCheck.length > 0) {
            return this.getNextId();
        }
        return "" + newId;
    };
    WayService.prototype.getReady = function () {
        return this.readySubject.asObservable();
    };
    WayService.prototype.getNewWayMessage = function () {
        return this.newWaySubject.asObservable();
    };
    WayService.prototype.getKillWayMessage = function () {
        return this.killWaySubject.asObservable();
    };
    WayService.prototype.getWayById = function (id) {
        return this.ways.find(function (el) {
            return el.id === id;
        });
    };
    WayService.prototype.addStation = function (wayId, station) {
        var way = this.getWayById(wayId);
        way.stations.push(station);
        this.save(wayId);
    };
    WayService.prototype.removeStation = function (wayId, station) {
        var way = this.getWayById(wayId);
        way.stations = way.stations.filter(function (element) {
            return element.id !== station.id;
        });
        this.save(wayId);
    };
    WayService.prototype.save = function (wayId) {
        var way = this.getWayById(wayId);
        this.persistenceServcie.save(way);
    };
    WayService.prototype.toggleFacilityFavor = function (wayId, stationId, facilityId) {
        var way = this.getWayById(wayId);
        var station = way.stations.find(function (element) {
            return element.id === stationId;
        });
        var favorFacilityIndex = station.favorFacilities.indexOf(facilityId);
        if (favorFacilityIndex > -1) {
            station.favorFacilities.splice(favorFacilityIndex, 1);
        }
        else {
            station.favorFacilities.push(facilityId);
        }
        this.save(wayId);
    };
    WayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__persistence_service__["a" /* PersistenceService */]])
    ], WayService);
    return WayService;
}());



/***/ }),

/***/ "./src/app/station-search/station-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-popover\">\n  <input type=\"search\" (input)=\"onInput($event.target.value)\" placeholder=\"Bahnhof\" />\n\n  <ul class=\"stations\">\n    <li class=\"station\" *ngFor=\"let station of stationsSuggest\" (click)='onStationSelected(station)'>\n      {{station.name}}\n    </li>\n  </ul>\n\n  <button (click)=\"onCancelClick()\" class=\"button button--large\">Abbrechen</button>\n</div>"

/***/ }),

/***/ "./src/app/station-search/station-search.component.scss":
/***/ (function(module, exports) {

module.exports = ".search-popover {\n  position: fixed;\n  top: 30px;\n  left: 50%;\n  margin-left: -150px;\n  width: 300px;\n  background-color: #2f343d;\n  border: 4px solid #1f2329;\n  padding: 10px;\n  -webkit-box-shadow: 0px 0px 20px 1px #000;\n          box-shadow: 0px 0px 20px 1px #000; }\n\n.stations {\n  list-style-type: none;\n  padding: 0; }\n\n.station {\n  display: block;\n  padding: 5px 0;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #1f2329; }\n"

/***/ }),

/***/ "./src/app/station-search/station-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_sta_da_service__ = __webpack_require__("./src/app/shared/service/sta-da.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StationSearchComponent = /** @class */ (function () {
    function StationSearchComponent(staDaService) {
        this.staDaService = staDaService;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canceled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.searchUpdated = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    StationSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionSearchField = this.searchUpdated.asObservable()
            .debounceTime(700)
            .distinctUntilChanged()
            .subscribe(function (value) {
            _this.staDaService.find(value);
        });
        this.subscriptionStaDaService = this.staDaService.getSearchResults().subscribe(function (value) {
            _this.stationsSuggest = value;
        });
    };
    StationSearchComponent.prototype.ngOnDestroy = function () {
        this.subscriptionSearchField.unsubscribe();
        this.subscriptionStaDaService.unsubscribe();
    };
    StationSearchComponent.prototype.onCancelClick = function () {
        this.canceled.emit();
    };
    StationSearchComponent.prototype.onInput = function (query) {
        this.searchUpdated.next(query);
    };
    StationSearchComponent.prototype.onStationSelected = function (selectedStation) {
        this.selected.emit(selectedStation);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StationSearchComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StationSearchComponent.prototype, "canceled", void 0);
    StationSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-station-search',
            template: __webpack_require__("./src/app/station-search/station-search.component.html"),
            styles: [__webpack_require__("./src/app/station-search/station-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_service_sta_da_service__["a" /* StaDaService */]])
    ], StationSearchComponent);
    return StationSearchComponent;
}());



/***/ }),

/***/ "./src/app/station/station.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"edit\" class=\"station-edit\">\n  <span class=\"federal-state\">{{station.federalState}}</span>\n  <strong class=\"station-name\">{{station.name}}</strong>\n  <button (click)=\"onRemoveClicked()\" class=\"refresh-button\">Entfernen</button>\n</div>\n\n\n<div *ngIf=\"!edit\" class=\"container\">\n  \n  <div class=\"header\" [ngClass]=\"facilities | facilityOutOfOrderAlarm:station.hasSteplessAccess:'header--ok':'header--alarm'\">    \n    <span class=\"federal-state\">{{station.federalState}}</span>\n    <strong class=\"station-name\">{{station.name}}</strong>\n    <button class=\"refresh-button\" (click)=\"onRefreshClicked()\">Refresh</button>\n  </div>\n\n  \n  <div class=\"favor-container\">\n  \n      <div *ngIf=\"facilities.length === 0\">\n        Keine Fahrstühle bekannt.\n        <span *ngIf=\"station.hasSteplessAccess==='yes'\">Der Bahnhof ist ohne Treppen erreichbar.</span>\n        <span *ngIf=\"station.hasSteplessAccess!=='yes'\">Der Bahnhof ist nicht ohne Treppen erreichbar.</span>\n      </div>\n      \n      <div *ngIf=\"facilities.length > 0\">\n          <div *ngFor=\"let facility of facilities | favorFilter:station.favorFacilities\"  class=\"details-item\" [ngClass]=\"facility.state==='ACTIVE'?'details-item--ok':'details-item--fck'\">\n              <span *ngIf=\"facility.type==='ESCALATOR'\">Rolltreppe</span>\n              <span *ngIf=\"facility.type==='ELEVATOR'\">Fahrstuhl</span>\n              {{facility.description}}\n            </div>          \n      </div>\n\n      <button (click)=\"onToggleDetailsVisible()\" *ngIf=\"facilities.length>0\">Details</button>\n  </div>\n  \n\n  <div class=\"details-container\" *ngIf=\"detailsVisible\">\n    <div *ngFor=\"let facility of facilities\" class=\"details-item\" [ngClass]=\"facility.state==='ACTIVE'?'details-item--ok':'details-item--fck'\">\n      <span *ngIf=\"facility.type==='ESCALATOR'\">Rolltreppe</span>\n      <span *ngIf=\"facility.type==='ELEVATOR'\">Fahrstuhl</span>\n      {{facility.description}}\n      <button \n        class=\"favor-button\" \n        [ngClass]=\"station.favorFacilities.indexOf(facility.id) > -1 ? 'favor-button--selected' : ''\"\n        (click)=\"onFavorFacilityClicked(facility.id)\">&#9733;</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/station/station.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-bottom: 30px; }\n\n.header {\n  padding: 0 0 0 40px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.header:after {\n    content: '';\n    height: 25px;\n    width: 25px;\n    top: 8px;\n    left: 5px;\n    background-color: #1f2329;\n    border-radius: 50%;\n    display: block;\n    position: absolute;\n    border: 3px solid #414852; }\n\n.header--ok:after {\n  background-color: #7ca52b; }\n\n.header--alarm:after {\n  background-color: #d52d24; }\n\n.federal-state {\n  text-transform: uppercase;\n  font-size: 11px;\n  display: block; }\n\n.station-name {\n  display: block;\n  font-size: 20px;\n  border-bottom: 1px solid #fff; }\n\n.refresh-button {\n  background-color: transparent;\n  color: #fff;\n  border: 1px solid #fff;\n  padding: 2px;\n  font-size: 11px;\n  position: absolute;\n  bottom: 5px;\n  right: 0; }\n\n.details-container {\n  padding: 0 0 0 40px; }\n\n.favor-container {\n  padding: 0 0 0 40px; }\n\n.favor-button {\n  background-color: transparent;\n  font-size: 20px;\n  border: none;\n  padding: 0;\n  color: #fff; }\n\n.favor-button--selected {\n  color: #f6c502; }\n\n.details-item {\n  padding-left: 20px;\n  position: relative;\n  margin-bottom: 5px; }\n\n.details-item:after {\n    content: '';\n    height: 12px;\n    width: 12px;\n    top: 10px;\n    left: 1px;\n    background-color: #1f2329;\n    border-radius: 50%;\n    display: block;\n    position: absolute;\n    border: 2px solid #414852; }\n\n.details-item--ok:after {\n  background-color: #7ca52b; }\n\n.details-item--fck:after {\n  background-color: #d52d24; }\n\n.station-edit {\n  margin-bottom: 10px;\n  padding: 3px 0;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/station/station.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_station__ = __webpack_require__("./src/app/shared/model/station.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_fa_sta_service__ = __webpack_require__("./src/app/shared/service/fa-sta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StationComponent = /** @class */ (function () {
    function StationComponent(faStaService) {
        this.faStaService = faStaService;
        this.edit = false;
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.favor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detailsVisible = false;
    }
    StationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var facilitiesObservable = this.faStaService.getFacilitiesByStation(this.station.id);
        this.subscription = facilitiesObservable.subscribe(function (facilities) {
            _this.facilities = facilities;
        });
        if (!this.edit) {
            this.faStaService.fetch(this.station.id);
        }
    };
    StationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StationComponent.prototype.onRemoveClicked = function () {
        this.remove.emit(this.station);
    };
    StationComponent.prototype.onRefreshClicked = function () {
        this.faStaService.fetch(this.station.id, true);
    };
    StationComponent.prototype.onFavorFacilityClicked = function (id) {
        this.favor.emit({
            stationId: this.station.id,
            facilityId: id
        });
    };
    StationComponent.prototype.onToggleDetailsVisible = function () {
        this.detailsVisible = !this.detailsVisible;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_station__["a" /* Station */])
    ], StationComponent.prototype, "station", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], StationComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StationComponent.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StationComponent.prototype, "favor", void 0);
    StationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-station',
            template: __webpack_require__("./src/app/station/station.component.html"),
            styles: [__webpack_require__("./src/app/station/station.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_fa_sta_service__["a" /* FaStaService */]])
    ], StationComponent);
    return StationComponent;
}());



/***/ }),

/***/ "./src/app/way-details-edit/way-details-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"way\">\n  \n  <input [(ngModel)]=\"way.title\" (change)=\"onTitleChanged()\" placeholder=\"Titel\">\n\n  <div class=\"stations\">\n    <stt-station \n      *ngFor=\"let station of way.stations\" \n      [station]=\"station\" \n      [edit]=\"true\"\n      (remove)=\"onRemoveStationClicked($event)\"></stt-station>\n  </div>\n\n\n  <button (click)=\"onAddStationClicked()\" class=\"button button--large\">Station hinzufügen</button>\n  <a [routerLink]=\"['/meine-routen', 'details', way.id]\" class=\"button button--large\">Fertig</a>\n  <button (click)=\"onKillWayClicked()\" class=\"button\">Route \"{{way.title}}\" löschen</button>\n\n  <stt-station-search \n    *ngIf=\"isStationSerach\" \n    (canceled)=\"onAddStationCanceled()\"\n    (selected)=\"onStationSelected($event)\"></stt-station-search>\n</div>  \n"

/***/ }),

/***/ "./src/app/way-details-edit/way-details-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ".stations {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/way-details-edit/way-details-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayDetailsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_way_service__ = __webpack_require__("./src/app/shared/service/way.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WayDetailsEditComponent = /** @class */ (function () {
    function WayDetailsEditComponent(route, router, wayService) {
        this.route = route;
        this.router = router;
        this.wayService = wayService;
        this.isStationSerach = false;
    }
    WayDetailsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readySubscription = this.wayService.getReady().subscribe(function (isReady) {
            if (isReady) {
                _this.init();
            }
        });
    };
    WayDetailsEditComponent.prototype.init = function () {
        var _this = this;
        var wayId = this.route.snapshot.params['id'];
        this.way = this.wayService.getWayById(wayId);
        this.subscription = this.wayService.getKillWayMessage().subscribe(function (killedWay) {
            if (killedWay.id === wayId) {
                _this.router.navigate(['meine-routen']);
            }
        });
    };
    WayDetailsEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.readySubscription.unsubscribe();
    };
    WayDetailsEditComponent.prototype.onAddStationClicked = function () {
        this.isStationSerach = true;
    };
    WayDetailsEditComponent.prototype.onAddStationCanceled = function () {
        this.isStationSerach = false;
    };
    WayDetailsEditComponent.prototype.onStationSelected = function (selectedStation) {
        this.wayService.addStation(this.way.id, selectedStation);
        this.isStationSerach = false;
    };
    WayDetailsEditComponent.prototype.onRemoveStationClicked = function (removedStation) {
        this.wayService.removeStation(this.way.id, removedStation);
    };
    WayDetailsEditComponent.prototype.onTitleChanged = function () {
        this.wayService.save(this.way.id);
    };
    WayDetailsEditComponent.prototype.onKillWayClicked = function () {
        this.wayService.kill(this.way.id);
    };
    WayDetailsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-way-details-edit',
            template: __webpack_require__("./src/app/way-details-edit/way-details-edit.component.html"),
            styles: [__webpack_require__("./src/app/way-details-edit/way-details-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_way_service__["a" /* WayService */]])
    ], WayDetailsEditComponent);
    return WayDetailsEditComponent;
}());



/***/ }),

/***/ "./src/app/way-details/way-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"way\">\n  <h1 class=\"main-headline\">{{way.title}}</h1>\n\n  <stt-station \n    *ngFor=\"let station of way.stations\"\n    (favor)=\"onFavorClicked($event)\"\n    [station]=\"station\" \n    [edit]=\"false\"\n    ></stt-station>\n\n  <a class=\"button button--large\" [routerLink]=\"['/meine-routen', 'details', way.id, 'bearbeiten']\">Bearbeiten</a>\n  <a class=\"button button--large\" [routerLink]=\"['/meine-routen']\">Zur Übersicht</a>\n</div>"

/***/ }),

/***/ "./src/app/way-details/way-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/way-details/way-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_way_service__ = __webpack_require__("./src/app/shared/service/way.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WayDetailsComponent = /** @class */ (function () {
    function WayDetailsComponent(route, wayService) {
        this.route = route;
        this.wayService = wayService;
    }
    WayDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readySubscription = this.wayService.getReady().subscribe(function (isReady) {
            if (isReady) {
                _this.init();
            }
        });
    };
    WayDetailsComponent.prototype.ngOnDestroy = function () {
        this.readySubscription.unsubscribe();
    };
    WayDetailsComponent.prototype.init = function () {
        var wayId = this.route.snapshot.params['id'];
        this.way = this.wayService.getWayById(wayId);
    };
    WayDetailsComponent.prototype.onFavorClicked = function (data) {
        this.wayService.toggleFacilityFavor(this.way.id, data.stationId, data.facilityId);
    };
    WayDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-way-details',
            template: __webpack_require__("./src/app/way-details/way-details.component.html"),
            styles: [__webpack_require__("./src/app/way-details/way-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_way_service__["a" /* WayService */]])
    ], WayDetailsComponent);
    return WayDetailsComponent;
}());



/***/ }),

/***/ "./src/app/ways-overview/ways-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1 class=\"main-headline\">Meine Routen</h1>\n\n  <ul class=\"ways\">\n    <li *ngFor=\"let way of ways\" class=\"way\">\n      <a [routerLink]=\"['details', way.id]\">\n\n        <h5 class=\"way__title\">{{way.title || 'unbenannt'}}</h5>\n        <span class=\"way__description\">{{way.stations | stationPreview:2}}</span>\n\n      </a>\n    </li>\n  </ul>\n\n  <button class=\"button button--large\" (click)=\"onClickNewButton($event)\">Neue Route</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/ways-overview/ways-overview.component.scss":
/***/ (function(module, exports) {

module.exports = ".ways {\n  list-style-type: none;\n  padding: 0; }\n\n.way {\n  display: block;\n  background-color: #414852;\n  margin-bottom: 10px;\n  padding: 10px; }\n\na {\n  display: block;\n  text-decoration: none; }\n\n.way__title {\n  color: #fff;\n  font-size: 20px;\n  margin: 0 0 5px 0;\n  text-decoration: none; }\n\n.way__description {\n  color: #fff;\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/ways-overview/ways-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaysOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_way_service__ = __webpack_require__("./src/app/shared/service/way.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WaysOverviewComponent = /** @class */ (function () {
    function WaysOverviewComponent(wayService, router, route) {
        this.wayService = wayService;
        this.router = router;
        this.route = route;
    }
    WaysOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readySubscription = this.wayService.getReady().subscribe(function (isReady) {
            if (isReady) {
                _this.init();
            }
        });
    };
    WaysOverviewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.readySubscription.unsubscribe();
    };
    WaysOverviewComponent.prototype.init = function () {
        var _this = this;
        this.ways = this.wayService.getWays();
        this.subscription = this.wayService.getNewWayMessage().subscribe(function (way) {
            _this.router.navigate(['details', way.id, 'bearbeiten'], { relativeTo: _this.route });
        });
    };
    WaysOverviewComponent.prototype.onClickNewButton = function (e) {
        this.wayService.create();
    };
    WaysOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stt-ways-overview',
            template: __webpack_require__("./src/app/ways-overview/ways-overview.component.html"),
            styles: [__webpack_require__("./src/app/ways-overview/ways-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_way_service__["a" /* WayService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WaysOverviewComponent);
    return WaysOverviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map