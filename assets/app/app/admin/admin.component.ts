import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable, from} from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  users$:any;
  user$ :any;


  username:String;
  password:String;
  

  constructor(public router: Router,private data: DataService, private route: ActivatedRoute) { 
   // this.route.params.subscribe( params => this.user$ = params.id)
  }

 

 
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    )
    console.log(this.user$);
  }

  
}
