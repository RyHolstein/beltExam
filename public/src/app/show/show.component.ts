import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question: Object = []
  id: String;
  constructor(private _appService: AppService, private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this._appService.getQuestion(param.id)
      .then((data)=>{
        this.question = data;
        this.id = param.id
        console.log(this.question)
      })
      .catch((err)=>console.log(err))
    })
  }//end of constructor

  ngOnInit() {
  }

  refresh(){
    this._appService.getQuestion(this.id)
    .then((data)=>{
      this.question = data;
      console.log(this.question)
    })
    .catch((err)=>console.log(err))
  }

  liked(data){
    console.log(data)
    this._appService.liked(data)
    .then((data)=>{
      this.refresh()
    })
    .catch((data)=>console.log(data))
  }

}
