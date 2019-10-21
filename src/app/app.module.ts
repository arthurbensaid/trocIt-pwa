import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user-service';
import { SignUpComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GiveListComponent } from './give-list/give-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemService } from './services/item.service';
import { HomeComponent } from './pages/home/home.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AddItemComponent,
    GiveListComponent,
    LoginComponent,
    CatalogComponent,
    HomeComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ItemService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
