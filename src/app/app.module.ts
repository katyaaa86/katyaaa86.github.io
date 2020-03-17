import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ListOfQuestionsComponent } from './list-of-questions/list-of-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { MatCardActions } from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatGridTile } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ListOfQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
