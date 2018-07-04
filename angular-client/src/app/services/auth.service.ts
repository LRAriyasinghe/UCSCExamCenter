import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthService {
  UpdatedUser:Object;
  authToken: any;
  user: any;
  Exam: any;

  constructor(private http:Http) { }
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/users/register', user,{headers: headers}).pipe(map(res => res.json()));
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/users/authenticate', user,{headers: headers}).pipe(map(res => res.json()));
  }
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/users/profile',{headers: headers}).pipe(map(res => res.json())); 
  }
  storeUserData(token, user){
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  loggedIn(){
    if(this.authToken){
      return this.user;
    } else {
      return false;
    }
    // return this.jwtHelper.isTokenExpired();
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken=token;
  }
  logout(){
    this.authToken = null;
    this.user=null;
    localStorage.clear();
  }
  registerExam(Exam){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('Came');
    return this.http.post('http://localhost:3001/exams/subjectregister', Exam,{headers: headers}).pipe(map(res => res.json()));
    
  }
  registerRepeatExam(RepeatExam){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('Came');
    return this.http.post('http://localhost:3001/exams/repeatsubjectregister', RepeatExam,{headers: headers}).pipe(map(res => res.json()));
    
  }
  registerPostExam(PostExam){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('Came');
    return this.http.post('http://localhost:3001/exams/postgraduatesubjectregister', PostExam,{headers: headers}).pipe(map(res => res.json()));
    
  }
  studentregisterexams(User){
    console.log('Came Here');
    console.log(User.indexno);
    console.log(User);
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('Came Lala');
    return this.http.put('http://localhost:3001/users/examregistration', User,{headers: headers}).pipe(map(res => res.json()));
  }
  
 
}
  