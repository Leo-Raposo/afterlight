import { Component } from '@angular/core';
import { AxiosService } from '../../services/axios.service';  // Adjust the path as needed
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Optional if using reactive forms

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']  // Corrected to `styleUrls`
})
export class SigninComponent {
  signInForm: FormGroup;

  constructor(private axiosService: AxiosService, private fb: FormBuilder) {
    // Initialize the form with reactive forms (optional)
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.signInForm.valid) {
      const credentials = this.signInForm.value;

      // Using the axios service to send a POST request
      this.axiosService.postRequest('/auth/signin', credentials)
        .then(response => {
          console.log('Sign-in successful', response);
          // Handle successful sign-in (e.g., store token, redirect)
        })
        .catch(error => {
          console.error('Sign-in error', error);
          // Handle error (e.g., display error message to user)
        });
    } else {
      console.warn('Form is not valid');
    }
  }
}
