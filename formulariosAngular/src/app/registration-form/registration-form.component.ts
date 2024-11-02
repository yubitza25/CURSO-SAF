import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from
'@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
  Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(18),
  Validators.max(100)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  user = {
    name: '',
    email: '',
    password: '',
    age: null,
    terms: false
  };
  onSubmit() {
    console.log('User Registered:', this.user);
  }
}
