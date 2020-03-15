import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-of-questions',
  templateUrl: './list-of-questions.component.html',
  styleUrls: ['./list-of-questions.component.css']
})
export class ListOfQuestionsComponent implements OnInit {
  @Input() question: string
  @Output() onClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
