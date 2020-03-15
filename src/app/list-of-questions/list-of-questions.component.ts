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
  constructor() { }
addToList(evnt){
    this.question2.push(evnt);
}
  ngOnInit(): void {
  }

}
