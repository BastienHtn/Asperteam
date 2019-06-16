import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SituationComponent } from './situation/situation.component';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    SituationComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'accueil', component: AccueilComponent, children: [

          { path: 'situation', component: SituationComponent },
          { path: 'theme', component: ThemeComponent },
        ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
