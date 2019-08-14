import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutes } from './home.routing';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversationsComponent } from './conversations/conversations.component';
import { ReportingComponent } from './reporting/reporting.component';
@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ConversationsComponent,
    ReportingComponent
  ],
  providers: []
})
export class HomeModule { }