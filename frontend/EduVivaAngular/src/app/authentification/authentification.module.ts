import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { LoginStudentsComponent } from './login-students/login-students.component';
import { LoginFondationsComponent } from './login-fondations/login-fondations.component';
import { SingUpModule } from './sing-up/sing-up.module';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SignUpFundraiserComponent } from './sign-up-fundraiser/sign-up-fundraiser.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginCardsComponent } from './login-cards/login-cards.component';

@NgModule({
  declarations: [
    UserCardsComponent,
    LoginStudentsComponent,
    LoginFondationsComponent,
    SingUpComponent,
    SignUpFundraiserComponent,
    LoginCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]), // Use forChild for child modules
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    SingUpModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class AuthentificationModule { }
