import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String;

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.title = 'Troc It';
    }
  public logout() {
    this.authenticationService.logout();
  }
}
