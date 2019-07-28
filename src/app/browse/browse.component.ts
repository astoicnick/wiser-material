import { Component, OnInit } from '@angular/core';
import { Wisdom } from '../Models/wisdom';
import { WapiServiceService } from '../Services/wapi-service.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
wisdomList: Wisdom[] = [];
  constructor(private wapi: WapiServiceService) { }

  ngOnInit() {
    this.authGuard();
    this.getWisdom();
  }
  getWisdom() {
    this.wisdomList = this.wapi.getWisdom();
  }
  authGuard() {
    if (localStorage.getItem('id_token') == null) {
      location.replace('/login');
    }
  }

}
