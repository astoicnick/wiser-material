import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wisdom } from './wisdom';
import { Author } from './Author';
import { CreateWisdom } from './CreateWisdom';
import { UpdateWisdom } from './UpdateWisdom';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class WapiServiceService {
  wisdomList: Wisdom[] = [];
  authorList: Author[] = [];
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

  private url = 'https://wiserappapi.azurewebsites.net/api';
  constructor(private http: HttpClient, private authService: AuthService) { }
  private httpOptions: HttpHeaders = this.authService.setHeader();
  createWisdom(wisdomToAdd: CreateWisdom) {
    console.log(wisdomToAdd);
    return this.http.post(`${this.url}/wisdom`, wisdomToAdd,{headers: this.httpOptions} );
  }
  editWisdom(wisdomToEdit: UpdateWisdom) {
    return this.http.put(`${this.url}/wisdom`, wisdomToEdit,{headers: this.httpOptions})
      .subscribe(wu => (blank: any) => wu);
  }
  getUpdateWisdom(id: number) {
    var query: any = [];
    query = this.http.get<UpdateWisdom>(`${this.url}/wisdom/${id}`,{headers: this.httpOptions});
    query.subscribe(a => {
      this.wisdomToEdit.AuthorId = a.Author.AuthorId;
      this.wisdomToEdit.AuthorName = a.Author.AuthorName;
      this.wisdomToEdit.Content = a.Content;
      this.wisdomToEdit.Source = a.Source;
      this.wisdomToEdit.IsUpvoted = a.IsUpvoted;
      this.wisdomToEdit.UserId = a.UserId;
      this.wisdomToEdit.WisdomGenre = 0;
      this.wisdomToEdit.WisdomId = a.WisdomId;
      console.log(this.wisdomToEdit);
    });

    // query.subscribe(wisdom => {
    //   wisdom.map(w=> {
    //     let newWiz = new UpdateWisdom();
    //     newWiz.AuthorId = query.Author.AuthorId;
    //     newWiz.AuthorName = query.Author.AuthorName;
    //     newWiz.Content = query.Content;
    //     newWiz.Source = query.Source;
    //     newWiz.IsUpvoted = query.IsUpvoted;
    //     newWiz.UserId = query.UserId;
    //     newWiz.WisdomGenre = 0;
    //     newWiz.WisdomId = query.WisdomId;
    //     console.log(newWiz);
    //     this.wisdomToEdit = newWiz;
    //   });
    // })
  }
  getWisdom(): Wisdom[] {
    this.wisdomList = [];
    var query: any = [];
    query = this.http.get(`${this.url}/wisdom`,{headers: this.httpOptions});
    query.subscribe(wisdom => {
      wisdom.map(w => {
        let newWiz = new Wisdom();
        newWiz.id = w.WisdomId;
        newWiz.authorid = w.ScrollAuthor.AuthorId;
        newWiz.content = w.Content;
        newWiz.source = w.Source;
        newWiz.authorname = w.ScrollAuthor.AuthorName;
        this.wisdomList.push(newWiz);
      });
    });
    return this.wisdomList;
  }
  getYourWisdom(): Wisdom[] {
    this.wisdomList = [];
    var query: any = [];
    query = this.http.get(`${this.url}/wisdom/yours`,{headers: this.httpOptions});
    query.subscribe(wisdom => {
      wisdom.map(w => {
        let newWiz = new Wisdom();
        newWiz.id = w.WisdomId;
        newWiz.authorid = w.ScrollAuthor.AuthorId;
        newWiz.content = w.Content;
        newWiz.source = w.Source;
        newWiz.authorname = w.ScrollAuthor.AuthorName;
        this.wisdomList.push(newWiz);
      });
    });
    return this.wisdomList;
  }
  getAuthors(): Author[] {
    var query: any = [];
    query = this.http.get(`${this.url}/author`,{headers: this.httpOptions});
    query.subscribe(author => {
      author.map(a => {
        let newAuth = new Author();
        newAuth.id = a.AuthorId;
        newAuth.name = a.AuthorName;
        newAuth.wisdomcount = a.WisdomCount;
        this.authorList.push(newAuth);
      });
    });
    return this.authorList;
  }
  removeWisdom(id: number) {
    console.log(id);
    return this.http.delete(`${this.url}/wisdom/${id}`,{headers: this.httpOptions})
      .subscribe(a => {
        (blank: any) => a
        location.reload();
      });
  }
}