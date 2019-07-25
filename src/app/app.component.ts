import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }
  sendHome() {
    // this.router.navigate(['/manage']).then(() =>
    // this.router.navigate(['/home']));
    location.replace('/home');
  }
}
