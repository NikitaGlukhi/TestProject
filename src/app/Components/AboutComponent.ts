/**
 * Created by nikita_glukhi on 10/4/16.
 */
import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import any = jasmine.any;
import {Routes, Router} from '@angular/router';

@Component({
  selector: 'about',
  template: `<form (ngSubmit) = "Func(TaskForm)" #TaskForm="ngForm">
  
  <h1>Задания</h1>
  <h4>Во всех заданиях может быть только ОДИН вариант ответа. Удачи!</h4>

  <h2>Задание 1</h2>
  <p><b>Из открытого люка автомобиля, который движется прямолинейно и равномерно со скоростью 25 м/с в направлении, противоположном движению, горизонтально бросают мячик со скоростью 5 м/с относительно автомобиля. Какова скорость этого мячика относительно Земли?</b><Br>
  <p>А</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="1">5 м/с<Br> 
  <p>Б</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="2">20 м/с<Br>
  <p>В</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="3">25 м/с<Br>
  <p>Г</p><input type="radio" name="answer13" [formControl] = "searchControl13" value="4">30 м/с<Br>
  
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
export class AboutComponent {

  res1 = 0;
  unres1 = 0;

  public Func() {



    if (this.answer13 == 2) {
      console.log("Правильно");
      this.res1 +=1;
    }
    else {
      console.log("Неправильно");
      this.unres1 +=1;
    }

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

  public result13: number = 2;
  public answer13: number ;

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

  searchControl13 = new FormControl();

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
    this.searchControl13.valueChanges.subscribe(value => {
      console.log(value);
      this.answer13 = value;
    });

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
