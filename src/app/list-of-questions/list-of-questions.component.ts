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
  public questionsAndLikes = {};
// public question2 = [];
// numberOfLikes = [];
like = false;
  constructor() { }
addToList(evnt) {
    this.questionsAndLikes[evnt] = 0;
}
  ngOnInit(): void {
  }
  getLike(condition: boolean, question: any) {
    if (!condition) {
      this.questionsAndLikes[question] += 1;
      this.like = !this.like;
    } else {
      this.questionsAndLikes[question] -= 1;
      this.like = !this.like;
    }
  }
}
