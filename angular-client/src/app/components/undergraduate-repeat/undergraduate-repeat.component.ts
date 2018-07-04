import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-undergraduate-repeat',
  templateUrl: './undergraduate-repeat.component.html',
  styleUrls: ['./undergraduate-repeat.component.css']
})
export class UndergraduateRepeatComponent implements OnInit {
  year: String;
  semester: String;
  subject1: String;
  subject2: String;
  subject3: String;
  subject4: String;
  subject5: String;
  subject6: String;
  repeatsubjects = [];

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
    this.repeatsubjects.push(this.subject1);
   this.repeatsubjects.push(this.subject2);
   this.repeatsubjects.push(this.subject3);
   this.repeatsubjects.push(this.subject4);
   this.repeatsubjects.push(this.subject5);
   this.repeatsubjects.push(this.subject6);


    console.log(this.repeatsubjects);

    

    const RepeatExam = {
      year: this.year,
      semester: this.semester,
      repeatsubjects: this.repeatsubjects
    }
    

    if(!this.validateService.validateExam(RepeatExam)){
      console.log('Please fill fields');
      this.notificationService.onWarning('Fill all fields','Warning');

      return false;
  }

  //Register Subject
  this.authService.registerRepeatExam(RepeatExam).subscribe(data => {
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
