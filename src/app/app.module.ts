import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routing} from "./Routes";
import {ContactComponent} from "./Components/ContactComponent";
import {FormsModule}   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ResultComponent} from "./Results";
import {Results1Component} from "./Results1";
import { HttpModule } from '@angular/http';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { LocationStrategy, HashLocationStrategy} from "@angular/common";
import {MathComponent, PhysicsComponent} from "./Components/SubjectComponent";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    ],

  declarations: [ AppComponent, MathComponent, PhysicsComponent, ContactComponent, ResultComponent, Results1Component, MyNewComponentComponent, MyNewComponentComponent],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
