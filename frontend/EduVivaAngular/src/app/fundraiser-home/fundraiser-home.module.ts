import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './get-started/get-started.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShowCompaniesComponent } from './show-companies/show-companies.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    
    GetStartedComponent,
    OffersComponent,
    ProfileComponent,
    CallToActionComponent,
    ShowCompaniesComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ]
})
export class FundraiserHomeModule { }
