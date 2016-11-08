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
/**
 * Created by nikita_glukhi on 10/25/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Results1Component = (function () {
    function Results1Component(route, router) {
        this.route = route;
        this.router = router;
    }
    Results1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.res1 = +params['res1'];
            _this.unres1 = +params['unres1'];
        });
        console.log(this.res1, this.unres1);
    };
    Results1Component = __decorate([
        core_1.Component({
            selector: 'results',
            template: "<h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B</h2>\n       <h2>\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"lime\">{{ res1 }}</font></h1>\n       <h2>\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"red\">{{ unres1 }}</font></h1>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], Results1Component);
    return Results1Component;
}());
exports.Results1Component = Results1Component;
//# sourceMappingURL=Results1.js.map