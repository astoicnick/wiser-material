import { Component, OnInit } from '@angular/core';
import { Author } from '../Author';
import { CreateWisdom } from '../CreateWisdom';
import { WapiServiceService } from '../wapi-service.service';
import { Router } from '@angular/router';
import { UpdateWisdom } from '../UpdateWisdom';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  authorList: Author[] = [];
  selectedAuthor: Author;
  wisdomToEdit: UpdateWisdom = {
    WisdomId: 0,
    UserId: "",
    AuthorId: 0,
    AuthorName: "",
    Content: "",
    Source: "",
    WisdomGenre: 0,
    IsUpvoted: true
  };
  
  constructor(private wapi: WapiServiceService, private router: Router) { }

  ngOnInit() {
    this.getWisdomToEdit();
    this.getAuthors();
  }
  getAuthors(): void {
    this.authorList = this.wapi.getAuthors();
    console.log(this.authorList);
  }
  editWisdom() {
    this.wapi.editWisdom(this.wisdomToEdit);
    this.getWisdomToEdit();
    console.log(this.wisdomToEdit);
    this.router.navigate(['/home']);
  }
  getWisdomToEdit() {
    this.wisdomToEdit = this.wapi.wisdomToEdit;
  }
}
