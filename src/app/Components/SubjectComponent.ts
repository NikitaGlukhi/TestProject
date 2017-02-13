/**
 * Created by nikita_glukhi on 1/24/17.
 */
import {FormControl, FormGroup} from '@angular/forms';
import {Component, Output, EventEmitter} from '@angular/core';
import any = jasmine.any;
import {Mathematics} from './MathQuestions';
import {Routes, Router} from '@angular/router';
import {Observable} from "rxjs";
import {MaAnswers} from "./MathAnswers";
import {PAnswers} from './PhysicsAnswers';
import {PysicsQuestions} from './PhysicsQuestiont';

@Component({
  selector: 'mathematics',
  template: `<form (ngSubmit)="Func(TaskForm)" #TaskForm="ngForm">
  <h1>Задания</h1>
  <h4>Во всех заданиях может быть только ОДИН вариант ответа. Удачи!</h4>
  
  <div *ngFor = "let element of MathQues | async">
      <h2>{{element.name}}</h2>
      <p><b>{{element.text}}</b></p><Br>
      <img src = "{{element.image1}}">
      <img src = "{{element.image2}}">
      <img src = "{{element.image3}}">
      <img src = "{{element.image4}}">
      <img src = "{{element.image5}}">
      <img src = "{{element.image6}}">
      <div *ngFor = "let answer of element.answers">
      <p>{{answer.letter1}} <input *ngIf = "answer.letter1" type="radio" name="answer{{element.number1}}" [formControl] = "searchControl1" value="{{answer.value1}}">{{answer.print1}}</p>
      <p>{{answer.letter2}} <input *ngIf = "answer.letter2" type="radio" name="answer{{element.number2}}" [formControl] = "searchControl2" value="{{answer.value2}}">{{answer.print2}}</p>
      <p>{{answer.letter3}} <input *ngIf = "answer.letter3" type="radio" name="answer{{element.number3}}" [formControl] = "searchControl3" value="{{answer.value3}}">{{answer.print3}}</p>
      <p>{{answer.letter4}} <input *ngIf = "answer.letter4" type="radio" name="answer{{element.number4}}" [formControl] = "searchControl4" value="{{answer.value4}}">{{answer.print4}}</p>
      <p>{{answer.letter5}} <input *ngIf = "answer.letter5" type="radio" name="answer{{element.number5}}" [formControl] = "searchControl5" value="{{answer.value5}}">{{answer.print5}}</p>
      <p>{{answer.letter6}} <input *ngIf = "answer.letter6" type="radio" name="answer{{element.number6}}" [formControl] = "searchControl6" value="{{answer.value6}}">{{answer.print6}}</p>
      <p>{{answer.letter7}} <input *ngIf = "answer.letter7" type="radio" name="answer{{element.number7}}" [formControl] = "searchControl7" value="{{answer.value7}}">{{answer.print7}}</p>
      <p>{{answer.letter8}} <input *ngIf = "answer.letter8" type="radio" name="answer{{element.number8}}" [formControl] = "searchControl8" value="{{answer.value8}}">{{answer.print8}}</p>
      <p>{{answer.letter9}} <input *ngIf = "answer.letter9" type="radio" name="answer{{element.number9}}" [formControl] = "searchControl9" value="{{answer.value9}}">{{answer.print9}}</p>
      <p>{{answer.letter10}} <input *ngIf = "answer.letter10" type="radio" name="answer{{element.number10}}" [formControl] = "searchControl10" value="{{answer.value10}}">{{answer.print10}}</p>
      </div>
      
  </div>

  <button (click)="Func()" type="submit" class="btn btn-default">Проверить</button>
  </form>
`

})
export class MathComponent {

  res = 0;
  unres = 0;

  public Func( ) {

    MaAnswers.Answer1;
    MaAnswers.Answer2;
    MaAnswers.Answer3;
    MaAnswers.Answer4;
    MaAnswers.Answer5;
    MaAnswers.Answer6;
    MaAnswers.Answer7;
    MaAnswers.Answer8;
    MaAnswers.Answer9;
    MaAnswers.Answer10;

    if (this.answer1 == MaAnswers.Answer1) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }


    if (this.answer2 == MaAnswers.Answer2) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer3 == MaAnswers.Answer3) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }


    if (this.answer4 == MaAnswers.Answer4) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer5 == MaAnswers.Answer5) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer6 == MaAnswers.Answer6) {
      console.log("Правильно");
      this.res +=1;
    }
    else {
      console.log("Неправильно");
      this.unres +=1;
    }

    if (this.answer7 == MaAnswers.Answer7) {
      console.log("Правильно");
      this.res += 1;
    }
    else {
      console.log("Неправильно");
      this.unres += 1;
    }

    if (this.answer8 == MaAnswers.Answer8) {
      console.log("Правильно");
      this.res += 1;
    }
    else {
      console.log("Неправильно");
      this.unres += 1;
    }

    if (this.answer9 == MaAnswers.Answer9) {
      console.log("Правильно");
      this.res += 1;
    }
    else {
      console.log("Неправильно");
      this.unres += 1;
    }

    if (this.answer10 == MaAnswers.Answer10) {
      console.log("Правильно");
      this.res += 1;
    }
    else {
      console.log("Неправильно");
      this.unres += 1;
    }

    this.router.navigate(['/results', this.res, this.unres]);

    console.log( );
    return false
  }

  MathQues: Observable<any>;

  constructor (private router: Router) {
    this.MathQues = Observable.of(Mathematics);
  }

  public answer1: number ;
  public answer2: number ;
  public answer3: number ;
  public answer4: number ;
  public answer5: number ;
  public answer6: number ;
  public answer7: number ;
  public answer8: number ;
  public answer9: number ;
  public answer10: number ;

  registerForm: FormGroup;

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

  ngOnInit() {

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

  }
}

@Component ({
  selector: 'physics',
  template: `
  <h1>Задания</h1>
  <h4>Во всех заданиях может быть только ОДИН вариант ответа. Удачи!</h4>
  <div *ngFor = "let element of PhyscQues | async">
     <h2>{{element.name}}</h2>
     <p><b>{{element.text}}</b></p><Br>
     <img src = "{{element.image7}}">
     <img src = "{{element.image8}}">
     <img src = "{{element.image9}}">
     <img src = "{{element.image10}}">
     <img src = "{{element.image11}}">
     <img src = "{{element.image12}}">
     <div *ngFor = "let answer of element.answers">  
     <p>{{answer.letter11}}<input *ngIf = "answer.letter11" type="radio" name="answer{{element.number11}}" [formControl] = "searchControl11" value="{{answer.value11}}">{{answer.print11}}</p>
     <p>{{answer.letter12}}<input *ngIf = "answer.letter12" type="radio" name="answer{{element.number12}}" [formControl] = "searchControl12" value="{{answer.value12}}">{{answer.print12}}</p>
     <p>{{answer.letter13}}<input *ngIf = "answer.letter13" type="radio" name="answer{{element.number13}}" [formControl] = "searchControl13" value="{{answer.value13}}">{{answer.print13}}</p>
     <p>{{answer.letter14}}<input *ngIf = "answer.letter14" type="radio" name="answer{{element.number14}}" [formControl] = "searchControl14" value="{{answer.value14}}">{{answer.print14}}</p>
     <p>{{answer.letter15}}<input *ngIf = "answer.letter15" type="radio" name="answer{{element.number15}}" [formControl] = "searchControl15" value="{{answer.value15}}">{{answer.print15}}</p>
     <p>{{answer.letter16}}<input *ngIf = "answer.letter16" type="radio" name="answer{{element.number16}}" [formControl] = "searchControl16" value="{{answer.value16}}">{{answer.print16}}</p>
     <p>{{answer.letter17}}<input *ngIf = "answer.letter17" type="radio" name="answer{{element.number17}}" [formControl] = "searchControl17" value="{{answer.value17}}">{{answer.print17}}</p>
     <p>{{answer.letter18}}<input *ngIf = "answer.letter18" type="radio" name="answer{{element.number18}}" [formControl] = "searchControl18" value="{{answer.value18}}">{{answer.print18}}</p>
     <p>{{answer.letter19}}<input *ngIf = "answer.letter19" type="radio" name="answer{{element.number19}}" [formControl] = "searchControl19" value="{{answer.value19}}">{{answer.print19}}</p>
     <p>{{answer.letter20}}<input *ngIf = "answer.letter20" type="radio" name="answer{{element.number20}}" [formControl] = "searchControl20" value="{{answer.value20}}">{{answer.print20}}</p>
     </div>
    </div> 
  <button (click)="Func()" type="submit" class="btn btn-default">Проверить</button>
`
})
export class PhysicsComponent {
  res1 = 0;
  unres1 = 0;
    public Func() {
      PAnswers.Answer11;
      PAnswers.Answer12;
      PAnswers.Answer13;
      PAnswers.Answer14;
      PAnswers.Answer15;
      PAnswers.Answer16;
      PAnswers.Answer17;
      PAnswers.Answer18;
      PAnswers.Answer19;
      PAnswers.Answer20;
      if (this.answer11 == PAnswers.Answer11) {
        console.log("Правильно");
        this.res1 += 1;
      }
      else {
        console.log("Неправильно");
        this.unres1 += 1;
      }

      if (this.answer12 == PAnswers.Answer12) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer13 == PAnswers.Answer13) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer14 == PAnswers.Answer14) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer15 == PAnswers.Answer15) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer16 == PAnswers.Answer16) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer17 == PAnswers.Answer17) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer18 == PAnswers.Answer18) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer19 == PAnswers.Answer19) {
        console.log("Правильно");
        this.res1 +=1;
      }
      else {
        console.log("Неправильно");
        this.unres1 +=1;
      }

      if (this.answer20 == PAnswers.Answer20) {
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
  PhyscQues: Observable<any>;
  constructor (private router: Router) {
    this.PhyscQues = Observable.of(PysicsQuestions);
  }
  public answer11: number;
  public answer12: number ;
  public answer13: number ;
  public answer14: number ;
  public answer15: number ;
  public answer16: number ;
  public answer17: number ;
  public answer18: number ;
  public answer19: number ;
  public answer20: number ;

  registerForm: FormGroup;
  searchControl11 = new FormControl();
  searchControl12 = new FormControl();
  searchControl13 = new FormControl();
  searchControl14 = new FormControl();
  searchControl15 = new FormControl();
  searchControl16 = new FormControl();
  searchControl17 = new FormControl();
  searchControl18 = new FormControl();
  searchControl19 = new FormControl();
  searchControl20 = new FormControl();

  ngOnInit() {
    this.searchControl11.valueChanges.subscribe(value => {
      console.log(value);
      this.answer11 = value;
    });
    this.searchControl12.valueChanges.subscribe(value => {
      console.log(value);
      this.answer12 = value;
    });
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
  }
}
