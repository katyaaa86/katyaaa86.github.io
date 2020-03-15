import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
