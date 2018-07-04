import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import{ AuthService } from '../../services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import { PostExam } from '../../postexam';

@Component({
  selector: 'app-postgraduate-exam-registration',
  templateUrl: './postgraduate-exam-registration.component.html',
  styleUrls: ['./postgraduate-exam-registration.component.css']
})
export class PostgraduateExamRegistrationComponent implements OnInit {
  User:Object;
  IndexNo:String;
  private exams:PostExam[];
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
    console.log('Correct');
    console.log(this.IndexNo);
    console.log('Hey');
    this.readPostExams();
  }
  readPostExams(){
    this._examService.readPostExams().subscribe(
      data=>{
        console.log(data);
        this.exams=data['msg'];
        
      },
      error=>{
        console.log(error);
      }
    )
  }
  onRegSub(subject){
    console.log(subject);
    this.subjects.push(subject);
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
