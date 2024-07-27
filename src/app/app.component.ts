import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'workPage';
  public username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      const element = document.querySelector(
        '[style*="z-index: 999999999;"]'
      ) as any;
      element.style.display = 'none';
    }, 0);

    this.updateLoginStatus();
  }

  updateLoginStatus() {
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      this.username = userData.username;
    } else {
      this.username = '';
    }
  }

  public onClickLogout() {
    localStorage.removeItem('userData');
    this.updateLoginStatus();
    this.router.navigate(['']);
  }

  public goLogin() {
    this.router.navigate(['login']);
  }

  public goRegister() {
    this.router.navigate(['register']);
  }
}
