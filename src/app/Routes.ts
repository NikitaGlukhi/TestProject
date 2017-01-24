/**
 * Created by nikita_glukhi on 10/6/16.
 */
import {
  Routes,
  RouterModule
} from '@angular/router';

import {ContactComponent} from './Components/ContactComponent';
import {ModuleWithProviders} from "@angular/core";
import {ResultComponent} from "./Results";
import {Results1Component} from "./Results1";
import {PhysicsComponent, MathComponent} from "./Components/SubjectComponent";

const routes: Routes = [
  {
  { path: 'contact', component: ContactComponent },
  { path: 'mathematics', component: MathComponent },
  { path: 'physics', component: PhysicsComponent },
  { path: 'results/:res/:unres/:n/:sn', component: ResultComponent},
  { path: 'results1/:res1/:unres1', component: Results1Component},
  { path: '', component: ContactComponent, data:{'home': true} }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
