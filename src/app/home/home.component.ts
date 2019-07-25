import { Component, OnInit, Input } from '@angular/core';
import { Wisdom } from '../wisdom';
import { WapiServiceService } from '../wapi-service.service';

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
    this.getWisdom();
  }
  getWisdom(): void {
    this.wisdomList = this.wapi.getYourWisdom();
  }
}