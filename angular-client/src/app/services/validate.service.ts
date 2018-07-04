import { Injectable } from '@angular/core';


@Injectable()
export class ValidateService {

  constructor() { }
  validateRegister(user){
    if(user.indexno == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateLogin(user){
    if(user.indexno == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateExam(Exam){
    if(Exam.year == undefined || Exam.semester == undefined){
      return false;
    }else{
      return true;
    }
  }
}
