import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MissionsComponent } from './missions/missions.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    MissionsComponent,
    PartnershipComponent,
    TestimonialsComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicHomeModule { }
