import { Component } from '@angular/core';
import { AuthServicesService } from '../_services/-auth-services.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-students',
  templateUrl: './login-students.component.html',
  styleUrls: ['./login-students.component.scss']
})
export class LoginStudentsComponent {

  loginData: any = {}; // Object to hold login form data

  constructor(
    private authService: AuthServicesService,
    private snackBar: MatSnackBar,
    private router: Router,) {}

    onSubmit(): void {
      // Call the authentication service to send login request
      this.authService.authenticate(this.loginData)
        .subscribe(
          response => {
            console.log('Login successful:', response);
            this.authService.setToken(response.token);
            // Log the JSON response in the console
            console.log('User JSON:', JSON.stringify(response));
    
            // Show success notification using MatSnackBar
            const config: MatSnackBarConfig = {
              duration: 3000, // Set the duration for the notification (in milliseconds)
            };
            this.snackBar.open('Login successful', 'Dismiss', config);
    
            // Redirect to /Student page
            this.router.navigate(['/Student/Offer']);
          },
          error => {
            console.error('Login failed:', error);
            // Handle error (show error message, log, etc.)
          }
        );
    }
}
