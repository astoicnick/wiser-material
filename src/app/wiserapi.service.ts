import { Injectable } from '@angular/core';
import {Wisdom} from './wisdom';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WiserapiService {

  private url = `https://wiserappapi.azurewebsites.net/api`;

  constructor(private http: HttpClient) { }
  getWisdom(): any{
    return this.http.get(`${this.url}/wisdom`);
  }
}
