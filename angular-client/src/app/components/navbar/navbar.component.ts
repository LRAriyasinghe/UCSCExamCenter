import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{ AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User:Object;
  closeResult: String;
  password: String;
  indexno: String;

  constructor(
    private validateService: ValidateService,
    private modalService: NgbModal,
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.User = JSON.parse(localStorage.getItem('user'));
    console.log(this.User);
    
  }
  
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onLoginSubmit() {
    // console.log(this.indexno);
    // console.log(this.password);
    const user = {
      indexno: this.indexno,
      password: this.password
    }
    if (!this.validateService.validateLogin(user)) {

      this.notificationService.onError('Please Fill All Fields', 'Error');
      return false;
    }
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data.user);
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.notificationService.onSuccess('Now You are Logged In', 'Success');

        if (user.indexno == "admin") {
          this.router.navigate(['/admindashboard']);
        } else {
          this.router.navigate(['/studentdashboard'])
        }
      }
      else {
        this.notificationService.onError([data.msg], 'Error');
      //  this.ngFlashMessageService.showFlashMessage({
      //   // Array of messages each will be displayed in new line
      //   messages: [data.msg], 
      //   // Whether the flash can be dismissed by the user defaults to false
      //   dismissible: true, 
      //   // Time after which the flash disappears defaults to 2000ms
      //   timeout: 4000,
      //   // Type of flash message, it defaults to info and success, warning, danger types can also be used
      //   type: 'danger'
      // });
        this.router.navigate(['/register']);
      }
    });

  }
  onLogoutClick(){
    this.authService.logout();
    this.notificationService.onInfo('Now You are Logged Out','Info');
    this.router.navigate(['']);
    return false;
  }
}
