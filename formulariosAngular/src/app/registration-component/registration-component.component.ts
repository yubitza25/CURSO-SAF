import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule }
from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-component.component.html',
  styleUrl: './registration-component.component.css'
})
export class RegistrationComponentComponent {
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
