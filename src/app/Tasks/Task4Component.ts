/**
 * Created by nikita_glukhi on 10/10/16.
 */
import {Component} from '@angular/core';

@Component ({
  selector: 'task4',
  template:`<h2>Задание 4</h2>
<p><b>Решить неравенство <i>x<sup><small>2</small></sup> - 15x + 50 > 0</i> </b><Br>
<p>А</p><input type = "radio" name = "answer4" value="">x &#8712; (-&#8734; ; -4) &#8746; (5; &#8734;)<Br>
<p>Б</p><input type = "radio" name = "answer4" value="">x &#8712; (-&#8734; ; -4] &#8746; [5; &#8734;)<Br>
<p>В</p><input type = "radio" name = "answer4" value="">x &#8712;  &#8709;<Br>
<p>Г</p><input type = "radio" name = "answer4" value="">x &#8712; (-&#8734; ; &#8734;)<Br>
`
})

export class Task4Component {  }
