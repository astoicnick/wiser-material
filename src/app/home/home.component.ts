import { Component, OnInit } from '@angular/core';
import { WiserapiService } from '../wiserapi.service';
import { Wisdom } from '../wisdom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wisdomList: Wisdom[];
  constructor(private apiService: WiserapiService) { }

  ngOnInit() {
    this.getAllWisdom();
    // console.log(this.getAllWisdom());
  }
  getAllWisdom(): void {
    this.apiService.getWisdom()
      .subscribe(wisdom => {
        console.log(wisdom);
      });
      //   wisdom.map(w => {
      //     console.log(w);
      //     let newWiz = new Wisdom();
      //     newWiz.id = w.WisdomId;
      //     newWiz.authorid = w.ScrollAuthor.AuthorId;
      //     newWiz.content = w.Content;
      //     newWiz.source = w.Source;
      //     newWiz.authorname = w.ScrollAuthor.AuthorName;
      //     this.wisdomList.push(newWiz);
      //     console.log(this.wisdomList);
      //   });
      // });
  }

}
