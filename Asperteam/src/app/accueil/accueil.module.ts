import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil.component';
import { SituationComponent } from 'app/situation/situation.component';


@NgModule({
  declarations: [
    AccueilComponent,
    SituationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: 'situation', component: SituationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AccueilComponent]
})
export class AccueilModule { }
