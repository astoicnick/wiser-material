import { Component, OnInit } from '@angular/core';
import { Author } from '../Author';
import { WapiServiceService } from '../wapi-service.service';
import { CreateWisdom } from '../CreateWisdom';
import { FormControl } from '@angular/forms';
import { Source } from 'webpack-sources';

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
  constructor(private wapi: WapiServiceService) {}

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors(): void {
    this.authorList = this.wapi.getAuthors();
    console.log(this.authorList);
  }
  addWisdom() {
    this.wapi.createWisdom(this.wisdomToAdd);
  }
  setAuthorId(id: number): void {
    this.wisdomToAdd.AuthorId =  id;
    console.log(this.wisdomToAdd);
  }

}
