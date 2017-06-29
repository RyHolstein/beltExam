import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question = {
    question: '',
    description: ''
  }
  errors: String = null;
  constructor(private _router: Router, private _appService: AppService) { }

  ngOnInit() {
  }
  cancel(){
    console.log('canceled')
    this._router.navigate(['/questions'])
  }
  addQuestion(){
    this._appService.addQuestion(this.question)
    .then((data)=> {
      if(data.errors){
        console.log(data.errors.question.message)
        this.errors = data.errors.question.message;
      }else{
        this._router.navigate(['/questions'])
      }
    })
    .catch((data)=> console.log(data))
  }
}
