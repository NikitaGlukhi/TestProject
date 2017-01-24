"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var Routes_1 = require("./Routes");
var HomeComponent_1 = require("./Components/HomeComponent");
var AboutComponent_1 = require("./Components/AboutComponent");
var ContactComponent_1 = require("./Components/ContactComponent");
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var Results_1 = require("./Results");
var Results1_1 = require("./Results1");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                Routes_1.routing,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [app_component_1.AppComponent, HomeComponent_1.HomeComponent, AboutComponent_1.AboutComponent, ContactComponent_1.ContactComponent, Results_1.ResultComponent, Results1_1.Results1Component],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map