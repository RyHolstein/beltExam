import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { ShowComponent } from './show/show.component';
import { AddAnswerComponent } from './show/add-answer/add-answer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'new_question',
    component: AddQuestionComponent
  },
  {
    path: 'question/:id',
    component: ShowComponent
  },
  {
    path: 'question/new_answer/:id',
    component: AddAnswerComponent
  },
  {
    path: 'logout',
    redirectTo: '/',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
