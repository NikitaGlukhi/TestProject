/**
 * Created by nikita_glukhi on 10/10/16.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'task2',
  template: `<h2>Задание 2</h2>
  <p>На какой картинке изобраажен график функции y = Ax<sup><small>2</small></sup> + Bx + C</p>
  <p>КОЭФФИЦИЕНТЫ:</p>
  <p>A > 0; C > 0</p>
  А<input type="radio" name="answer2" value=""><img src = "http://otvet-gotov.ru/pages/images/0264AF-2.png"><Br>
  Б<input type="radio" name="answer2" value=""><img src = "http://otvet-gotov.ru/pages/images/0264AF.png"><Br>
  В<input type="radio" name="answer2" value=""><img src = "http://otvet-gotov.ru/pages/images/0264AF-1.png"><Br>
  Г<input type="radio" name="answer2" value=""><img src = "http://otvet-gotov.ru/pages/images/0FB73A-2.png"><Br>
`
})

export class Task2Component { }
