/**
 * Created by nikita_glukhi on 10/6/16.
 */
import {
  Routes,
  RouterModule
} from '@angular/router';

import {HomeComponent} from './Components/HomeComponent';
import {AboutComponent} from './Components/AboutComponent';
import {ContactComponent} from './Components/ContactComponent';
import {ModuleWithProviders} from "@angular/core";
import {ResultComponent} from "./Results";
import {Results1Component} from "./Results1";

const routes: Routes = [

  { path: 'contact', redirectTo: ContactComponent },
  { path: 'mathematics', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'results/:res/:unres/:n/:sn', component: ResultComponent},
  { path: 'results1/:res1/:unres1', component: Results1Component},
  { path: '', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
