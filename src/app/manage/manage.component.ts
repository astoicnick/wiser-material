import { Component, OnInit, Input } from '@angular/core';
import { WapiServiceService } from '../wapi-service.service';
import { Wisdom } from '../wisdom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  wisdomList: Wisdom[] = [];
  @Input() id: number;
  constructor(private wapi: WapiServiceService, public router: Router) { }

  ngOnInit() {
    this.getWisdom();
  }
  getWisdom(): void {
    this.wisdomList = this.wapi.getYourWisdom();
  }
  remove(id: number) {
    this.wapi.removeWisdom(id);
  }
  confirmDelete(id: number) {
    if (confirm("Are you sure to delete " + id + "?")) {
      this.remove(id);
    }
  }
  setWisdomToEdit(id: number) {
    this.wapi.getUpdateWisdom(id);
    this.router.navigate(['edit']);
  }

}
