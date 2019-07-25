import { Component, OnInit, Input } from '@angular/core';
import { WapiServiceService } from '../wapi-service.service';
import { Wisdom } from '../wisdom';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  wisdomList: Wisdom[] = [];
  @Input() id: number;
  constructor(private wapi: WapiServiceService) { }

  ngOnInit() {
      this.getWisdom();
  }
  getWisdom(): void {
      this.wisdomList =  this.wapi.getYourWisdom();
}
  remove(id: number) {
    this.wapi.removeWisdom(id);
  }
  clickMethod(id: number) {
    if(confirm("Are you sure to delete "+id+"?")) {
      this.remove(id);
    }
  }
}
