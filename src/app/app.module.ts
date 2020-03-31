import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {QuestionComponent} from './question/question.component';
import {ListOfQuestionsComponent} from './list-of-questions/list-of-questions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {StoreModule} from "@ngrx/store";
import {likesReducer} from "./reducer";

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
    MatToolbarModule,
    StoreModule.forRoot({ count: likesReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
