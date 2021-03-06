import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) { }
  sendHome() {
    // this.router.navigate(['/manage']).then(() =>
    // this.router.navigate(['/home']));
    location.replace('/home');
  }
  logout() {
    this.authService.logout();
  }
}
