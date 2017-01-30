/**
 * Created by nikita_glukhi on 1/24/17.
 */
import {FormControl, FormGroup} from '@angular/forms';
import {Component, Output, EventEmitter} from '@angular/core';
import any = jasmine.any;
import {Routes, Router} from '@angular/router';

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
export class MathComponent {

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

@Component ({
  selector: 'physics',
  template: `<form (ngSubmit) = "Func(TaskForm)" #TaskForm="ngForm">
  
  <h1>Задания</h1>
  <h4>Во всех заданиях может быть только ОДИН вариант ответа. Удачи!</h4>
  
  <physics1 (answerEmit) = "ansswer13($event)"></physics1>
  
  <h2>Задание 2</h2>
  <p><b>Какой из приведенных ниже графиков правильно показывает зависимость потенциальной энергии этого тела относительно поверхности Земли от времени?</b><Br>
  <img src="https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a5-q.png">
  <p>А</p><input type="radio" name="answer14" [formControl] = "searchControl14" value="1">1<Br>
  <p>Б</p><input type="radio" name="answer14" [formControl] = "searchControl14" value="2">2<Br>
  <p>В</p><input type="radio" name="answer14" [formControl] = "searchControl14" value="3">3<Br>
  <p>Г</p><input type="radio" name="answer14" [formControl] = "searchControl14" value="4">4<Br>
  
  <h2>Задание 3</h2>
  <p><b>Какую работу совершает газ в замкнутом процессе 1→2→3→4→5→3→1?</b><Br>
  <img src ="https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a8-t.png">
  <p>А</p><input type="radio" name="answer15" [formControl] = "searchControl15" value="1">Положительную<Br>
  <p>Б</p><input type="radio" name="answer15" [formControl] = "searchControl15" value="2">Отрицательную<Br>
  <p>В</p><input type="radio" name="answer15" [formControl] = "searchControl15" value="3">Равную нулю<Br>
  <p>Г</p><input type="radio" name="answer15" [formControl] = "searchControl15" value="4">Однозначно ответить нельзя<Br>
  
  <h2>Задание 4</h2>
  <p><b>Свет доходит от Солнца до Земли за 500 с, а от Солнца до Марса — за 760 с. Чему равно наименьшее расстояние от Земли до Марса при их движении по своим орбитам? Справочные данные: расстояние между Землёй и Солнцем 1,5⋅10<sup><small>11</small></sup> м.</b><Br>
  <p>А</p><input type="radio" name="answer16" [formControl] = "searchControl16" value="1">78  млн. км<Br>
  <p>Б</p><input type="radio" name="answer16" [formControl] = "searchControl16" value="2">150  млн. км<Br>
  <p>В</p><input type="radio" name="answer16" [formControl] = "searchControl16" value="3">228  млн. км<Br>
  <p>Г</p><input type="radio" name="answer16" [formControl] = "searchControl16" value="4">378  млн. км<Br>
  
  <h2>Задание 5</h2>
  <p><b>На каком из приведенных рисунков правильно изображена схема атома азота <sup><small>14</small></sup><sub><small>7</small></sub>N?</b><Br>
  <img src="https://ege.yandex.ru/media/ege/physics/v3/ege-physics-v3-a17-t.png">
  <p>А</p><input type="radio" name="answer17" [formControl] = "searchControl17" value="1">1<Br>
  <p>Б</p><input type="radio" name="answer17" [formControl] = "searchControl17" value="2">2<Br>
  <p>В</p><input type="radio" name="answer17" [formControl] = "searchControl17" value="3">3<Br>
  <p>Г</p><input type="radio" name="answer17" [formControl] = "searchControl17" value="4">4<Br>
  
  <h2>Задание 6</h2>
  <p><b>Неизвестным продуктом X ядерной реакции <sup><small>27</small></sup><sub><small>13</small></sub>Al+<sup><small>1</small></sup><sub><small>0</small></sub>n→<sup><small>24</small></sup><sub><small>11</small></sub>Na+X является</b><Br>
  <p>А</p><input type="radio" name="answer18" [formControl] = "searchControl18" value="1">&#945; - частица<Br>
  <p>Б</p><input type="radio" name="answer18" [formControl] = "searchControl18" value="2">&#946; - частица<Br>
  <p>В</p><input type="radio" name="answer18" [formControl] = "searchControl18" value="3">&#947; - частица<Br>
  <p>Г</p><input type="radio" name="answer18" [formControl] = "searchControl18" value="4">Электрон<Br>
  
  <h2>Задание 7</h2>
  <p><b>В закрытом сосуде находится одноатомный газ неон, имеющий молярную массу 20г/моль. Его температуру увеличивают от 338K до 512K. Считая, что в этом процессе неон можно считать идеальным газом, найдите, как и на сколько в результате изменится среднеквадратичная скорость атомов неона? Справочные данные: универсальная газовая постоянная R=8,31Дж/(моль⋅К).</b><Br>
  <p>А</p><input type="radio" name="answer19" [formControl] = "searchControl19" value="1">Уменьшится на 150 м/c.<Br>
  <p>Б</p><input type="radio" name="answer19" [formControl] = "searchControl19" value="2">Увеличится на 150 м/c.<Br>
  <p>В</p><input type="radio" name="answer19" [formControl] = "searchControl19" value="3">Увеличится на 800 м/с.<Br>
  <p>Г</p><input type="radio" name="answer19" [formControl] = "searchControl19" value="4">Уменьшится на 650 м/с.<Br>
  
  <h2>Задание 8</h2>
  <p><b>Сила тока в цепи идеального колебательного контура изменяется по закону I=0,2sin(2⋅10<sup><small>5</small></sup>⋅t), где сила тока I в амперах, время t в секундах. Чему равна емкость конденсатора, входящего в состав этого колебательного контура, если индуктивность катушки этого контура равна  2⋅10<sup><small>-2</small></sup> Гн?</b><Br>
  <img src ="">
  <p>А</p><input type="radio" name="answer20" [formControl] = "searchControl20" value="1">12,5 мФ<Br>
  <p>Б</p><input type="radio" name="answer20" [formControl] = "searchControl20" value="2">0,25 мФ<Br>
  <p>В</p><input type="radio" name="answer20" [formControl] = "searchControl20" value="3">1,25 нФ<Br>
  <p>Г</p><input type="radio" name="answer20" [formControl] = "searchControl20" value="4">0,1 мкФ<Br>
  
  <h2>Задание 9</h2>
  <p><b>Объем идеального газа массой 4,5 кг составляет 6,4 м<sup><small>3</small></sup>. Давление газа на стенки сосуда равно 150 кПа. Какова средняя квадратичная скорость молекул этого газа?</b><Br>
  <p>А</p><input type="radio" name="answer21" [formControl] = "searchControl21" value="1">200 м/<Br>
  <p>Б</p><input type="radio" name="answer21" [formControl] = "searchControl21" value="2">400 м/<Br>
  <p>В</p><input type="radio" name="answer21" [formControl] = "searchControl21" value="3">600 м/<Br>
  <p>Г</p><input type="radio" name="answer21" [formControl] = "searchControl21" value="4">800 м/<Br>
  
  <h2>Задание 10</h2>
  <p><b>На каком графике отображена зависимость заряда конденсатора от напряжения, приложенного к его пластинам?</b><Br>
  <img src = "https://ege.yandex.ru/media/zno-ru/physics/9/10/choice1_1_zno_2015_phys_9_10_1.png"><img src = "https://ege.yandex.ru/media/zno-ru/physics/9/10/choice2_1_zno_2015_phys_9_10_2.png"><img src = "https://ege.yandex.ru/media/zno-ru/physics/9/10/choice3_1_zno_2015_phys_9_10_3.png"><img src = "https://ege.yandex.ru/media/zno-ru/physics/9/10/choice3_1_zno_2015_phys_9_10_3.png">
  <p>А</p><input type="radio" name="answer22" [formControl] = "searchControl22" value="1">1<Br>
  <p>Б</p><input type="radio" name="answer22" [formControl] = "searchControl22" value="2">2<Br>
  <p>В</p><input type="radio" name="answer22" [formControl] = "searchControl22" value="3">3<Br>
  <p>Г</p><input type="radio" name="answer22" [formControl] = "searchControl22" value="4">4<Br>
  
  <button (click)="Func()" type="submit" class="btn btn-default">Проверить</button>
</form>`
})
export class PhysicsComponent {

  res1 = 0;
  unres1 = 0;

  public result13: number = 2;
  public ansswer13(value: number) {
    if (value == 2) {
      console.log("Правильно");
      this.res1 += 1;
    }
    else {
      console.log("Неправильно");
      this.unres1 += 1;
    }
  }
    public Func() {
    if (this.answer14 == 2) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer15 == 3) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer16 == 1) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer17 == 4) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer18 == 1) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer19 == 2) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer20 == 4) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer21 == 4) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    if (this.answer22 == 1) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

    this.router.navigate(['/results1', this.res1, this.unres1]);

    console.log( );
    return false
  }

  constructor (private router: Router) {  }

  public result14: number = 2;
  public answer14: number ;

  public result15: number = 3;
  public answer15: number ;

  public result16: number = 1;
  public answer16: number ;

  public result17: number = 4;
  public answer17: number ;

  public result18: number = 1;
  public answer18: number ;

  public result19: number = 2;
  public answer19: number ;

  public result20: number = 4;
  public answer20: number ;

  public result21: number = 4;
  public answer21: number ;

  public result22: number = 1;
  public answer22: number ;

  registerForm: FormGroup;

  searchControl14 = new FormControl();

  searchControl15 = new FormControl();

  searchControl16 = new FormControl();

  searchControl17 = new FormControl();

  searchControl18 = new FormControl();

  searchControl19 = new FormControl();

  searchControl20 = new FormControl();

  searchControl21 = new FormControl();

  searchControl22 = new FormControl();

  ngOnInit() {

    this.searchControl14.valueChanges.subscribe(value => {
      console.log(value);
      this.answer14 = value;
    });

    this.searchControl15.valueChanges.subscribe(value => {
      console.log(value);
      this.answer15 = value;
    });

    this.searchControl16.valueChanges.subscribe(value => {
      console.log(value);
      this.answer16 = value;
    });

    this.searchControl17.valueChanges.subscribe(value => {
      console.log(value);
      this.answer17 = value;
    });

    this.searchControl18.valueChanges.subscribe(value => {
      console.log(value);
      this.answer18 = value;
    });

    this.searchControl19.valueChanges.subscribe(value => {
      console.log(value);
      this.answer19 = value;
    });

    this.searchControl20.valueChanges.subscribe(value => {
      console.log(value);
      this.answer20 = value;
    });

    this.searchControl21.valueChanges.subscribe(value => {
      console.log(value);
      this.answer21 = value;
    });

    this.searchControl22.valueChanges.subscribe(value => {
      console.log(value);
      this.answer22 = value;
    });


  }
}

@Component ({
  selector: 'physics1',
  template: `<form (ngSubmit) = "Func1(TaskForm)" #TaskForm="ngForm">
   <h2>Задание 1</h2>
  <p><b>Из открытого люка автомобиля, который движется прямолинейно и равномерно со скоростью 25 м/с в направлении, противоположном движению, горизонтально бросают мячик со скоростью 5 м/с относительно автомобиля. Какова скорость этого мячика относительно Земли?</b><Br>
  <p>А</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="1">5 м/с<Br>
  <p>Б</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="2">20 м/с<Br>
  <p>В</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="3">25 м/с<Br>
  <p>Г</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="4">30 м/с<Br>
</form>`
})
  export class PhysicsComponent1 {

  @Output() answerEmit = new EventEmitter<number>();

  registerForm: FormGroup;

  constructor (private router: Router) {  }

  searchControl13 = new FormControl();

  ngOnInit() {
    this.searchControl13.valueChanges.subscribe(value => {
      this.answerEmit.emit(value);
    });
  }
}


