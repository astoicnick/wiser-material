import { Component, OnInit, Input } from '@angular/core';
import { Wisdom } from '../Models/wisdom';
import { WapiServiceService } from '../Services/wapi-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  wisdomList: Wisdom[] = [];
  counter: number = 0;
  constructor(private wapi: WapiServiceService) { }

  ngOnInit() {
    this.authGuard();
    this.getWisdom();
  }
  getWisdom(): void {
    this.wisdomList = this.wapi.getYourWisdom();
  }
  authGuard() {
    if (localStorage.getItem('id_token') == null) {
      location.replace('/login');
    }
  }
}