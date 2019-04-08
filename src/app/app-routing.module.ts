import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewComponent } from './interview/interview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewResultComponent } from './interview-result/interview-result.component';

const routes: Routes = [
  { path: '', redirectTo:"dashboard" , pathMatch:"full" },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', component: InterviewComponent },
  { path: 'finish', component: InterviewResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
