/**
 * Created by nikita_glukhi on 10/4/16.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'contact',
  template: `<h1>Добро пожаловать!</h1>
             <h3><p>Данный сайт предлагает Вам проверить свои знания в таких направлениях как математика, физика, английский язык, украинский язык.</p> 
             <p>P.s. Английский язык и украинский язык буду добавлены позже. Приношу изинения за временные неудобства :)</p></h3>
             <h2>Курсы: </h2>
             <style> a { padding: 2px; text-decoration: none; }
                     a :hover { color: #000cff; }
             </style>
            
             <a routerLink="/mathematics"><h2>Математика</h2></a> 
             <a routerLink="/about"><h2>Физика</h2></a>
`
})
export class ContactComponent { }


