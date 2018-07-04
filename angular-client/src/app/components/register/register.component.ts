import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  indexno: String;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  subjects = [];

  constructor(
    private validateService: ValidateService,
    private ngFlashMessageService: NgFlashMessageService,
    private snotifyService: SnotifyService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      indexno: this.indexno,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      subjects: this.subjects
    }
     //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please fill in all fields"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    //validate email
    if(!this.validateService.validateEmail(user.email)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please use a valid email"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }
    //Register User
   this.authService.registerUser(user).subscribe(data => {
    if(data.success){
      console.log('OK')
        this.notificationService.onSuccess('Successfully Registered, Please LogIn with Username and Password','Success');
     this.router.navigate(['/']);
    }else{
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Something went wrong"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
     this.router.navigate(['/register']);
    }
  });

}
}
