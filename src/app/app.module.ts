import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routing} from "./Routes";
import {MathComponent, PhysicsComponent} from "./Components/SubjectsComponent";
import {ContactComponent} from "./Components/ContactComponent";
import {FormsModule}   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ResultComponent} from "./Results";
import {Results1Component} from "./Results1";
import { HttpModule } from '@angular/http';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    ],



  declarations: [ AppComponent, MathComponent, PhysicsComponent, ContactComponent, ResultComponent, Results1Component, MyNewComponentComponent],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
