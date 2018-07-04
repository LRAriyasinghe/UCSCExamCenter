import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { NotificationService } from './services/notification.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthService } from './services/auth.service';
import { ExamService } from './services/exam.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UndergraduateComponent } from './components/undergraduate/undergraduate.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { PostgraduateComponent } from './components/postgraduate/postgraduate.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { StudentsidebarComponent } from './components/studentsidebar/studentsidebar.component';
import { StudentUndergraduateComponent } from './components/student-undergraduate/student-undergraduate.component';
import { UndergraduateExamRegistrationComponent } from './components/undergraduate-exam-registration/undergraduate-exam-registration.component';
import { Exam } from 'src/app/exam';
import { User } from 'src/app/user';
import { PostExam } from 'src/app/postexam';
import { UndergraduateViewRegistrationComponent } from './components/undergraduate-view-registration/undergraduate-view-registration.component';
import { PostgraduateExamRegistrationComponent } from './components/postgraduate-exam-registration/postgraduate-exam-registration.component';
import { UndergraduateExamSelectionComponent } from './components/undergraduate-exam-selection/undergraduate-exam-selection.component';
import { UndergraduateRepeatRegistrationComponent } from './components/undergraduate-repeat-registration/undergraduate-repeat-registration.component';
import { StudentPostgraduateComponent } from './components/student-postgraduate/student-postgraduate.component';
import { PostgraduateExamSelectionComponent } from './components/postgraduate-exam-selection/postgraduate-exam-selection.component';
import { PostgraduateViewRegistrationComponent } from './components/postgraduate-view-registration/postgraduate-view-registration.component';
import { UndergraduateRepeatComponent } from './components/undergraduate-repeat/undergraduate-repeat.component';
import { AdminSelectionUndergraduateComponent } from './components/admin-selection-undergraduate/admin-selection-undergraduate.component';
import { AdminReportGenerationComponent } from './components/admin-report-generation/admin-report-generation.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'admindashboard', component: AdmindashboardComponent},
  {path:'undergraduate', component: UndergraduateComponent},
  {path:'postgraduate', component: PostgraduateComponent},
  {path:'adminsidebar', component: AdminSidebarComponent},
  {path:'adminselectionundergraduate', component: AdminSelectionUndergraduateComponent},
  {path:'adminreportgeneration', component: AdminReportGenerationComponent},
  
  {path:'container', component: UndergraduateComponent},
  {path:'studentdashboard', component: StudentdashboardComponent},
  {path:'studentsidebar', component: StudentsidebarComponent},
  {path:'studentundergraduate', component: StudentUndergraduateComponent},
  {path:'studentpostgraduate', component: StudentPostgraduateComponent},

  {path:'undergraduateexamregistration', component: UndergraduateExamRegistrationComponent},
  {path:'undergraduateviewregistration', component: UndergraduateViewRegistrationComponent},
  {path:'undergraduateexamselection', component: UndergraduateExamSelectionComponent},
  {path:'undergraduaterepeatselection', component: UndergraduateRepeatRegistrationComponent},
  {path:'undergraduaterepeat', component: UndergraduateRepeatComponent},

  {path:'postgraduateexamregistration', component: PostgraduateExamRegistrationComponent},
  {path:'postgraduateexamselection', component: PostgraduateExamSelectionComponent},
  {path:'postgraduateviewregistration', component: PostgraduateViewRegistrationComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AdmindashboardComponent,
    UndergraduateComponent,
    AdminSidebarComponent,
    ContainerComponent,
    PostgraduateComponent,
    StudentdashboardComponent,
    StudentsidebarComponent,
    StudentUndergraduateComponent,
    UndergraduateExamRegistrationComponent,
    UndergraduateViewRegistrationComponent,
    PostgraduateExamRegistrationComponent,
    UndergraduateExamSelectionComponent,
    UndergraduateRepeatRegistrationComponent,
    StudentPostgraduateComponent,
    PostgraduateExamSelectionComponent,
    PostgraduateViewRegistrationComponent,
    UndergraduateRepeatComponent,
    AdminSelectionUndergraduateComponent,
    AdminReportGenerationComponent
    
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    SnotifyModule
   
  ],
  
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    NotificationService,
    ValidateService, 
    ExamService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
