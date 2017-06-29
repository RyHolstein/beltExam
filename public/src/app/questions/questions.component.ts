import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Object[] = []
  currentUser: String;
  constructor(private _appService: AppService, private _router: Router) {
    this._appService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data.username;
    })
    .catch((error)=>{
      if (error.status == 401){
        this._router.navigate(['/'])

      }
    })
  }

  ngOnInit() {
    this._appService.getQuestions()
    .then((data)=> {
      console.log(data)
      this.questions = data
    })
    .catch((error)=>{
      if (error.status == 401){
        this._router.navigate(['/'])
      }
    })
  }

  showQuestion(data){
    console.log(data)
    this._router.navigate(['/question/' + data])
  }




}
