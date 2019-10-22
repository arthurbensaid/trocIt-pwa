import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user-service';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GiveListComponent } from './give-list/give-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemService } from './services/item.service';
import { UpdateItemComponent } from './pages/update-item/update-item.component';
import { AuthenticationService } from './services/authentication.service';
import { NotifComponent } from './pages/notif/notif.component';
import { ModalModule } from 'ngx-bootstrap';
import { MylikesComponent } from './pages/mylikes/mylikes.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignUpComponent,
    AddItemComponent,
    GiveListComponent,
    LoginComponent,
    CatalogComponent,
    UpdateItemComponent,
    NotifComponent,
    MylikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService, ItemService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
