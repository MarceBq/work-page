import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private router: Router, private appComponent: AppComponent) {}

  onSubmit() {
    const storedUserDataStr = localStorage.getItem('userData');
    if (storedUserDataStr) {
      const storedUserData = JSON.parse(storedUserDataStr);
      if (
        this.email === storedUserData.email &&
        this.password === storedUserData.password
      ) {
        this.appComponent.updateLoginStatus();
        const userNewData = storedUserData.username;
        console.log(userNewData);
        this.router.navigate(['']);
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('User not registered');
    }
  }
}
