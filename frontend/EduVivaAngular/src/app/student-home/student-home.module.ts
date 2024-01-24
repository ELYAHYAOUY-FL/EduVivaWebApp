import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomestudentComponent } from './homestudent/homestudent.component';

import { StudentHomeComponent } from './student-home.component';
import { OfferstudentComponent } from './offerstudent/offerstudent.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    CompaniesComponent,
    
    HomestudentComponent,
    OfferstudentComponent
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
export class StudentHomeModule { }
