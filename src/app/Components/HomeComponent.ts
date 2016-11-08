/**
 * Created by nikita_glukhi on 10/4/16.
 */
import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import any = jasmine.any;
import {Routes, Router} from "@angular/router";

@Component({
  selector: 'mathematics',
  template: `<form (ngSubmit)="Func(TaskForm)" #TaskForm="ngForm">
  <h2>Ваше имя:</h2><input type="text" name="firstName" [formControl] = "searchControl11">
  <h2>Ваша фамилия:</h2><input type="text" name="surname" [formControl] = "searchControl12">
  
  <h1>Задания</h1>
  <h4>Во всех заданиях может быть только ОДИН вариант ответа. Удачи!</h4>

  <h2>Задание 1</h2>
  <p><b>Решить уравнение: <i>5x <sup><small>3</small></sup> - 8x <sup><small>2</small></sup> - 8x + 5 = 0 </i></b><Br>
  <p>А</p><input type="radio" name="answer1" [formControl] = "searchControl1" value="1" >x = 0<Br>
  <p>Б</p><input type="radio" name="answer1" [formControl] = "searchControl1" value="2" >x = &#8731;<span>3</span> &#8260; &#8732;<span>2</span><Br>
  <p>В</p><input type="radio" name="answer1" [formControl] = "searchControl1" value="3" >x = 13 &#8260; 10 + &#8730;<span>69</span> &#8260; 10; x = 13 &#8260; 10 - &#8730;<span>69</span> &#8260; 10; x = -1 <Br>
  <p>Г</p><input type="radio" name="answer1" [formControl] = "searchControl1" value="4" >x = 13 &#8260; &#8730;10 + &#8731;69 &#8260; 10; x = 1;<Br>

  <h2>Задание 2</h2>
  <p>На какой картинке изобраажен график функции y = Ax<sup><small>2</small></sup> + Bx + C</p>
  <p>КОЭФФИЦИЕНТЫ:</p>
  <p>A > 0; C > 0</p>
  А<input type="radio" name="answer2" [formControl] = "searchControl2" value="1"><img src = "http://otvet-gotov.ru/pages/images/0264AF-2.png"><Br>
  Б<input type="radio" name="answer2" [formControl] = "searchControl2" value="2"><img src = "http://otvet-gotov.ru/pages/images/0264AF.png"><Br>
  В<input type="radio" name="answer2" [formControl] = "searchControl2" value="3"><img src = "http://otvet-gotov.ru/pages/images/0264AF-1.png"><Br>
  Г<input type="radio" name="answer2" [formControl] = "searchControl2" value="4"><img src = "http://otvet-gotov.ru/pages/images/0FB73A-2.png"><Br>

  <h2>Задание 3</h2>
  <p>Решите задачу.</p>
  <p>В треугольной усеченной пирамиде с высотой, равной 10, стороны одного из оснований равны 27, 29 и 52. Определите объем усеченной пирамиды, если периметр другого основания равен 72.</p>
  <img src = "http://testmath.ru/wp-content/uploads/stereometria/10/image002.jpg">
  <p>А</p><input type="radio" name="answer3" [formControl] = "searchControl3" value="1">1700<Br>
  <p>Б</p><input type="radio" name="answer3" [formControl] = "searchControl3" value="2">1450<Br>
  <p>В</p><input type="radio" name="answer3" [formControl] = "searchControl3" value="3">1940<Br>
  <p>Г</p><input type="radio" name="answer3" [formControl] = "searchControl3" value="4">1900<Br>
  
  <h2>Задание 4</h2>
  <p><b>Решить неравенство <i>x<sup><small>2</small></sup> - 15x + 50 > 0</i> </b><Br>
  <p>А</p><input type = "radio" name = "answer4" [formControl] = "searchControl4" value="1">x &#8712; (-&#8734; ; -4) &#8746; (5; &#8734;)<Br>
  <p>Б</p><input type = "radio" name = "answer4" [formControl] = "searchControl4" value="2">x &#8712; (-&#8734; ; -4] &#8746; [5; &#8734;)<Br>
  <p>В</p><input type = "radio" name = "answer4" [formControl] = "searchControl4" value="3">x &#8712;  &#8709;<Br>
  <p>Г</p><input type = "radio" name = "answer4" [formControl] = "searchControl4" value="4">x &#8712; (-&#8734; ; &#8734;)<Br>

  <h2>Задание 5</h2>
  <p><b>Найдите значение выражения: log<sub><small>5</small></sub>0,2 + log<sub><small>0,5</small></sub>4</b><Br>
  <p>А</p><input type="radio" name="answer5" [formControl] = "searchControl5" value="1">3<Br>
  <p>Б</p><input type="radio" name="answer5" [formControl] = "searchControl5" value="2">-3<Br>
  <p>В</p><input type="radio" name="answer5" [formControl] = "searchControl5" value="3">1<Br>
  <p>Г</p><input type="radio" name="answer5" [formControl] = "searchControl5" value="4">2<Br>
  
  <h2>Задание 6</h2>
  <p><b>На рисунке изображен график некоторой функции y = &#402;(x). Пользуясь им, вычислите интеграл <sub><small>1</small></sub><sup><small>5</small></sup>&#8747; = &#402;(x) dx.</b><Br>
  <img src = "https://ege.sdamgia.ru/get_file?id=6706"><Br>
  <p>А</p><input type="radio" name="answer6" [formControl] = "searchControl6" value="1">11<Br>
  <p>Б</p><input type="radio" name="answer6" [formControl] = "searchControl6" value="2">12<Br>
  <p>В</p><input type="radio" name="answer6" [formControl] = "searchControl6" value="3">13<Br>
  <p>Г</p><input type="radio" name="answer6" [formControl] = "searchControl6" value="4">14<Br>
  
  <h2>Задание 7</h2>
  <p><b>Решить уравнение (-&#8730;2)sin(-5&#960; &#8260; 2 + x) * sinx = cosx и найти все его заначения на промежутке &#91; 9&#960; &#8260; 2 , 6&#960; &#93;.</b><Br>
  <p>А</p><input type="radio" name="answer7" [formControl] = "searchControl7" value="1">&#123; -(&#960; &#8260; 3) + 2&#960;k; -(&#960; &#8260; 2) + 2&#960;k; : k &#8712; Z &#125;<Br>
  <p>Б</p><input type="radio" name="answer7" [formControl] = "searchControl7" value="2">&#123; &#960; &#8260; 6 + 2&#960;k; 5&#960; &#8260; 6 + 2&#960;k; : k &#8712; Z &#125;<Br>
  <p>В</p><input type="radio" name="answer7" [formControl] = "searchControl7" value="3">&#123; &#960; &#8260; 2 + &#960;k; -(&#960; &#8260; 4) + 2&#960;k; 3&#960; -(3&#8260; 4) + 2&#960;k : k &#8712; Z &#125;<Br>
  <p>Г</p><input type="radio" name="answer7" [formControl] = "searchControl7" value="4">&#123; &#960; &#8260; 2 + &#960;k; &#960; &#8260; 4 + 2&#960;k; 3&#960; &#8260; 4 + 2&#960;k : k &#8712; Z &#125;<Br>
  
  <h2>Задание 8</h2>
  <p><b>Решить уравнение 7<sup><small>18,5x + 0,7</small></sup> = 1 &#8260; 343.</b><Br>
  <p>А</p><input type="radio" name="answer8" [formControl] = "searchControl8" value="1">-0,22<Br>
  <p>Б</p><input type="radio" name="answer8" [formControl] = "searchControl8" value="2">-0,2<Br>
  <p>В</p><input type="radio" name="answer8" [formControl] = "searchControl8" value="3">0,2<Br>
  <p>Г</p><input type="radio" name="answer8" [formControl] = "searchControl8" value="4">1<Br>
  
  <h2>Задание 9</h2>
  <p><b>В треугольнике АВС &#8736;С = 90&#176;, AB = 5, sin&#8736;A = 7 &#8260; 25. Найдите АС.</b><Br>
  <img src ="https://ege.sdamgia.ru/get_file?id=20487">
  <p>А</p><input type="radio" name="answer9" [formControl] = "searchControl9" value="1">4<Br>
  <p>Б</p><input type="radio" name="answer9" [formControl] = "searchControl9" value="2">4,6<Br>
  <p>В</p><input type="radio" name="answer9" [formControl] = "searchControl9" value="3">4,8<Br>
  <p>Г</p><input type="radio" name="answer9" [formControl] = "searchControl9" value="4">5<Br>
  
  <h2>Задание 10</h2>
  <p><b>Прик аких значениях параметра а, уравнение x<sup><small>2</small></sup> + (1 - a<sup><small>2</small></sup>) = &#124;x - 1 + a&#124; + &#124;x - a + 1&#124; имеет единственный корень?</b><Br>
  <p>А</p><input type="radio" name="answer10" [formControl] = "searchControl10" value="1">При а = -2 и а = 3<Br>
  <p>Б</p><input type="radio" name="answer10" [formControl] = "searchControl10" value="2">При а = -1 и а = -3<Br>
  <p>В</p><input type="radio" name="answer10" [formControl] = "searchControl10" value="3">При а = 1 и а = -3<Br>
  <p>Г</p><input type="radio" name="answer10" [formControl] = "searchControl10" value="4">При а = -1 и а = 3<Br>
  
  <button (click)="Func()" type="submit" class="btn btn-default">Проверить</button>
  </form>
`

})
export class HomeComponent {

  res = 0;
  unres = 0;
  n: string;
  sn: string ;

  public Func( ) {

    if (this.answer1 == 3) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }


    if (this.answer2 == 2) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer3 == 4) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }


    if (this.answer4 == 1) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer5 == 2) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer6 == 2) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
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

    console.log( );
    return false
}


constructor (private router: Router) {

}


  public result1: number = 3;
  public answer1: number ;

  public result2: number = 2;
  public answer2: number ;

  public result3: number = 4;
  public answer3: number ;

  public result4: number = 1;
  public answer4: number ;

  public result5: number = 2;
  public answer5: number ;

  public result6: number = 2;
  public answer6: number ;

  public result7: number = 4;
  public answer7: number ;

  public result8: number = 2;
  public answer8: number ;

  public result9: number = 3;
  public answer9: number ;

  public result10: number = 4;
  public answer10: number ;

  public firstName: string;

  public surname: string;

  registerForm: FormGroup;

  searchControl0 = new FormControl();

  searchControl = new FormControl();

  searchControl1 = new FormControl();

  searchControl2 = new FormControl();

  searchControl3 = new FormControl();

  searchControl4 = new FormControl();

  searchControl5 = new FormControl();

  searchControl6 = new FormControl();

  searchControl7 = new FormControl();

  searchControl8 = new FormControl();

  searchControl9 = new FormControl();

  searchControl10 = new FormControl();

  searchControl11 = new FormControl();

  searchControl12 = new FormControl();

  ngOnInit() {

    this.searchControl.valueChanges.subscribe(value => {
      console.log(value);
    });


    this.searchControl1.valueChanges.subscribe(value => {
      console.log(value);
      this.answer1 = value;
    });

    this.searchControl2.valueChanges.subscribe(value => {
      console.log(value);
      this.answer2 = value;
    });

    this.searchControl3.valueChanges.subscribe(value => {
      console.log(value);
      this.answer3 = value;
    });

    this.searchControl4.valueChanges.subscribe(value => {
      console.log(value);
      this.answer4 = value;
    });

    this.searchControl5.valueChanges.subscribe(value => {
      console.log(value);
      this.answer5 = value;
    });

    this.searchControl6.valueChanges.subscribe(value => {
      console.log(value);
      this.answer6 = value;
    });

    this.searchControl7.valueChanges.subscribe(value => {
      console.log(value);
      this.answer7 = value;
    });

    this.searchControl8.valueChanges.subscribe(value => {
      console.log(value);
      this.answer8 = value;
    });

    this.searchControl9.valueChanges.subscribe(value => {
      console.log(value);
      this.answer9 = value;
    });

    this.searchControl10.valueChanges.subscribe(value => {
      console.log(value);
      this.answer10 = value;
    });

    this.searchControl11.valueChanges.subscribe(text => {
      console.log(text);
      this.n = text;
    });

    this.searchControl12.valueChanges.subscribe(text => {
      console.log(text);
      this.sn = text;
    });
  }
}
