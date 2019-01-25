import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return(this.http.get('../../users/list'));
  }

  getUser(userId){
    return(this.http.get('../../users/details/'+userId));
  }


  getPosts(){
    return(this.http.get('https://jsonplaceholder.typicode.com/posts'));
  }
  
  getArticles(){
    return(this.http.get('../../articles'));
  }
}
