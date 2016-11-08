/**
 * Created by nikita_glukhi on 10/25/16.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
   selector: 'results',
   template: `<h2>Результаты</h2>
       <h2>Правильные:</h2><h1><font color = "lime">{{ res1 }}</font></h1>
       <h2>Неправильные:</h2><h1><font color = "red">{{ unres1 }}</font></h1>
`
})

export class Results1Component {

  private res1: number;
  private unres1: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.res1 = +params['res1'];
      this.unres1 = +params['unres1'];
    });

    console.log(this.res1, this.unres1);
  }
}
