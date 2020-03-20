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
  i = 0;

  constructor() { }
addToList(evnt) {
    this.listOfItems.push({
      question: evnt,
      likes: 0,
      likeBoolean: false,
      id: this.i
    });
    this.i = this.i + 1;
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
         if (b.likes === a.likes) {
           return a.id - b.id;
         }
         return b.likes - a.likes;
    });
  }
}
