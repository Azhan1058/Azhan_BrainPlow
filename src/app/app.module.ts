import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'; // <-- NgModel lives here

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent

  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
