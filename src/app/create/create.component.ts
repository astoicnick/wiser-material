import { Component, OnInit } from '@angular/core';
import { Author } from '../Author';
import { WapiServiceService } from '../wapi-service.service';
import { CreateWisdom } from '../CreateWisdom';
import { FormControl } from '@angular/forms';
import { Source } from 'webpack-sources';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

selectedAuthor: Author;
wisdomToAdd: CreateWisdom = {
  AuthorId: null,
    AuthorFirstName: "",
    AuthorLastName: "",
    Content: "",
    Source: "",
    WisdomGenre: 0,
};

authorList: Author[] = [];
  constructor(private wapi: WapiServiceService, private router: Router) {}

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors(): void {
    this.authorList = this.wapi.getAuthors();
  }
  addWisdom() {
    this.wapi.createWisdom(this.wisdomToAdd);
    this.router.navigate(['manage'])
    .then(a=> this.router.navigate(['home']));
  }
  setAuthorId(id: number): void {
    this.wisdomToAdd.AuthorId =  id;
  }

}
