import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { rf1Component } from './rf1/rf1.component';
import { rf2Component } from './rf2/rf2.component';
import { rf3Component } from './rf3/rf3.component';
import { ra1Component } from './ra1/ra1.component';
import { ra2Component } from './ra2/ra2.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'rf1', component: rf1Component},
      {path: 'rf2', component: rf2Component},
      {path: 'rf3', component: rf3Component},
      {path: 'ra1', component: ra1Component},
      {path: 'ra2', component: ra2Component},

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    rf1Component,
    rf2Component,
    rf3Component,
    ra1Component,
    ra2Component,
    MainPageComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }