import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './public-home/public-home.component';
import { AboutComponent } from './public-home/about/about.component';
import { ContactComponent } from './public-home/contact/contact.component';
import { HomeComponent } from './public-home/home/home.component';
import { MissionsComponent} from './public-home/missions/missions.component';
import { PartnershipComponent } from './public-home/partnership/partnership.component';
import { TestimonialsComponent } from './public-home/testimonials/testimonials.component';
import { FundraiserHomeComponent } from './fundraiser-home/fundraiser-home.component';
import { GetStartedComponent } from './fundraiser-home/get-started/get-started.component';
import { CallToActionComponent } from './fundraiser-home/call-to-action/call-to-action.component';
import { AdminComponent } from './admin/admin.component';
import { GestionCompanyComponent } from './admin/gestion-company/gestion-company.component';
import { GestionServiceComponent } from './admin/gestion-service/gestion-service.component';
import { OffersComponent } from './fundraiser-home/offers/offers.component';
import { ShowCompaniesComponent } from './fundraiser-home/show-companies/show-companies.component';
import { OffersGerstionComponent } from './admin/offers-gerstion/offers-gerstion.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { HomestudentComponent } from './student-home/homestudent/homestudent.component';
import { CompaniesComponent } from './student-home/companies/companies.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { OfferstudentComponent } from './student-home/offerstudent/offerstudent.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UserCardsComponent } from './authentification/user-cards/user-cards.component';
import { SingUpComponent } from './authentification/sing-up/sing-up.component';
import { LoginFondationsComponent } from './authentification/login-fondations/login-fondations.component';
import { SingUpStudentsComponent } from './authentification/sing-up/sing-up-students/sing-up-students.component';
import { LoginStudentsComponent } from './authentification/login-students/login-students.component';
import { AuthGuard } from './guards/auth.guard';
import { SignUpFundraiserComponent } from './authentification/sign-up-fundraiser/sign-up-fundraiser.component';
import { LoginCardsComponent } from './authentification/login-cards/login-cards.component';
import { ProfileComponent } from './fundraiser-home/profile/profile.component';


const routes: Routes = [
  {
    path: 'Public',
    component: PublicHomeComponent, 
    children: [
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'HomePublic', component: HomeComponent },
      { path: 'Missions', component: MissionsComponent },
      { path: 'Partnerships', component: PartnershipComponent },
      { path: 'testimonials', component: TestimonialsComponent },
    ]
  },

 
  { 
    path: 'Fundraiser', component: FundraiserHomeComponent,
    children:
    [
      {path: 'ManageCompanies', component: GetStartedComponent },
      {path:'Profile',component:ProfileComponent},
      { path: 'Call-To-Action', component: CallToActionComponent },
      { path: 'Offers', component: OffersComponent },
      { path: 'Companies', component: ShowCompaniesComponent },
      { path: 'Companies/:id', component: ShowCompaniesComponent },
    ]
  },

  {
    path: 'Auth',
    component: AuthentificationComponent,
    children: [
      { path: 'loginStudent', component: LoginStudentsComponent },
      { path: 'loginFundraiser', component: LoginFondationsComponent },     
      { path: 'userCards', component: UserCardsComponent },
      { path:'LoginCards',component:LoginCardsComponent},
      
      { path: 'singup', component: SingUpComponent,
          children:[
            { path: 'singUpStudents', component: SingUpStudentsComponent },
            { path: 'singUpFundraiser', component: SignUpFundraiserComponent },
          ]
      }
  ]
  },

  { 
    path: 'Admin', component: AdminComponent,

    children:

    [
      {path: 'Gestion-Company', component: GestionCompanyComponent },
      { path: 'Gestion-Service', component: GestionServiceComponent },
      { path: 'OffersGerstion', component: OffersGerstionComponent },
      { path: 'Profile', component: ProfileAdminComponent }
      
    ]
  },
  { 
    path: 'Student', component: StudentHomeComponent,

    children:

    [
      { path: 'About', component: AboutComponent },
      { path: 'Companies', component: CompaniesComponent },
      { path: 'Offer', component: OfferstudentComponent },
      { path:'Profile',component: HomestudentComponent }
      
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
