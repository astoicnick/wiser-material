import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wisdom } from './wisdom';
import { Author } from './Author';
import { CreateWisdom } from './CreateWisdom';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer 6mUbLfSZrV1KmG3qjMiWAKrRsOkdplSe50OAyE-PcwK4bp7vcYg_QAVAvclxy9tiDgWA0tvxigJE2P2eIWXoItFE8xdC1yiukQW1RWa9EtgBHZpqC0w_UuukZ0BV_sMpiJXKWRtcOBO31B9ulAzkC_nuf09XHCPRo7dZyJTlZ55hC5ce2XEgVdpJPAbEgvVG2UpZZkUmpPya4dBBlE-tl8wXTN2H7D8OcPFJWD0fiQTk2w053adTqPu-KZB9rAliRK7u5llCGNpkerszUg_8ouyGCxsSeL8hlZiyBiZFLP14tozTUcEw_R1L1SfXNbS6H2bq16aBALKnUUiC_ebc3IXhp9bIdkkvlSryP0JNpZhpZZFhqInXsX5pW_XszXcO9EmO_3Q2MpS6cLcdvvhj5mZctYbfJ3Wqxp4We_UULK1JUXhCDgGG1b-bLyVy222GpdF2vwmmyl9zXBNRw1ZfqI5lxxoW9-wpxY_YSLpgKddM3DRxHg6Dpb3RDV2NHFfwc1IKu6cE8nxcsAoSv3OyZg'
  })
 }
@Injectable({
  providedIn: 'root'
})

export class WapiServiceService {
wisdomList: Wisdom[] = [];
authorList: Author[] = [];

  private url = 'https://wiserappapi.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  createWisdom(wisdomToAdd: CreateWisdom) {
    return this.http.post(`${this.url}/wisdom`, wisdomToAdd, httpOptions)
    .subscribe(a => (blank: any) => a);
  }

  getWisdom(): Wisdom[] {
    var query:  any = [];
    query = this.http.get(`${this.url}/wisdom`, httpOptions);
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
    var query:  any = [];
    query = this.http.get(`${this.url}/wisdom/yours`, httpOptions);
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
    query = this.http.get(`${this.url}/author`,httpOptions);
    query.subscribe(author => {
      author.map(a=> {
        let newAuth = new Author();
        newAuth.id =  a.AuthorId;
        newAuth.name = a.AuthorName;
        newAuth.wisdomcount = a.WisdomCount;
        this.authorList.push(newAuth);
      });
    });
    return this.authorList;
  }
  removeWisdom(id: number) {
    console.log(id);
    return this.http.delete(`${this.url}/wisdom/${id}`, httpOptions)
    .subscribe(a => {
      (blank: any) => a
      location.reload();
    });
  }
}
