import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
  }
  errors: String = null;

  constructor(private _appService: AppService, private _router: Router) { }

  ngOnInit() {
    this.logout()
  }
  logout(){
    this._appService.logout()
    .then()
    .catch()
  }
  login(){
    this._appService.login(this.user)
    .then((data)=>{
      if(data.errors){
        this.errors = data.errors.username.message
        console.log(data.errors.username.message)
      } else {
        this._router.navigate(['/questions'])
        console.log("logged In successfully")
      }
    })
    .catch((err)=>console.log("there was an error when Logging in"))
  }
}
