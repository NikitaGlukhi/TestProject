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
var router_1 = require('@angular/router');
var AboutComponent = (function () {
    function AboutComponent(router) {
        this.router = router;
        this.res1 = 0;
        this.unres1 = 0;
        this.result13 = 2;
        this.result14 = 2;
        this.result15 = 3;
        this.result16 = 1;
        this.result17 = 4;
        this.result18 = 1;
        this.result19 = 2;
        this.result20 = 4;
        this.result21 = 4;
        this.result22 = 1;
        this.searchControl13 = new forms_1.FormControl();
        this.searchControl14 = new forms_1.FormControl();
        this.searchControl15 = new forms_1.FormControl();
        this.searchControl16 = new forms_1.FormControl();
        this.searchControl17 = new forms_1.FormControl();
        this.searchControl18 = new forms_1.FormControl();
        this.searchControl19 = new forms_1.FormControl();
        this.searchControl20 = new forms_1.FormControl();
        this.searchControl21 = new forms_1.FormControl();
        this.searchControl22 = new forms_1.FormControl();
    }
    AboutComponent.prototype.Func = function () {
        if (this.answer13 == 2) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer14 == 2) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer15 == 3) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer16 == 1) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer17 == 4) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer18 == 1) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer19 == 2) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer20 == 4) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer21 == 4) {
            console.log("Правильно");
            this.res1 += 1;
        }
        else {
            console.log("Неправильно");
            this.unres1 += 1;
        }
        if (this.answer22 == 1) {
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
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.searchControl21.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer21 = value;
        });
        this.searchControl22.valueChanges.subscribe(function (value) {
            console.log(value);
            _this.answer22 = value;
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: "<form (ngSubmit) = \"Func(TaskForm)\" #TaskForm=\"ngForm\">\n  \n  <h1>\u0417\u0430\u0434\u0430\u043D\u0438\u044F</h1>\n  <h4>\u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u041E\u0414\u0418\u041D \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430. \u0423\u0434\u0430\u0447\u0438!</h4>\n\n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 1</h2>\n  <p><b>\u0418\u0437 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u043B\u044E\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E \u0438 \u0440\u0430\u0432\u043D\u043E\u043C\u0435\u0440\u043D\u043E \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E 25 \u043C/\u0441 \u0432 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u043C \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044E, \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0431\u0440\u043E\u0441\u0430\u044E\u0442 \u043C\u044F\u0447\u0438\u043A \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E 5 \u043C/\u0441 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F. \u041A\u0430\u043A\u043E\u0432\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043C\u044F\u0447\u0438\u043A\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0417\u0435\u043C\u043B\u0438?</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer13\" [formControl] = \"searchControl13\" value=\"1\">5 \u043C/\u0441<Br> \n  <p>\u0411</p><input type=\"radio\" name=\"answer13\" [formControl] = \"searchControl13\" value=\"2\">20 \u043C/\u0441<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer13\" [formControl] = \"searchControl13\" value=\"3\">25 \u043C/\u0441<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer13\" [formControl] = \"searchControl13\" value=\"4\">30 \u043C/\u0441<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 2</h2>\n  <p><b>\u041A\u0430\u043A\u043E\u0439 \u0438\u0437 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043D\u0438\u0436\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u043E\u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u0442\u0435\u043B\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0417\u0435\u043C\u043B\u0438 \u043E\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438?</b><Br>\n  <img src=\"https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a5-q.png\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer14\" [formControl] = \"searchControl14\" value=\"1\">1<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer14\" [formControl] = \"searchControl14\" value=\"2\">2<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer14\" [formControl] = \"searchControl14\" value=\"3\">3<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer14\" [formControl] = \"searchControl14\" value=\"4\">4<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3</h2>\n  <p><b>\u041A\u0430\u043A\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0433\u0430\u0437 \u0432 \u0437\u0430\u043C\u043A\u043D\u0443\u0442\u043E\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 1\u21922\u21923\u21924\u21925\u21923\u21921?</b><Br>\n  <img src =\"https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a8-t.png\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer15\" [formControl] = \"searchControl15\" value=\"1\">\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer15\" [formControl] = \"searchControl15\" value=\"2\">\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer15\" [formControl] = \"searchControl15\" value=\"3\">\u0420\u0430\u0432\u043D\u0443\u044E \u043D\u0443\u043B\u044E<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer15\" [formControl] = \"searchControl15\" value=\"4\">\u041E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 4</h2>\n  <p><b>\u0421\u0432\u0435\u0442 \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u043E\u0442 \u0421\u043E\u043B\u043D\u0446\u0430 \u0434\u043E \u0417\u0435\u043C\u043B\u0438 \u0437\u0430 500 \u0441, \u0430 \u043E\u0442 \u0421\u043E\u043B\u043D\u0446\u0430 \u0434\u043E \u041C\u0430\u0440\u0441\u0430 \u2014 \u0437\u0430 760 \u0441. \u0427\u0435\u043C\u0443 \u0440\u0430\u0432\u043D\u043E \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0442 \u0417\u0435\u043C\u043B\u0438 \u0434\u043E \u041C\u0430\u0440\u0441\u0430 \u043F\u0440\u0438 \u0438\u0445 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438 \u043F\u043E \u0441\u0432\u043E\u0438\u043C \u043E\u0440\u0431\u0438\u0442\u0430\u043C? \u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435: \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0417\u0435\u043C\u043B\u0451\u0439 \u0438 \u0421\u043E\u043B\u043D\u0446\u0435\u043C 1,5\u22C510<sup><small>11</small></sup> \u043C.</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer16\" [formControl] = \"searchControl16\" value=\"1\">78  \u043C\u043B\u043D. \u043A\u043C<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer16\" [formControl] = \"searchControl16\" value=\"2\">150  \u043C\u043B\u043D. \u043A\u043C<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer16\" [formControl] = \"searchControl16\" value=\"3\">228  \u043C\u043B\u043D. \u043A\u043C<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer16\" [formControl] = \"searchControl16\" value=\"4\">378  \u043C\u043B\u043D. \u043A\u043C<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 5</h2>\n  <p><b>\u041D\u0430 \u043A\u0430\u043A\u043E\u043C \u0438\u0437 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0440\u0438\u0441\u0443\u043D\u043A\u043E\u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 \u0441\u0445\u0435\u043C\u0430 \u0430\u0442\u043E\u043C\u0430 \u0430\u0437\u043E\u0442\u0430 <sup><small>14</small></sup><sub><small>7</small></sub>N?</b><Br>\n  <img src=\"https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a17-t.png\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer17\" [formControl] = \"searchControl17\" value=\"1\">1<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer17\" [formControl] = \"searchControl17\" value=\"2\">2<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer17\" [formControl] = \"searchControl17\" value=\"3\">3<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer17\" [formControl] = \"searchControl17\" value=\"4\">4<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 6</h2>\n  <p><b>\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C X \u044F\u0434\u0435\u0440\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 <sup><small>27</small></sup><sub><small>13</small></sub>Al+<sup><small>1</small></sup><sub><small>0</small></sub>n\u2192<sup><small>24</small></sup><sub><small>11</small></sub>Na+X \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer18\" [formControl] = \"searchControl18\" value=\"1\">&#945; - \u0447\u0430\u0441\u0442\u0438\u0446\u0430<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer18\" [formControl] = \"searchControl18\" value=\"2\">&#946; - \u0447\u0430\u0441\u0442\u0438\u0446\u0430<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer18\" [formControl] = \"searchControl18\" value=\"3\">&#947; - \u0447\u0430\u0441\u0442\u0438\u0446\u0430<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer18\" [formControl] = \"searchControl18\" value=\"4\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 7</h2>\n  <p><b>\u0412 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C \u0441\u043E\u0441\u0443\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043E\u0434\u043D\u043E\u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0433\u0430\u0437 \u043D\u0435\u043E\u043D, \u0438\u043C\u0435\u044E\u0449\u0438\u0439 \u043C\u043E\u043B\u044F\u0440\u043D\u0443\u044E \u043C\u0430\u0441\u0441\u0443 20\u0433/\u043C\u043E\u043B\u044C. \u0415\u0433\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u044E\u0442 \u043E\u0442 338K \u0434\u043E 512K. \u0421\u0447\u0438\u0442\u0430\u044F, \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043D\u0435\u043E\u043D \u043C\u043E\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0433\u0430\u0437\u043E\u043C, \u043D\u0430\u0439\u0434\u0438\u0442\u0435, \u043A\u0430\u043A \u0438 \u043D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u0441\u0440\u0435\u0434\u043D\u0435\u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0430\u0442\u043E\u043C\u043E\u0432 \u043D\u0435\u043E\u043D\u0430? \u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435: \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0430\u044F R=8,31\u0414\u0436/(\u043C\u043E\u043B\u044C\u22C5\u041A).</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer19\" [formControl] = \"searchControl19\" value=\"1\">\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u0441\u044F \u043D\u0430 150 \u043C/c.<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer19\" [formControl] = \"searchControl19\" value=\"2\">\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u0441\u044F \u043D\u0430 150 \u043C/c.<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer19\" [formControl] = \"searchControl19\" value=\"3\">\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u0441\u044F \u043D\u0430 800 \u043C/\u0441.<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer19\" [formControl] = \"searchControl19\" value=\"4\">\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u0441\u044F \u043D\u0430 650 \u043C/\u0441.<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 8</h2>\n  <p><b>\u0421\u0438\u043B\u0430 \u0442\u043E\u043A\u0430 \u0432 \u0446\u0435\u043F\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0431\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0430 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0437\u0430\u043A\u043E\u043D\u0443 I=0,2sin(2\u22C510<sup><small>5</small></sup>\u22C5t), \u0433\u0434\u0435 \u0441\u0438\u043B\u0430 \u0442\u043E\u043A\u0430 I \u0432 \u0430\u043C\u043F\u0435\u0440\u0430\u0445, \u0432\u0440\u0435\u043C\u044F t \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445. \u0427\u0435\u043C\u0443 \u0440\u0430\u0432\u043D\u0430 \u0435\u043C\u043A\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u043E\u0440\u0430, \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0431\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0430, \u0435\u0441\u043B\u0438 \u0438\u043D\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u0442\u0443\u0448\u043A\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0430 \u0440\u0430\u0432\u043D\u0430  2\u22C510<sup><small>-2</small></sup> \u0413\u043D?</b><Br>\n  <img src =\"\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer20\" [formControl] = \"searchControl20\" value=\"1\">12,5 \u043C\u0424<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer20\" [formControl] = \"searchControl20\" value=\"2\">0,25 \u043C\u0424<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer20\" [formControl] = \"searchControl20\" value=\"3\">1,25 \u043D\u0424<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer20\" [formControl] = \"searchControl20\" value=\"4\">0,1 \u043C\u043A\u0424<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 9</h2>\n  <p><b>\u041E\u0431\u044A\u0435\u043C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0433\u0430\u0437\u0430 \u043C\u0430\u0441\u0441\u043E\u0439 4,5 \u043A\u0433 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 6,4 \u043C<sup><small>3</small></sup>. \u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u0430 \u043D\u0430 \u0441\u0442\u0435\u043D\u043A\u0438 \u0441\u043E\u0441\u0443\u0434\u0430 \u0440\u0430\u0432\u043D\u043E 150 \u043A\u041F\u0430. \u041A\u0430\u043A\u043E\u0432\u0430 \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043C\u043E\u043B\u0435\u043A\u0443\u043B \u044D\u0442\u043E\u0433\u043E \u0433\u0430\u0437\u0430?</b><Br>\n  <p>\u0410</p><input type=\"radio\" name=\"answer21\" [formControl] = \"searchControl21\" value=\"1\">200 \u043C/<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer21\" [formControl] = \"searchControl21\" value=\"2\">400 \u043C/<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer21\" [formControl] = \"searchControl21\" value=\"3\">600 \u043C/<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer21\" [formControl] = \"searchControl21\" value=\"4\">800 \u043C/<Br>\n  \n  <h2>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 10</h2>\n  <p><b>\u041D\u0430 \u043A\u0430\u043A\u043E\u043C \u0433\u0440\u0430\u0444\u0438\u043A\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u0440\u044F\u0434\u0430 \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u043E\u0440\u0430 \u043E\u0442 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u043A \u0435\u0433\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u043D\u0430\u043C?</b><Br>\n  <img src = \"https://ege.yandex.ru/media/zno-ru/physics/9/10/choice1_1_zno_2015_phys_9_10_1.png\"><img src = \"https://ege.yandex.ru/media/zno-ru/physics/9/10/choice2_1_zno_2015_phys_9_10_2.png\"><img src = \"https://ege.yandex.ru/media/zno-ru/physics/9/10/choice3_1_zno_2015_phys_9_10_3.png\"><img src = \"https://ege.yandex.ru/media/zno-ru/physics/9/10/choice3_1_zno_2015_phys_9_10_3.png\">\n  <p>\u0410</p><input type=\"radio\" name=\"answer22\" [formControl] = \"searchControl22\" value=\"1\">1<Br>\n  <p>\u0411</p><input type=\"radio\" name=\"answer22\" [formControl] = \"searchControl22\" value=\"2\">2<Br>\n  <p>\u0412</p><input type=\"radio\" name=\"answer22\" [formControl] = \"searchControl22\" value=\"3\">3<Br>\n  <p>\u0413</p><input type=\"radio\" name=\"answer22\" [formControl] = \"searchControl22\" value=\"4\">4<Br>\n  \n  <button (click)=\"Func()\" type=\"submit\" class=\"btn btn-default\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=AboutComponent.js.map