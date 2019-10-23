import { Component, TemplateRef } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  public usrId = localStorage.getItem('currentUsr');

  private modalRef: BsModalRef;
  private navbarOpen = false;

  private loginForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.title = 'Troc It';
    }

  public logout() {
    this.authenticationService.logout();

    this.router.navigate(['']);

    // tslint:disable-next-line: deprecation
    setTimeout(location.reload.bind(location), 500);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
