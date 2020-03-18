import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-list-of-questions',
  templateUrl: './list-of-questions.component.html',
  styleUrls: ['./list-of-questions.component.css']
})
export class ListOfQuestionsComponent implements OnInit {
  listOfItems = [];
  // public questionsAndLikes = new Map();

  constructor() { }
addToList(evnt) {
    // this.questionsAndLikes.set('question', evnt);
    // this.questionsAndLikes.set('likes', 0);
    this.listOfItems.push({
      question: evnt,
      likes: 0,
      likeBoolean: false
    });
    console.log(this.listOfItems);
}
  ngOnInit(): void {
  }
  getLike(condition: boolean, id: number) {
    if (!condition) {
      this.listOfItems[id].likes += 1;
      this.listOfItems[id].likeBoolean = !this.listOfItems[id].likeBoolean;
    } else {
      this.listOfItems[id].likes -= 1;
      this.listOfItems[id].likeBoolean = !this.listOfItems[id].likeBoolean;
    }
    console.log(this.listOfItems, this.listOfItems[id].likeBoolean);
    // a = this.listOfItems[id - 1].likes;
    // b = this.listOfItems[id].likes;
    // tslint:disable-next-line:only-arrow-functions
    this.listOfItems = this.listOfItems.sort(function(a, b) {
        return b.likes - a.likes;
    });
  }
}
