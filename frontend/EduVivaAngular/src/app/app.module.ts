import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { FundraiserHomeComponent } from './fundraiser-home/fundraiser-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { FundraiserHomeModule } from './fundraiser-home/fundraiser-home.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { CommonModule } from '@angular/common';
import { AuthentificationModule } from './authentification/authentification.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ServiceService } from './admin/gestion-service/service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentHomeModule } from './student-home/student-home.module';
import { HomestudentComponent } from './student-home/homestudent/homestudent.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent,
    FundraiserHomeComponent,
    AdminComponent,
    StudentHomeComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    FundraiserHomeModule,
    StudentHomeModule,
    RouterModule,
    AuthentificationModule,
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }