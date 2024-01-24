import { Component } from '@angular/core';

@Component({
  selector: 'app-login-cards',
  templateUrl: './login-cards.component.html',
  styleUrls: ['./login-cards.component.scss']
})
export class LoginCardsComponent {

  route1 = '/Auth/loginStudent';
  route2 = '/Auth/loginFundraiser';
  role: string = ''; // Initialize role variable
  url1: string = ''; // Initialize URL variable  constructor(private router: Router) {}

  // Function to set role based on user's choice

}
