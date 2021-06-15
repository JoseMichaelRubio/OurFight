import { GroupTherapyComponent } from './doctors/group-therapy/group-therapy.component';
import { TherapyComponent } from './doctors/therapy/therapy.component';
import { ChildPsychologyComponent } from './doctors/child-psychology/child-psychology.component';
import { MarriageCounselingComponent } from './doctors/marriage-counseling/marriage-counseling.component';
import { PsychiatryComponent } from './doctors/psychiatry/psychiatry.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'psychiatry', component: PsychiatryComponent },
  { path: 'marriage-counseling', component: MarriageCounselingComponent},
  { path: 'child-psychology', component: ChildPsychologyComponent},
  { path: 'therapy', component: TherapyComponent},
  {path: 'group-therapy', component: GroupTherapyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
