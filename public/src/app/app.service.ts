import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AppService {

  constructor(private _http: Http) { }


  login(data){
    return this._http.post('/api/login', data).map((data)=>data.json()).toPromise()
  }
  getCurrentUser(){
    return this._http.get('/api/getCurrentUser').map((data)=>data.json()).toPromise()
  }

  addQuestion(data) {
    return this._http.post('/api/new_question', data).map((data)=>data.json()).toPromise()
  }

  getQuestions(){
    return this._http.get('/api/allQuestions').map((data)=>data.json()).toPromise()
  }
  getQuestion(data){
    return this._http.get('/api/getQuestion/'+ data).map((data)=>data.json()).toPromise()
  }
  addAnswer(data, id){
    return this._http.post('/api/addAnswer/' + id, data).map((data)=>data.json()).toPromise()
  }
  liked(data){
    return this._http.get('/api/liked/'+data).map((data)=>data.json()).toPromise()
  }
  logout(){
    return this._http.get('/api/logout').map((data)=>data.json()).toPromise()
  }
}
