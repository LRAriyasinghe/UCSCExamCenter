import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exam } from '../exam';
import {User} from '../user';

@Injectable()
export class ExamService {
  private baseUri:string="http://localhost:3001";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(
    private http:HttpClient
  ) { }

  readExams(){
    console.log('service');
    return this.http.get(this.baseUri+'/exams/readsubject',{headers:this.headers});
  }
  readRepeatExams(){
    console.log('service');
    return this.http.get(this.baseUri+'/exams/readrepeatsubject',{headers:this.headers});
  }
  readPostExams(){
    console.log('service2');
    return this.http.get(this.baseUri+'/exams/postreadsubject',{headers:this.headers});
  }
  readUserRegisteredExams(IndexNo){
    console.log('Exam Service');
    console.log(IndexNo);

    //let headers = new Headers();
    //headers.append('Content-Type','application/json');
    console.log('Came Ravini');
    //return this.http.get('http://localhost:3001/users/readUserRegisteredExams',{headers:this.headers}); 
    return this.http.get('http://localhost:3001/users/readUserRegisteredExams?indexno='+IndexNo,{headers:this.headers});
  }
  readAllUsers(){
    console.log('service');
    return this.http.get(this.baseUri+'/users/readallusers',{headers:this.headers});
  }
  
}
