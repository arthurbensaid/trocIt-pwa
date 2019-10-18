import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){
    
  }
   public show:boolean = false;
   public buttonName:any = 'Voir plus';
 
   ngOnInit() {
  }
 
   toggle() {
     this.show = !this.show;
 
     if(this.show)  
       this.buttonName = "Réduire";
     else
       this.buttonName = "Voir plus";
   }
}
