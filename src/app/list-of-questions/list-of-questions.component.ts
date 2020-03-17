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
public question2 = [];
numberOfLikes = 0;
like = false;
  constructor() { }
addToList(evnt){
    this.question2.push(evnt);
}
  ngOnInit(): void {
  }
  getLike(condition: boolean) {
    if (!condition) {
      this.numberOfLikes += 1;
      this.like = !this.like;
    } else {
      this.numberOfLikes -= 1;
      this.like = !this.like;
    }
  }
}
