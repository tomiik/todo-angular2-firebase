import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBFVVo3z0XPIeIMjrTRthhfRQz3oLoVyis",
  authDomain: "todo-angular2-firebase-95015.firebaseapp.com",
  databaseURL: "https://todo-angular2-firebase-95015.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "648017168295"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
