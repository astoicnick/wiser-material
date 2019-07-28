import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../Models/RegisterUser';
import { encode } from 'punycode';
import { Token } from '../Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  private url = 'https://wiserappapi.azurewebsites.net/api';

  constructor(private http: HttpClient, private router: Router) { }

  register(userToRegister: RegisterUser) {
    return this.http.post(`${this.url}/account/register`, userToRegister);
  }
  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`https://wiserappapi.azurewebsites.net/token`, str).subscribe( (token: Token) => {
      localStorage.setItem('id_token',token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['']);
      console.log(localStorage.getItem('id_token'));
    });
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.http.post(`${this.url}/account/logout`, {headers: this.setHeader()});
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('id_token'));
  }
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable (observer => observer.next(false));}
    
    return this.http.get(`${this.url}/account/userinfo`,{headers: this.setHeader()});
  }

  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
