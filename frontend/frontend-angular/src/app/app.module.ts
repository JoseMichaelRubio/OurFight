import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PsychiatryComponent } from './doctors/psychiatry/psychiatry.component';
import { MarriageCounselingComponent } from './doctors/marriage-counseling/marriage-counseling.component';
import { ChildPsychologyComponent } from './doctors/child-psychology/child-psychology.component';
import { TherapyComponent } from './doctors/therapy/therapy.component';
import { GroupTherapyComponent } from './doctors/group-therapy/group-therapy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PsychiatryComponent,
    MarriageCounselingComponent,
    ChildPsychologyComponent,
    TherapyComponent,
    GroupTherapyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
