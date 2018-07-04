import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import{ AuthService } from '../../services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';
import { Exam } from '../../exam';
import { User } from '../../user';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-report-generation',
  templateUrl: './admin-report-generation.component.html',
  styleUrls: ['./admin-report-generation.component.css']
})
export class AdminReportGenerationComponent implements OnInit {
  @ViewChild('reportcontent') reportcontent: ElementRef;
  public downloadPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };
    let reportcontent = this.reportcontent.nativeElement;

    doc.fromHTML(reportcontent.innerHTML, 15 ,15, {
      'width': 190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('test.pdf');
  }



  User:Object;
  IndexNo:String;
  private exams:Exam[];
  private users:User[];
  subjects = [];

  constructor(
    private authService: AuthService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private _examService:ExamService
  ) { }

  ngOnInit() {
    //this.User = JSON.parse(localStorage.getItem('user'));
    //this.IndexNo = JSON.parse(localStorage.getItem('user')).indexno;
    //console.log(this.User);
    //console.log('Hiiiiiiiiiiiii');
    //console.log(this.IndexNo);
    //console.log('Lalanga Ari');
    this.readAllUsers();
  }
  readAllUsers(){
    this._examService.readAllUsers().subscribe(
      data=>{
        console.log(data);
        this.users=data['msg'];
        
      },
      error=>{
        console.log(error);
      }
    )
  }

}
