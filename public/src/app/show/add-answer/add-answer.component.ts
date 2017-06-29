import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  answer = {
    answer: '',
    description: '',
  }
  question: Object = []

  id: String;
  constructor(private _appService: AppService, private _route: ActivatedRoute, private _router: Router) {
    this._route.params.subscribe((param)=>{
      this._appService.getQuestion(param.id)
      .then((data)=>{
        this.question = data;
        this.id = data._id
        console.log(this.question)
      })
      .catch((err)=>console.log(err))
    })
  }//end of constructor

  ngOnInit() {
  }
  addAnswer(){
    this._appService.addAnswer(this.answer , this.id)
    .then((data)=> {
      console.log(data)
      this._router.navigate(['/question/' + this.id])
    })
    .catch((data)=> console.log(data))
  }

}
