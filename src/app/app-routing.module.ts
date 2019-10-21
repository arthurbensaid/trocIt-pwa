import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GiveListComponent } from './give-list/give-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  /*
  {
    path: 'additem', component: AddItemComponent
  },
  {
    path: 'updateitem', component: UpdateItemComponent
  },
  */
  {
    path: 'items', component: CatalogComponent
  },
  {
    path: 'myitems', component: GiveListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
