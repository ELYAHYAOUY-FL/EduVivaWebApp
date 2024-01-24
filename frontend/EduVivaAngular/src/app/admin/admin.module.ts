import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCompanyComponent } from './gestion-company/gestion-company.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OffersGerstionComponent } from './offers-gerstion/offers-gerstion.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';



@NgModule({
  declarations: [
    GestionCompanyComponent,
    GestionServiceComponent,
    OffersGerstionComponent,
    ProfileAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
