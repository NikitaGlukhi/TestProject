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
 * Created by nikita_glukhi on 10/4/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.res = 0;
        this.unres = 0;
        this.result1 = 3;
        this.result2 = 2;
        this.result3 = 4;
        this.result4 = 1;
        this.result5 = 2;
        this.result6 = 2;
        this.result7 = 4;
        this.result8 = 2;
        this.result9 = 3;
        this.result10 = 4;
        this.searchControl0 = new forms_1.FormControl();
        this.searchControl = new forms_1.FormControl();
        this.searchControl1 = new forms_1.FormControl();
        this.searchControl2 = new forms_1.FormControl();
        this.searchControl3 = new forms_1.FormControl();
        this.searchControl4 = new forms_1.FormControl();
        this.searchControl5 = new forms_1.FormControl();
        this.searchControl6 = new forms_1.FormControl();
        this.searchControl7 = new forms_1.FormControl();
        this.searchControl8 = new forms_1.FormControl();
        this.searchControl9 = new forms_1.FormControl();
        this.searchControl10 = new forms_1.FormControl();
        this.searchControl11 = new forms_1.FormControl();
        this.searchControl12 = new forms_1.FormControl();
    }
    HomeComponent.prototype.Func = function () {
        if (this.answer1 == 3) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer2 == 2) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer3 == 4) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer4 == 1) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer5 == 2) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer6 == 2) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer7 == 4) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer8 == 2) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer9 == 3) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        if (this.answer10 == 4) {
            console.log("Правильно");
            this.res += 1;
        }
        else {
            console.log("Неправильно");
            this.unres += 1;
        }
        this.router.navigate(['/results', this.res, this.unres, this.n, this.sn]);
        console.log();
        return false;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges.subscribe(function (value) {
            console.log(value);
        });
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
        this.searchControl11.valueChanges.subscribe(function (text) {
            console.log(text);
            _this.n = text;
        });
        this.searchControl12.valueChanges.subscribe(function (text) {
            console.log(text);
            _this.sn = text;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'mathematics',
            template: "<form (ngSubmit)=\"Func(TaskForm)\" #TaskForm=\"ngForm\">\n  <h2>\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:</h2><input type=\"text\" name=\"firstName\" [formControl] = \"searchControl11\">\n  <h2>\u0412\u0430\u0448\u0430 \u0444\u0430\u043C\u0438\u043B\u0438\u044F:</h2><input type=\"text\" name=\"surname\" [formControl] = \"searchControl12\">\n  \n  <h1>\u0417\u0430\u0434\u0430\u043D\u0438\u044F</h1>\n  <h4>\u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u041E\u0414\u0418\u041D \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430. \u0423\u0434\u0430\u0447\u0438!</h4>\n\n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 1</h2>\n  <p><b>\u0420\u0435\u0448\u0438\u0442\u044C \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435: <i>5x <sup><small>3</small></sup> - 8x <sup><small>2</small></sup> - 8x + 5 = 0 </i></b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer1\" [formControl] = \"searchControl1\" value=\"1\" >x = 0<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer1\" [formControl] = \"searchControl1\" value=\"2\" >x = &#8731;<span>3</span> &#8260; &#8732;<span>2</span><Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer1\" [formControl] = \"searchControl1\" value=\"3\" >x = 13 &#8260; 10 + &#8730;<span>69</span> &#8260; 10; x = 13 &#8260; 10 - &#8730;<span>69</span> &#8260; 10; x = -1 <Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer1\" [formControl] = \"searchControl1\" value=\"4\" >x = 13 &#8260; &#8730;10 + &#8731;69 &#8260; 10; x = 1;<Br>\n\n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 2</h2>\n  <p>\u041D\u0430 \u043A\u0430\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0430\u0436\u0435\u043D \u0433\u0440\u0430\u0444\u0438\u043A \u0444\u0443\u043D\u043A\u0446\u0438\u0438 y = Ax<sup><small>2</small></sup> + Bx + C</p>\n  <p>\u041A\u041E\u042D\u0424\u0424\u0418\u0426\u0418\u0415\u041D\u0422\u042B:</p>\n  <p>A > 0; C > 0</p>\n  \u0410<input type=\"radio\" name=\"answer2\" [formControl] = \"searchControl2\" value=\"1\"><img src = \"http://otvet-gotov.ru/pages/images/0264AF-2.png\"><Br>\n  \u0411<input type=\"radio\" name=\"answer2\" [formControl] = \"searchControl2\" value=\"2\"><img src = \"http://otvet-gotov.ru/pages/images/0264AF.png\"><Br>\n  \u0412<input type=\"radio\" name=\"answer2\" [formControl] = \"searchControl2\" value=\"3\"><img src = \"http://otvet-gotov.ru/pages/images/0264AF-1.png\"><Br>\n  \u0413<input type=\"radio\" name=\"answer2\" [formControl] = \"searchControl2\" value=\"4\"><img src = \"http://otvet-gotov.ru/pages/images/0FB73A-2.png\"><Br>\n\n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3</h2>\n  <p>\u0420\u0435\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443.</p>\n  <p>\u0412 \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u043E\u0439 \u0443\u0441\u0435\u0447\u0435\u043D\u043D\u043E\u0439 \u043F\u0438\u0440\u0430\u043C\u0438\u0434\u0435 \u0441 \u0432\u044B\u0441\u043E\u0442\u043E\u0439, \u0440\u0430\u0432\u043D\u043E\u0439 10, \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0440\u0430\u0432\u043D\u044B 27, 29 \u0438 52. \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u043E\u0431\u044A\u0435\u043C \u0443\u0441\u0435\u0447\u0435\u043D\u043D\u043E\u0439 \u043F\u0438\u0440\u0430\u043C\u0438\u0434\u044B, \u0435\u0441\u043B\u0438 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0432\u0435\u043D 72.</p>\n  <img src = \"http://testmath.ru/wp-content/uploads/stereometria/10/image002.jpg\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer3\" [formControl] = \"searchControl3\" value=\"1\">1700<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer3\" [formControl] = \"searchControl3\" value=\"2\">1450<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer3\" [formControl] = \"searchControl3\" value=\"3\">1940<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer3\" [formControl] = \"searchControl3\" value=\"4\">1900<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 4</h2>\n  <p><b>\u0420\u0435\u0448\u0438\u0442\u044C \u043D\u0435\u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u043E <i>x<sup><small>2</small></sup> - 15x + 50 > 0</i> </b><Br>\n  <p>\u0410</p><input type = \"radio\" name = \"answer4\" [formControl] = \"searchControl4\" value=\"1\">x &#8712; (-&#8734; ; -4) &#8746; (5; &#8734;)<Br>\n  <p>\u0411</p><input type = \"radio\" name = \"answer4\" [formControl] = \"searchControl4\" value=\"2\">x &#8712; (-&#8734; ; -4] &#8746; [5; &#8734;)<Br>\n  <p>\u0412</p><input type = \"radio\" name = \"answer4\" [formControl] = \"searchControl4\" value=\"3\">x &#8712;  &#8709;<Br>\n  <p>\u0413</p><input type = \"radio\" name = \"answer4\" [formControl] = \"searchControl4\" value=\"4\">x &#8712; (-&#8734; ; &#8734;)<Br>\n\n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 5</h2>\n  <p><b>\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F: log<sub><small>5</small></sub>0,2 + log<sub><small>0,5</small></sub>4</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer5\" [formControl] = \"searchControl5\" value=\"1\">3<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer5\" [formControl] = \"searchControl5\" value=\"2\">-3<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer5\" [formControl] = \"searchControl5\" value=\"3\">1<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer5\" [formControl] = \"searchControl5\" value=\"4\">2<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 6</h2>\n  <p><b>\u041D\u0430 \u0440\u0438\u0441\u0443\u043D\u043A\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D \u0433\u0440\u0430\u0444\u0438\u043A \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 y = &#402;(x). \u041F\u043E\u043B\u044C\u0437\u0443\u044F\u0441\u044C \u0438\u043C, \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u043B <sub><small>1</small></sub><sup><small>5</small></sup>&#8747; = &#402;(x) dx.</b><Br>\n  <img src = \"https://ege.sdamgia.ru/get_file?id=6706\"><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer6\" [formControl] = \"searchControl6\" value=\"1\">11<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer6\" [formControl] = \"searchControl6\" value=\"2\">12<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer6\" [formControl] = \"searchControl6\" value=\"3\">13<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer6\" [formControl] = \"searchControl6\" value=\"4\">14<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 7</h2>\n  <p><b>\u0420\u0435\u0448\u0438\u0442\u044C \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 (-&#8730;2)sin(-5&#960; &#8260; 2 + x) * sinx = cosx \u0438 \u043D\u0430\u0439\u0442\u0438 \u0432\u0441\u0435 \u0435\u0433\u043E \u0437\u0430\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043A\u0435 &#91; 9&#960; &#8260; 2 , 6&#960; &#93;.</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer7\" [formControl] = \"searchControl7\" value=\"1\">&#123; -(&#960; &#8260; 3) + 2&#960;k; -(&#960; &#8260; 2) + 2&#960;k; : k &#8712; Z &#125;<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer7\" [formControl] = \"searchControl7\" value=\"2\">&#123; &#960; &#8260; 6 + 2&#960;k; 5&#960; &#8260; 6 + 2&#960;k; : k &#8712; Z &#125;<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer7\" [formControl] = \"searchControl7\" value=\"3\">&#123; &#960; &#8260; 2 + &#960;k; -(&#960; &#8260; 4) + 2&#960;k; 3&#960; -(3&#8260; 4) + 2&#960;k : k &#8712; Z &#125;<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer7\" [formControl] = \"searchControl7\" value=\"4\">&#123; &#960; &#8260; 2 + &#960;k; &#960; &#8260; 4 + 2&#960;k; 3&#960; &#8260; 4 + 2&#960;k : k &#8712; Z &#125;<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 8</h2>\n  <p><b>\u0420\u0435\u0448\u0438\u0442\u044C \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 7<sup><small>18,5x + 0,7</small></sup> = 1 &#8260; 343.</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer8\" [formControl] = \"searchControl8\" value=\"1\">-0,22<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer8\" [formControl] = \"searchControl8\" value=\"2\">-0,2<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer8\" [formControl] = \"searchControl8\" value=\"3\">0,2<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer8\" [formControl] = \"searchControl8\" value=\"4\">1<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 9</h2>\n  <p><b>\u0412 \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0435 \u0410\u0412\u0421 &#8736;\u0421 = 90&#176;, AB = 5, sin&#8736;A = 7 &#8260; 25. \u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0410\u0421.</b><Br>\n  <img src =\"https://ege.sdamgia.ru/get_file?id=20487\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer9\" [formControl] = \"searchControl9\" value=\"1\">4<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer9\" [formControl] = \"searchControl9\" value=\"2\">4,6<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer9\" [formControl] = \"searchControl9\" value=\"3\">4,8<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer9\" [formControl] = \"searchControl9\" value=\"4\">5<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 10</h2>\n  <p><b>\u041F\u0440\u0438\u043A \u0430\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0430, \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 x<sup><small>2</small></sup> + (1 - a<sup><small>2</small></sup>) = &#124;x - 1 + a&#124; + &#124;x - a + 1&#124; \u0438\u043C\u0435\u0435\u0442 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C?</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer10\" [formControl] = \"searchControl10\" value=\"1\">\u041F\u0440\u0438 \u0430 = -2 \u0438 \u0430 = 3<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer10\" [formControl] = \"searchControl10\" value=\"2\">\u041F\u0440\u0438 \u0430 = -1 \u0438 \u0430 = -3<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer10\" [formControl] = \"searchControl10\" value=\"3\">\u041F\u0440\u0438 \u0430 = 1 \u0438 \u0430 = -3<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer10\" [formControl] = \"searchControl10\" value=\"4\">\u041F\u0440\u0438 \u0430 = -1 \u0438 \u0430 = 3<Br>\n  \n  <button (click)=\"Func()\" type=\"submit\" class=\"btn btn-default\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button>\n  </form>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=HomeComponent.js.map