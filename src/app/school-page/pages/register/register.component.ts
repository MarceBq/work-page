import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      control.get('confirmPassword')?.setErrors(null);
      return null;
    }
  };

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        username: this.registerForm.value.username,
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      this.router.navigateByUrl('/');

      console.log('Form Submitted!', this.registerForm.value);

      this.registerForm.reset();
    }
  }
}
