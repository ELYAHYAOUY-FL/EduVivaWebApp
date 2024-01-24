import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpStudentsComponent } from './sing-up-students/sing-up-students.component';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatRadioModule } from '@angular/material/radio'; // Import MatRadioModule
@NgModule({
  declarations: [
    SingUpStudentsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class SingUpModule { }
