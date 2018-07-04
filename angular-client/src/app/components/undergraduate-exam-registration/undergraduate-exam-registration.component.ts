import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import{ AuthService } from '../../services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import { Exam } from '../../exam';
@Component({
  selector: 'app-undergraduate-exam-registration',
  templateUrl: './undergraduate-exam-registration.component.html',
  styleUrls: ['./undergraduate-exam-registration.component.css']
})
export class UndergraduateExamRegistrationComponent implements OnInit {
  User:Object;
  IndexNo:String;
  private exams:Exam[];
  subjects = [];


  constructor(
    private authService: AuthService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private _examService:ExamService
  ) { }

  ngOnInit() {
    this.User = JSON.parse(localStorage.getItem('user'));
    this.IndexNo = JSON.parse(localStorage.getItem('user')).indexno;
    console.log(this.User);
    console.log('Hiiiiiiiiiiiii');
    console.log(this.IndexNo);
    console.log('Lalanga Ari');
    this.readExams();
  }
  readExams(){
    this._examService.readExams().subscribe(
      data=>{
        console.log(data);
        this.exams=data['msg'];
        
      },
      error=>{
        console.log(error);
      }
    )
  }
  onRegSub(subject,btn){
    console.log(subject);
    console.log(btn);
    btn.disabled=true;
    this.subjects.push(subject);
    console.log(this.subjects);
    return this.subjects;
}
onRemovesub(btn1){
  this.subjects.pop();
  btn1.disabled=true;
  
  console.log(this.subjects);
  return this.subjects;
}
  onSubmitExams(SelectedSubjects){
    console.log(SelectedSubjects);
    this.User["subjects"] = SelectedSubjects;
    console.log(this.User);
    

    //Student register for Subject
    this.authService.studentregisterexams(this.User).subscribe(data => {
      
      if(data.success){
       this.notificationService.onSuccess('Succeessfully Registered','Success');
      }else{
        console.log('iiWARAIIII')
        this.notificationService.onError('Failed','Error');
      
      }
    });
  }
}

