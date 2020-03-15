import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormControl} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 question: FormControl;
@Output() public sendQuestion = new EventEmitter();

  constructor() { }
sendToList() {
    this.sendQuestion.emit(this.question.value);
}
  ngOnInit(): void {
    this.question = new FormControl('');
  }

}
