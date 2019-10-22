import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveListComponent } from './give-list/give-list.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MylikesComponent } from './pages/mylikes/mylikes.component';
import { NotifComponent } from './pages/notif/notif.component';


const routes: Routes = [
  {
    path: '', component: CatalogComponent
  },
  {
    path: 'mylikes', component: MylikesComponent
  },
  {
    path: 'myitems', component: GiveListComponent
  },
  {
    path: 'mynotifs', component: NotifComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
