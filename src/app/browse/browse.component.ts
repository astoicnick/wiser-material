import { Component, OnInit } from '@angular/core';
import { Wisdom } from '../wisdom';
import { WapiServiceService } from '../wapi-service.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
wisdomList: Wisdom[] = [];
  constructor(private wapi: WapiServiceService) { }

  ngOnInit() {
    console.log('yea');
    this.getWisdom();
  }
  getWisdom() {
    this.wisdomList = this.wapi.getWisdom();
  }

}
