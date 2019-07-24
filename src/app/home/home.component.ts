import { Component, OnInit } from '@angular/core';
import { Wisdom } from '../wisdom';
import { WapiServiceService } from '../wapi-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  wisdomList: Wisdom[] = [];

  constructor(private wapi: WapiServiceService) { }

  ngOnInit() {
    this.getWisdom();
  }
  getWisdom(): void {
    this.wisdomList =  this.wapi.getWisdom();
      
}
}
