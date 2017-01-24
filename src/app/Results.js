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
 * Created by nikita_glukhi on 10/11/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ResultComponent = (function () {
    function ResultComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.res = +params['res'];
            _this.unres = +params['unres'];
            _this.n = params['n'];
            _this.sn = params['sn'];
        });
        console.log(this.res, this.unres, this.n, this.sn);
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'results',
            template: "<h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B</h2>\n    <h2>\u0418\u043C\u044F:</h2><h2>{{ n }}</h2>\n    <h2>\u0424\u0430\u043C\u0438\u043B\u0438\u044F:</h2><h2>{{ sn }}</h2>\n    <h2>\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"lime\">{{ res }}</font></h1>\n    <h2>\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"red\">{{ unres }}</font></h1>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=Results.js.map