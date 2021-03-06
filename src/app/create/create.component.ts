import { Component, OnInit } from '@angular/core';
import { Author } from '../Models/Author';
import { WapiServiceService } from '../Services/wapi-service.service';
import { CreateWisdom } from '../Models/CreateWisdom';
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
    this.authGuard();
    this.getAuthors();
  }
  getAuthors(): void {
    this.authorList = this.wapi.getAuthors();
  }
  addWisdom() {
    this.wapi.createWisdom(this.wisdomToAdd);
  }
  setAuthorId(id: number): void {
    this.wisdomToAdd.AuthorId =  id;
  }

  authGuard() {
    if (localStorage.getItem('id_token') == null) {
      location.replace('/login');
    }
  }
}
