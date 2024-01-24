import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { AuthServicesService } from '../_services/-auth-services.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sign-up-fundraiser',
  templateUrl: './sign-up-fundraiser.component.html',
  styleUrls: ['./sign-up-fundraiser.component.scss']
})
export class SignUpFundraiserComponent {
  isHidden: boolean = true;

  registerData = {
    firstname: '',
    lastname: '',
    gender: '',
    city: '',
    address: '',
    nationality: '',
    email: '',
    telephone: 'null',
    birthday: '',
    password: '',
    role: 'FUNDRAISER'
  };
  

  constructor(private authService: AuthServicesService, private snackBar: MatSnackBar , private router: Router) {}

  onSubmit() {
    // Format the birthday string before sending it to the backend
    this.registerData.birthday = this.formatBirthday(this.registerData.birthday);

    this.authService.register(this.registerData)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
          this.showSuccessNotification();
          this.router.navigate(['/Fundraiser/Offers']);

        },
        error => {
          console.error('Registration failed:', error);
          // Handle error, show error message, etc.
        }
      );
  }

  private showSuccessNotification() {
    this.snackBar.open('Registration successful!', 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }

  private formatBirthday(birthday: string): string {
    // Format the date string as needed (e.g., from "yyyy-MM-dd" to "dd/MM/yyyy")
    const parts = birthday.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
}
