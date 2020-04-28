import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular2-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CardComponent } from './card/card.component';
import { CertificatesComponent } from './professional/certificates/certificates.component';

declare var require
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessionalComponent,
    CardComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXZSdi0xangoUr3xXXEjeI7dY-U1-e5PA'
    }),
    ChartModule.forRoot(require('highcharts')),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);