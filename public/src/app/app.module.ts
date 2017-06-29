import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppService } from './app.service';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { ShowComponent } from './show/show.component';
import { AddAnswerComponent } from './show/add-answer/add-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    AddQuestionComponent,
    ShowComponent,
    AddAnswerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
