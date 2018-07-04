import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  style = 'material';
 
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.rightBottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) { }

  /*
  Change global configuration
   */
  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }

  onSuccess(body,title) {
    this.snotifyService.success(body, title, this.getConfig());
  }
  onInfo(body,title) {
    this.snotifyService.info(body, title, this.getConfig());
  }
  onError(body,title) {
    this.snotifyService.error(body, title, this.getConfig());
  }
  onWarning(body,title) {
    this.snotifyService.warning(body, title, this.getConfig());
  }
  onSimple(body,title) {

    // const icon = `assets/custom-svg.svg`;
    const icon = `https://placehold.it/48x100`;

    this.snotifyService.simple(body, title, {
      ...this.getConfig(),
      icon: icon
    });
  }
}
