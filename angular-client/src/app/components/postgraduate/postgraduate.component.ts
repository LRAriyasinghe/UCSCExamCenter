import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postgraduate',
  templateUrl: './postgraduate.component.html',
  styleUrls: ['./postgraduate.component.css']
})
export class PostgraduateComponent implements OnInit {
  year: String;
  semester: String;
  subject1: String;
  subject2: String;
  subject3: String;
  subject4: String;
  subject5: String;
  subject6: String;
  subjects = [];

  constructor(
    private validateService: ValidateService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubjectRegisterSubmit(){
  
    this.subjects.push(this.subject1);
    this.subjects.push(this.subject2);
    this.subjects.push(this.subject3);
    this.subjects.push(this.subject4);
    this.subjects.push(this.subject5);
    this.subjects.push(this.subject6);
 
     const PostExam = {
       year: this.year,
       semester: this.semester,
       subjects: this.subjects
     }
 
     console.log(this.year);
     console.log(this.semester);
     console.log(this.subjects);
 
     if(!this.validateService.validateExam(PostExam)){
         console.log('Please fill fields');
         this.notificationService.onWarning('Fill all fields','Warning');
 
         return false;
     }
 
     //Register Subject
     this.authService.registerPostExam(PostExam).subscribe(data => {
       if(data.success){
         console.log('Haree');
         this.notificationService.onError('Opps! Error','Error');
        this.router.navigate(['/undergraduate']);
       }else{
         console.log('iiWARAIIII')
         this.notificationService.onSuccess('Registered Successfully','Success');
        this.router.navigate(['/undergraduate']);
       }
     });
 
 
 
   }
}
