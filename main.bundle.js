webpackJsonp([0,3],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by nikita_glukhi on 10/4/16.
 */

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
        selector: 'contact',
        template: "<h1>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!</h1>\n             <h3><p>\u0414\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0412\u0430\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u0442\u0430\u043A\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445 \u043A\u0430\u043A \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430, \u0444\u0438\u0437\u0438\u043A\u0430, \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A, \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A.</p> \n             <p>P.s. \u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A \u0438 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A \u0431\u0443\u0434\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u043F\u043E\u0437\u0436\u0435. \u041F\u0440\u0438\u043D\u043E\u0448\u0443 \u0438\u0437\u0438\u043D\u0435\u043D\u0438\u044F \u0437\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 :)</p></h3>\n             <h2>\u041A\u0443\u0440\u0441\u044B: </h2>\n             <style> a { padding: 2px; text-decoration: none; }\n                     a :hover { color: #000cff; }\n             </style>\n            \n             <a routerLink=\"/mathematics\"><h2>\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430</h2></a> \n             <a routerLink=\"/physics\"><h2>\u0424\u0438\u0437\u0438\u043A\u0430</h2></a>\n"
    })
], ContactComponent);

//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/ContactComponent.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathQuestions__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MathAnswers__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PhysicsQuestiont__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhysicsComponent; });
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
 * Created by nikita_glukhi on 1/24/17.
 */








var MathComponent = (function () {
    function MathComponent(router) {
        this.router = router;
        this.res = 0;
        this.unres = 0;
        this.searchControl1 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl2 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl3 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl4 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl5 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl6 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl7 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl8 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl9 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl10 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.MathQues = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(__WEBPACK_IMPORTED_MODULE_2__MathQuestions__["a" /* Mathematics */]);
    }
    MathComponent.prototype.Func = function () {
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer1;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer2;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer3;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer4;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer5;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer6;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer7;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer8;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer9;
        __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer10;
        if (this.answer1 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer1) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer2 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer2) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer3 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer3) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer4 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer4) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer5 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer5) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer6 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer6) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer7 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer7) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer8 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer8) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer9 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer9) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer10 == __WEBPACK_IMPORTED_MODULE_5__MathAnswers__["a" /* MaAnswers */].Answer10) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        this.router.navigate(['/results', this.res, this.unres]);
        console.log();
        return false;
    };
    MathComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl1.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer1 = value;
        });
        this.searchControl2.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer2 = value;
        });
        this.searchControl3.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer3 = value;
        });
        this.searchControl4.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer4 = value;
        });
        this.searchControl5.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer5 = value;
        });
        this.searchControl6.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer6 = value;
        });
        this.searchControl7.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer7 = value;
        });
        this.searchControl8.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer8 = value;
        });
        this.searchControl9.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer9 = value;
        });
        this.searchControl10.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer10 = value;
        });
    };
    return MathComponent;
}());
MathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Component */])({
        selector: 'mathematics',
        template: "<form (ngSubmit)=\"Func(TaskForm)\" #TaskForm=\"ngForm\">\n  <h1>\u0417\u0430\u0434\u0430\u043D\u0438\u044F</h1>\n  <h4>\u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u041E\u0414\u0418\u041D \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430. \u0423\u0434\u0430\u0447\u0438!</h4>\n  \n  <div *ngFor = \"let element of MathQues | async\">\n      <h2>{{element.name}}</h2>\n      <p><b>{{element.text}}</b></p><Br>\n      <img src = \"{{element.image1}}\">\n      <img src = \"{{element.image2}}\">\n      <img src = \"{{element.image3}}\">\n      <img src = \"{{element.image4}}\">\n      <img src = \"{{element.image5}}\">\n      <img src = \"{{element.image6}}\">\n      <div *ngFor = \"let answer of element.answers\">\n      <p>{{answer.letter1}} <input *ngIf = \"answer.letter1\" type=\"radio\" name=\"answer{{element.number1}}\" [formControl] = \"searchControl1\" value=\"{{answer.value1}}\">{{answer.print1}}</p>\n      <p>{{answer.letter2}} <input *ngIf = \"answer.letter2\" type=\"radio\" name=\"answer{{element.number2}}\" [formControl] = \"searchControl2\" value=\"{{answer.value2}}\">{{answer.print2}}</p>\n      <p>{{answer.letter3}} <input *ngIf = \"answer.letter3\" type=\"radio\" name=\"answer{{element.number3}}\" [formControl] = \"searchControl3\" value=\"{{answer.value3}}\">{{answer.print3}}</p>\n      <p>{{answer.letter4}} <input *ngIf = \"answer.letter4\" type=\"radio\" name=\"answer{{element.number4}}\" [formControl] = \"searchControl4\" value=\"{{answer.value4}}\">{{answer.print4}}</p>\n      <p>{{answer.letter5}} <input *ngIf = \"answer.letter5\" type=\"radio\" name=\"answer{{element.number5}}\" [formControl] = \"searchControl5\" value=\"{{answer.value5}}\">{{answer.print5}}</p>\n      <p>{{answer.letter6}} <input *ngIf = \"answer.letter6\" type=\"radio\" name=\"answer{{element.number6}}\" [formControl] = \"searchControl6\" value=\"{{answer.value6}}\">{{answer.print6}}</p>\n      <p>{{answer.letter7}} <input *ngIf = \"answer.letter7\" type=\"radio\" name=\"answer{{element.number7}}\" [formControl] = \"searchControl7\" value=\"{{answer.value7}}\">{{answer.print7}}</p>\n      <p>{{answer.letter8}} <input *ngIf = \"answer.letter8\" type=\"radio\" name=\"answer{{element.number8}}\" [formControl] = \"searchControl8\" value=\"{{answer.value8}}\">{{answer.print8}}</p>\n      <p>{{answer.letter9}} <input *ngIf = \"answer.letter9\" type=\"radio\" name=\"answer{{element.number9}}\" [formControl] = \"searchControl9\" value=\"{{answer.value9}}\">{{answer.print9}}</p>\n      <p>{{answer.letter10}} <input *ngIf = \"answer.letter10\" type=\"radio\" name=\"answer{{element.number10}}\" [formControl] = \"searchControl10\" value=\"{{answer.value10}}\">{{answer.print10}}</p>\n      </div>\n      \n  </div>\n\n  <button (click)=\"Func()\" type=\"submit\" class=\"btn btn-default\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button>\n  </form>\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object])
], MathComponent);

var PhysicsComponent = (function () {
    function PhysicsComponent(router) {
        this.router = router;
        this.res1 = 0;
        this.unres1 = 0;
        this.searchControl11 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl12 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl13 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl14 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl15 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl16 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl17 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl18 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl19 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.searchControl20 = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.PhyscQues = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(__WEBPACK_IMPORTED_MODULE_7__PhysicsQuestiont__["a" /* PysicsQuestions */]);
    }
    PhysicsComponent.prototype.Func = function () {
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer11;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer12;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer13;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer14;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer15;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer16;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer17;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer18;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer19;
        __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer20;
        if (this.answer11 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer11) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer12 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer12) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer13 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer13) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer14 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer14) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer15 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer15) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer16 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer16) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer17 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer17) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer18 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer18) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer19 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer19) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer20 == __WEBPACK_IMPORTED_MODULE_6__PhysicsAnswers__["a" /* PAnswers */].Answer20) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        this.router.navigate(['/results1', this.res1, this.unres1]);
        console.log();
        return false;
    };
    PhysicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl11.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer11 = value;
        });
        this.searchControl12.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer12 = value;
        });
        this.searchControl13.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer13 = value;
        });
        this.searchControl14.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer14 = value;
        });
        this.searchControl15.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer15 = value;
        });
        this.searchControl16.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer16 = value;
        });
        this.searchControl17.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer17 = value;
        });
        this.searchControl18.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer18 = value;
        });
        this.searchControl19.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer19 = value;
        });
        this.searchControl20.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer20 = value;
        });
    };
    return PhysicsComponent;
}());
PhysicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Component */])({
        selector: 'physics',
        template: "\n  <h1>\u0417\u0430\u0434\u0430\u043D\u0438\u044F</h1>\n  <h4>\u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u041E\u0414\u0418\u041D \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430. \u0423\u0434\u0430\u0447\u0438!</h4>\n  <div *ngFor = \"let element of PhyscQues | async\">\n     <h2>{{element.name}}</h2>\n     <p><b>{{element.text}}</b></p><Br>\n     <img src = \"{{element.image7}}\">\n     <img src = \"{{element.image8}}\">\n     <img src = \"{{element.image9}}\">\n     <img src = \"{{element.image10}}\">\n     <img src = \"{{element.image11}}\">\n     <img src = \"{{element.image12}}\">\n     <div *ngFor = \"let answer of element.answers\">  \n     <p>{{answer.letter11}}<input *ngIf = \"answer.letter11\" type=\"radio\" name=\"answer{{element.number11}}\" [formControl] = \"searchControl11\" value=\"{{answer.value11}}\">{{answer.print11}}</p>\n     <p>{{answer.letter12}}<input *ngIf = \"answer.letter12\" type=\"radio\" name=\"answer{{element.number12}}\" [formControl] = \"searchControl12\" value=\"{{answer.value12}}\">{{answer.print12}}</p>\n     <p>{{answer.letter13}}<input *ngIf = \"answer.letter13\" type=\"radio\" name=\"answer{{element.number13}}\" [formControl] = \"searchControl13\" value=\"{{answer.value13}}\">{{answer.print13}}</p>\n     <p>{{answer.letter14}}<input *ngIf = \"answer.letter14\" type=\"radio\" name=\"answer{{element.number14}}\" [formControl] = \"searchControl14\" value=\"{{answer.value14}}\">{{answer.print14}}</p>\n     <p>{{answer.letter15}}<input *ngIf = \"answer.letter15\" type=\"radio\" name=\"answer{{element.number15}}\" [formControl] = \"searchControl15\" value=\"{{answer.value15}}\">{{answer.print15}}</p>\n     <p>{{answer.letter16}}<input *ngIf = \"answer.letter16\" type=\"radio\" name=\"answer{{element.number16}}\" [formControl] = \"searchControl16\" value=\"{{answer.value16}}\">{{answer.print16}}</p>\n     <p>{{answer.letter17}}<input *ngIf = \"answer.letter17\" type=\"radio\" name=\"answer{{element.number17}}\" [formControl] = \"searchControl17\" value=\"{{answer.value17}}\">{{answer.print17}}</p>\n     <p>{{answer.letter18}}<input *ngIf = \"answer.letter18\" type=\"radio\" name=\"answer{{element.number18}}\" [formControl] = \"searchControl18\" value=\"{{answer.value18}}\">{{answer.print18}}</p>\n     <p>{{answer.letter19}}<input *ngIf = \"answer.letter19\" type=\"radio\" name=\"answer{{element.number19}}\" [formControl] = \"searchControl19\" value=\"{{answer.value19}}\">{{answer.print19}}</p>\n     <p>{{answer.letter20}}<input *ngIf = \"answer.letter20\" type=\"radio\" name=\"answer{{element.number20}}\" [formControl] = \"searchControl20\" value=\"{{answer.value20}}\">{{answer.print20}}</p>\n     </div>\n    </div> \n  <button (click)=\"Func()\" type=\"submit\" class=\"btn btn-default\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button>\n"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PhysicsComponent);

var _a, _b;
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/SubjectComponent.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
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
        });
        console.log(this.res, this.unres);
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
        selector: 'results',
        template: "<h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B</h2>\n    <h2>\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"lime\">{{ res }}</font></h1>\n    <h2>\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"red\">{{ unres }}</font></h1>\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ResultComponent);

var _a, _b;
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/Results.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results1Component; });
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
    return Results1Component;
}());
Results1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
        selector: 'results',
        template: "<h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B</h2>\n       <h2>\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"lime\">{{ res1 }}</font></h1>\n       <h2>\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435:</h2><h1><font color = \"red\">{{ unres1 }}</font></h1>\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], Results1Component);

var _a, _b;
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/Results1.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
        selector: 'my-app',
        template: "<router-outlet></router-outlet>\n"
    })
], AppComponent);

//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/app.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 430;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(553);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/main.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaAnswers; });
/**
 * Created by nikita_glukhi on 2/7/17.
 */
/**
 * Created by nikita_glukhi on 2/7/17.
 */ var MaAnswers = {
    Answer1: 3,
    Answer2: 2,
    Answer3: 4,
    Answer4: 1,
    Answer5: 2,
    Answer6: 2,
    Answer7: 4,
    Answer8: 2,
    Answer9: 3,
    Answer10: 4
};
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/MathAnswers.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mathematics; });
/**
 * Created by nikita_glukhi on 2/7/17.
 */
/**
 * Created by nikita_glukhi on 2/7/17.
 */ var Mathematics = [
    {
        name: 'Задание 1',
        number1: 1,
        text: '<i>5x <sup><small>3</small></sup> - 8x <sup><small>2</small></sup> - 8x + 5 = 0 </i>',
        answers: [
            {
                value1: 1,
                letter1: 'А)',
                print1: 'x = 0'
            },
            {
                value1: 2,
                letter1: 'Б)',
                print1: 'x = &#8731;<span>3</span> &#8260; &#8732;<span>2</span>'
            },
            {
                value1: 3,
                letter1: 'В)',
                print1: 'x = 13 &#8260; 10 + &#8730;<span>69</span> &#8260; 10; x = 13 &#8260; 10 - &#8730;<span>69</span> &#8260; 10; x = -1'
            },
            {
                value1: 4,
                letter1: 'Г)',
                print1: 'x = 13 &#8260; &#8730;10 + &#8731;69 &#8260; 10; x = 1'
            },
        ]
    },
    {
        name: 'Задание 2',
        number2: 2,
        text: 'На какой картинке изобраажен график функции y = Ax<sup><small>2</small></sup> + Bx + C? КОЭФФИЦИЕНТЫ: A > 0; C > 0',
        image1: 'http://otvet-gotov.ru/pages/images/0264AF-2.png',
        image2: 'http://otvet-gotov.ru/pages/images/0264AF.png',
        image3: 'http://otvet-gotov.ru/pages/images/0264AF-1.png',
        image4: 'http://otvet-gotov.ru/pages/images/0FB73A-2.png',
        answers: [
            {
                value2: 1,
                letter2: 'А)',
                print2: '1'
            },
            {
                value2: 2,
                letter2: 'Б)',
                print2: '2'
            },
            {
                value2: 3,
                letter2: 'В)',
                print2: '3'
            },
            {
                value2: 4,
                letter2: 'Г)',
                print2: '4'
            },
        ]
    },
    {
        name: 'Задание 3',
        number3: 3,
        text: 'В треугольной усеченной пирамиде с высотой, равной 10, стороны одного из оснований равны 27, 29 и 52. Определите объем усеченной пирамиды, если периметр другого основания равен 72.',
        image5: 'http://testmath.ru/wp-content/uploads/stereometria/10/image002.jpg',
        answers: [
            {
                value3: 1,
                letter3: 'А)',
                print3: '1700'
            },
            {
                value1: 2,
                letter1: 'Б)',
                print3: '1450'
            },
            {
                value3: 3,
                letter3: 'В)',
                print3: '1940'
            },
            {
                value3: 4,
                letter3: 'Г)',
                print3: '1900'
            },
        ]
    },
    {
        name: 'Задание 4',
        number4: 4,
        text: 'Решить неравенство <i>x<sup><small>2</small></sup> - 15x + 50 > 0</i>',
        answers: [
            {
                value4: 1,
                letter4: 'А)',
                print4: 'x &#8712; (-&#8734; ; -4) &#8746; (5; &#8734;)'
            },
            {
                value4: 2,
                letter4: 'Б)',
                print4: 'x &#8712; (-&#8734; ; -4] &#8746; [5; &#8734;)'
            },
            {
                value4: 3,
                letter4: 'В)',
                print4: 'x &#8712;  &#8709;'
            },
            {
                value4: 4,
                letter4: 'Г)',
                print4: 'x &#8712; (-&#8734; ; &#8734;)'
            },
        ]
    },
    {
        name: 'Задание 5',
        number5: 5,
        text: 'Найдите значение выражения: log<sub><small>5</small></sub>0,2 + log<sub><small>0,5</small></sub>4',
        answers: [
            {
                value5: 1,
                letter5: 'А)',
                print5: '3'
            },
            {
                value5: 2,
                letter5: 'Б)',
                print5: '-3'
            },
            {
                value5: 3,
                letter5: 'В)',
                print5: '1'
            },
            {
                value5: 4,
                letter5: 'Г)',
                print5: '2'
            },
        ]
    },
    {
        name: 'Задание 6',
        number6: 6,
        text: 'На рисунке изображен график некоторой функции y = &#402;(x). Пользуясь им, вычислите интеграл <sub><small>1</small></sub><sup><small>5</small></sup>&#8747; = &#402;(x) dx.',
        image6: 'https://ege.sdamgia.ru/get_file?id=6706',
        answers: [
            {
                value6: 1,
                letter6: 'А)',
                print6: '11'
            },
            {
                value6: 2,
                letter6: 'Б)',
                print6: '12'
            },
            {
                value6: 3,
                letter6: 'В)',
                print6: '13'
            },
            {
                value6: 4,
                letter6: 'Г)',
                print6: '14'
            },
        ]
    },
    {
        name: 'Задание 7',
        number7: 7,
        text: 'Решить уравнение (-&#8730;2)sin(-5&#960; &#8260; 2 + x) * sinx = cosx и найти все его заначения на промежутке &#91; 9&#960; &#8260; 2 , 6&#960; &#93;.',
        answers: [
            {
                value7: 1,
                letter7: 'А)',
                print7: '&#123; -(&#960; &#8260; 3) + 2&#960;k; -(&#960; &#8260; 2) + 2&#960;k; : k &#8712; Z &#125;'
            },
            {
                value7: 2,
                letter7: 'Б)',
                print7: '&#123; &#960; &#8260; 6 + 2&#960;k; 5&#960; &#8260; 6 + 2&#960;k; : k &#8712; Z &#125;'
            },
            {
                value7: 3,
                letter7: 'В)',
                print7: '&#123; &#960; &#8260; 2 + &#960;k; -(&#960; &#8260; 4) + 2&#960;k; 3&#960; -(3&#8260; 4) + 2&#960;k : k &#8712; Z &#125;'
            },
            {
                value7: 4,
                letter7: 'Г)',
                print7: '&#123; &#960; &#8260; 2 + &#960;k; &#960; &#8260; 4 + 2&#960;k; 3&#960; &#8260; 4 + 2&#960;k : k &#8712; Z &#125;'
            },
        ]
    },
    {
        name: 'Задание 8',
        number8: 8,
        text: 'Решить уравнение 7<sup><small>18,5x + 0,7</small></sup> = 1 &#8260; 343.',
        answers: [
            {
                value8: 1,
                letter8: 'А)',
                print8: 'x = -0,22'
            },
            {
                value8: 2,
                letter8: 'Б)',
                print8: 'x = -0,2'
            },
            {
                value8: 3,
                letter8: 'В)',
                print8: '0,2'
            },
            {
                value8: 4,
                letter8: 'Г)',
                print8: '1'
            },
        ]
    },
    {
        name: 'Задание 9',
        number9: 9,
        text: 'В треугольнике АВС &#8736;С = 90&#176;, AB = 5, sin&#8736;A = 7 &#8260; 25. Найдите АС.',
        answers: [
            {
                value9: 1,
                letter9: 'А)',
                print9: '4'
            },
            {
                value9: 2,
                letter9: 'Б)',
                print9: '4,6'
            },
            {
                value9: 3,
                letter9: 'В)',
                print9: '4,8'
            },
            {
                value9: 4,
                letter9: 'Г)',
                print9: '5'
            },
        ]
    },
    {
        name: 'Задание 10',
        number10: 10,
        text: 'Прик аких значениях параметра а, уравнение x<sup><small>2</small></sup> + (1 - a<sup><small>2</small></sup>) = &#124;x - 1 + a&#124; + &#124;x - a + 1&#124; имеет единственный корень?',
        answers: [
            {
                value10: 1,
                letter10: 'А)',
                print10: 'При а = -2 и а = 3'
            },
            {
                value10: 2,
                letter10: 'Б)',
                print10: 'При а = -1 и а = -3'
            },
            {
                value10: 3,
                letter10: 'В)',
                print10: 'При а = 1 и а = -3'
            },
            {
                value10: 4,
                letter10: 'Г)',
                print10: 'При а = -1 и а = 3'
            },
        ]
    }
];
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/MathQuestions.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAnswers; });
/**
 * Created by nikita_glukhi on 2/9/17.
 */
/**
 * Created by nikita_glukhi on 2/9/17.
 */ var PAnswers = {
    Answer11: 2,
    Answer12: 2,
    Answer13: 3,
    Answer14: 1,
    Answer15: 4,
    Answer16: 1,
    Answer17: 2,
    Answer18: 4,
    Answer19: 4,
    Answer20: 1
};
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/PhysicsAnswers.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PysicsQuestions; });
/**
 * Created by nikita_glukhi on 2/9/17.
 */
/**
 * Created by nikita_glukhi on 2/9/17.
 */ var PysicsQuestions = [
    {
        name: 'Задание 1',
        number11: 13,
        formControl: 'searchControl13',
        text: 'Из открытого люка автомобиля, который движется прямолинейно и равномерно со скоростью 25 м/с в направлении, противоположном движению, горизонтально бросают мячик со скоростью 5 м/с относительно автомобиля. Какова скорость этого мячика относительно Земли?',
        answers: [
            {
                value11: 1,
                letter11: 'А)',
                print11: '5 м/с'
            },
            {
                value11: 2,
                letter11: 'Б)',
                print11: '20 м/с'
            },
            {
                value11: 3,
                letter11: 'В)',
                print11: '25 м/с'
            },
            {
                value11: 4,
                letter11: 'Г)',
                print11: '30 м/с'
            },
        ]
    },
    {
        name: 'Задание 2',
        number12: 14,
        formControl: 'searchControl12',
        text: 'Какой из приведенных ниже графиков правильно показывает зависимость потенциальной энергии этого тела относительно поверхности Земли от времени?',
        image7: 'https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a5-q.png',
        answers: [
            {
                value12: 1,
                letter12: 'А)',
                print12: '1'
            },
            {
                value12: 2,
                letter12: 'Б)',
                print12: '2'
            },
            {
                value12: 3,
                letter12: 'В)',
                print12: '3'
            },
            {
                value12: 4,
                letter12: 'Г)',
                print12: '4'
            },
        ]
    },
    {
        name: 'Задание 3',
        number13: 15,
        formControl: 'searchControl13',
        text: 'Какую работу совершает газ в замкнутом процессе 1→2→3→4→5→3→1?',
        image8: 'https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a8-t.png',
        answers: [
            {
                value13: 1,
                letter13: 'А)',
                print13: 'Положительную'
            },
            {
                value13: 2,
                letter13: 'Б)',
                print13: 'Отрицательную'
            },
            {
                value13: 3,
                letter13: 'В)',
                print13: 'Равную нулю'
            },
            {
                value13: 4,
                letter13: 'Г)',
                print13: 'Однозначно ответить нельзя'
            },
        ]
    },
    {
        name: 'Задание 4',
        number14: 16,
        formControl: 'searchControl14',
        text: 'Свет доходит от Солнца до Земли за 500 с, а от Солнца до Марса — за 760 с. Чему равно наименьшее расстояние от Земли до Марса при их движении по своим орбитам? Справочные данные: расстояние между Землёй и Солнцем 1,5⋅10<sup><small>11</small></sup> м.',
        answers: [
            {
                value14: 1,
                letter14: 'А)',
                print14: '78  млн. км'
            },
            {
                value14: 2,
                letter14: 'Б)',
                print14: '150  млн. км'
            },
            {
                value14: 3,
                letter14: 'В)',
                print14: '228  млн. км'
            },
            {
                value14: 4,
                letter14: 'Г)',
                print14: '378  млн. км'
            },
        ]
    },
    {
        name: 'Задание 5',
        number15: 17,
        formControl: 'searchControl15',
        text: 'На каком из приведенных рисунков правильно изображена схема атома азота <sup><small>14</small></sup><sub><small>7</small></sub>N?',
        image9: 'https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a17-t.png',
        answers: [
            {
                value15: 1,
                letter15: 'А)',
                print15: '1'
            },
            {
                value15: 2,
                letter15: 'Б)',
                print15: '2'
            },
            {
                value15: 3,
                letter15: 'В)',
                print15: '3'
            },
            {
                value15: 4,
                letter15: 'Г)',
                print15: '4'
            },
        ]
    },
    {
        name: 'Задание 6',
        number16: 18,
        formControl: 'searchControl16',
        text: 'Неизвестным продуктом X ядерной реакции <sup><small>27</small></sup><sub><small>13</small></sub>Al+<sup><small>1</small></sup><sub><small>0</small></sub>n→<sup><small>24</small></sup><sub><small>11</small></sub>Na+X является...',
        answers: [
            {
                value16: 1,
                letter16: 'А)',
                print16: '&#945; - частица'
            },
            {
                value16: 2,
                letter16: 'Б)',
                print16: '&#946; - частица'
            },
            {
                value16: 3,
                letter16: 'В)',
                print16: '&#947; - частица'
            },
            {
                value16: 4,
                letter16: 'Г)',
                print16: 'Электрон'
            },
        ]
    },
    {
        name: 'Задание 7',
        number17: 19,
        formControl: 'searchControl17',
        text: 'В закрытом сосуде находится одноатомный газ неон, имеющий молярную массу 20г/моль. Его температуру увеличивают от 338K до 512K. Считая, что в этом процессе неон можно считать идеальным газом, найдите, как и на сколько в результате изменится среднеквадратичная скорость атомов неона? Справочные данные: универсальная газовая постоянная R=8,31Дж/(моль⋅К).',
        answers: [
            {
                value17: '1',
                letter17: 'А)',
                print17: 'Уменьшится на 150 м/c.'
            },
            {
                value17: 2,
                letter17: 'Б)',
                print17: 'Увеличится на 150 м/c.'
            },
            {
                value17: 3,
                letter17: 'В)',
                print17: 'Увеличится на 800 м/с.'
            },
            {
                value17: 4,
                letter17: 'Г)',
                print17: 'Уменьшится на 650 м/с.'
            },
        ]
    },
    {
        name: 'Задание 8',
        number18: 20,
        formControl: 'searchControl18',
        text: 'Сила тока в цепи идеального колебательного контура изменяется по закону I=0,2sin(2⋅10<sup><small>5</small></sup>⋅t), где сила тока I в амперах, время t в секундах. Чему равна емкость конденсатора, входящего в состав этого колебательного контура, если индуктивность катушки этого контура равна  2⋅10<sup><small>-2</small></sup> Гн?',
        answers: [
            {
                value18: 1,
                letter18: 'А)',
                print18: '12,5 мФ'
            },
            {
                value18: 2,
                letter18: 'Б)',
                print18: '0,25 мФ'
            },
            {
                value18: 3,
                letter18: 'В)',
                print18: '1,25 нФ'
            },
            {
                value18: 4,
                letter18: 'Г)',
                print18: '0,1 мкФ'
            },
        ]
    },
    {
        name: 'Задание 9',
        number19: 21,
        formControl: 'searchControl19',
        text: "\u041E\u0431\u044A\u0435\u043C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u0430 \u043C\u0430\u0441\u0441\u043E\u0439 4,5 \u043A\u0433 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 6,4 \u043C<sup><small>3</small></sup>. \u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u0430 \u043D\u0430 \u0441\u0442\u0435\u043D\u043A\u0438 \u0441\u043E\u0441\u0443\u0434\u0430 \u0440\u0430\u0432\u043D\u043E 150 \u043A\u041F\u0430. \u041A\u0430\u043A\u043E\u0432\u0430 \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043C\u043E\u043B\u0435\u043A\u0443\u043B \u044D\u0442\u043E\u0433\u043E \u0433\u0430\u0437\u0430?",
        answers: [
            {
                value19: 1,
                letter19: 'А)',
                print19: '200 м/c'
            },
            {
                value19: 2,
                letter19: 'Б)',
                print19: '400 м/c'
            },
            {
                value19: 3,
                letter19: 'В)',
                print19: '600 м/c'
            },
            {
                value19: 4,
                letter19: 'Г)',
                print19: '800 м/c'
            },
        ]
    },
    {
        name: 'Задание 10',
        number20: 22,
        formControl: 'searchControl20',
        text: 'На каком графике отображена зависимость заряда конденсатора от напряжения, приложенного к его пластинам?',
        image10: 'https://ege.yandex.ru/media/zno-ru/physics/9/10/choice1_1_zno_2015_phys_9_10_1.png',
        image11: 'https://ege.yandex.ru/media/zno-ru/physics/9/10/choice2_1_zno_2015_phys_9_10_2.png',
        image12: 'https://ege.yandex.ru/media/zno-ru/physics/9/10/choice3_1_zno_2015_phys_9_10_3.png',
        answers: [
            {
                value20: 1,
                letter20: 'А)',
                print20: '1'
            },
            {
                value20: 2,
                letter20: 'Б)',
                print20: '2'
            },
            {
                value20: 3,
                letter20: 'В)',
                print20: '3'
            },
            {
                value20: 4,
                letter20: 'Г)',
                print20: 'Все графики неверны'
            },
        ]
    },
];
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/PhysicsQuestiont.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_ContactComponent__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Results__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Results1__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_SubjectComponent__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/**
 * Created by nikita_glukhi on 10/6/16.
 */





var routes = [
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_1__Components_ContactComponent__["a" /* ContactComponent */] },
    { path: 'mathematics', component: __WEBPACK_IMPORTED_MODULE_4__Components_SubjectComponent__["a" /* MathComponent */] },
    { path: 'physics', component: __WEBPACK_IMPORTED_MODULE_4__Components_SubjectComponent__["b" /* PhysicsComponent */] },
    { path: 'results/:res/:unres/:n/:sn', component: __WEBPACK_IMPORTED_MODULE_2__Results__["a" /* ResultComponent */] },
    { path: 'results1/:res1/:unres1', component: __WEBPACK_IMPORTED_MODULE_3__Results1__["a" /* Results1Component */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__Components_ContactComponent__["a" /* ContactComponent */], data: { 'home': true } },
    {
        path: '**',
        redirectTo: '/'
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/Routes.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Routes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ContactComponent__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Results__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Results1__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_new_component_my_new_component_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_SubjectComponent__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__Routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__Components_SubjectComponent__["a" /* MathComponent */], __WEBPACK_IMPORTED_MODULE_12__Components_SubjectComponent__["b" /* PhysicsComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_ContactComponent__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_7__Results__["a" /* ResultComponent */], __WEBPACK_IMPORTED_MODULE_8__Results1__["a" /* Results1Component */], __WEBPACK_IMPORTED_MODULE_10__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */], __WEBPACK_IMPORTED_MODULE_10__my_new_component_my_new_component_component__["a" /* MyNewComponentComponent */]],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(365);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(552);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/index.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNewComponentComponent = (function () {
    function MyNewComponentComponent() {
    }
    MyNewComponentComponent.prototype.ngOnInit = function () {
    };
    return MyNewComponentComponent;
}());
MyNewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Component */])({
        selector: 'app-my-new-component',
        template: __webpack_require__(710),
        styles: [__webpack_require__(708)]
    }),
    __metadata("design:paramtypes", [])
], MyNewComponentComponent);

//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/my-new-component.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/environment.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/nikita_glukhi/Desktop/D/TestProject/src/polyfills.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(261)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<p>\n  my-new-component works!\n</p>\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(431);


/***/ })

},[978]);
//# sourceMappingURL=main.bundle.js.map