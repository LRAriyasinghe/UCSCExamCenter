import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import{ AuthService } from '../../services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import { User } from '../../user';
@Component({
  selector: 'app-postgraduate-view-registration',
  templateUrl: './postgraduate-view-registration.component.html',
  styleUrls: ['./postgraduate-view-registration.component.css']
})
export class PostgraduateViewRegistrationComponent implements OnInit {
  User:Object;
  Users:Object;
  IndexNo:String;
  indexno: String;
  users = [];

  constructor(
    private authService: AuthService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private _examService:ExamService
  ) { }

  ngOnInit() {
    this.User = JSON.parse(localStorage.getItem('user'));
    this.IndexNo = JSON.parse(localStorage.getItem('user')).indexno;
    console.log(this.IndexNo);
    console.log(this.User);
    this.readUserRegisteredExams(this.IndexNo);
  }
  readUserRegisteredExams(IndexNo){
    console.log('Came');
    console.log(IndexNo);
    this._examService.readUserRegisteredExams(IndexNo).subscribe(
      data=>{
        
       console.log(data);
        this.users=data['msg'];
        this.users = Array.of(this.users);
      },
      error=>{
        console.log(error);
      }
  )
  }

}
