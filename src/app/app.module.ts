import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HoursAndSocialComponent } from './components/hours-and-social/hours-and-social.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './pages/home/home.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { ConditionsWeTreatComponent } from './pages/conditions-we-treat/conditions-we-treat.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainPageContentComponent,
    TestimonialsComponent,
    HoursAndSocialComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    MeetTheTeamComponent,
    ConditionsWeTreatComponent,
    FaqComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
