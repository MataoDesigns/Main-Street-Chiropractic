import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { ConditionsWeTreatComponent } from './pages/conditions-we-treat/conditions-we-treat.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent },
  { path: 'conditions-we-treat', component: ConditionsWeTreatComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
