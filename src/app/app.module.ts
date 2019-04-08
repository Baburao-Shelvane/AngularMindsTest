import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortalService } from '././services/portal.service'
import { DummyApi } from '././services/dummy-api';
import { InterviewComponent } from './interview/interview.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { FormsModule } from '@angular/forms';
import { InterviewResultComponent } from './interview-result/interview-result.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    DashboardComponent,
    InterviewResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PortalService,DummyApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
