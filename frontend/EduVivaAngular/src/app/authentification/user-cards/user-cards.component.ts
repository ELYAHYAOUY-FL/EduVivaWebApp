import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent {

  route1 = '/Auth/singup/singUpStudents';
  route2 = '/Auth/singup/singUpFundraiser';
  role: string = ''; // Initialize role variable
  url1: string = ''; // Initialize URL variable  constructor(private router: Router) {}

  // Function to set role based on user's choice
  
}