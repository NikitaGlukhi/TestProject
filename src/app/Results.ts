/**
 * Created by nikita_glukhi on 10/11/16.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component ({
  selector: 'results',
  template:`<h2>Результаты</h2>
    <h2>Имя:</h2><h2>{{ n }}</h2>
    <h2>Фамилия:</h2><h2>{{ sn }}</h2>
    <h2>Правильные:</h2><h1><font color = "lime">{{ res }}</font></h1>
    <h2>Неправильные:</h2><h1><font color = "red">{{ unres }}</font></h1>
`
})

export class ResultComponent {
  private res: number;
  private unres: number;
  private n: string;
  private sn: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.res = +params['res'];
      this.unres = +params['unres'];
      this.n = params['n'];
      this.sn = params['sn'];
    });

    console.log(this.res, this.unres, this.n, this.sn);
  }
}
