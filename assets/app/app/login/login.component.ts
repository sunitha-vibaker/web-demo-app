import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable, from} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user';
import { AnimationGroupPlayer } from '@angular/animations/src/players/animation_group_player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$:any;
  user$ :any;


  username:String;
  password:String;
  
  constructor(public router: Router,private data: DataService, private route: ActivatedRoute) { 
   // this.route.params.subscribe( params => this.user$ = params.id)
  }

 

  checkUser(){
    console.log(this.username);
    console.log(this.users$,"asdasdas");
    this.users$.forEach(user => {
      if(user.username === this.username && user.password === this.password){
       // this.router.navigate(['details/'+user.id]);
        this.router.navigate(['admin']);
      }
    });
    console.log(this.users$);
  }
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    )
    console.log(this.user$);
  }

}
 //// username:sunithan
//password:welcome123