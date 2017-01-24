/**
 * Created by nikita_glukhi on 10/10/16.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'task1',
  template: `<h2>Задание 1</h2>
  <p><b>Решить уравнение: <i>5x <sup><small>3</small></sup> - 8x <sup><small>2</small></sup> - 8x + 5 = 0 </i></b><Br>
  <p>А</p><input type="radio" name="answer1" value="">x = 0<Br>
  <p>Б</p><input type="radio" name="answer1" value="">x = &#8731;<span>3</span> &#8260; &#8732;<span>2</span><Br>
  <p>В</p><input type="radio" name="answer1" value="">x = 13 &#8260; 10 + &#8730;<span>69</span> &#8260; 10; x = 13 &#8260; 10 - &#8730;<span>69</span> &#8260; 10; x = -1 <Br>
  <p>Г</p><input type="radio" name="answer1" value="">x = 13 &#8260; &#8730;10 + &#8731;69 &#8260; 10; x = 1;<Br>`
})

export class Task1Component { }
