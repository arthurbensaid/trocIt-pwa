import { Component, OnInit } from '@angular/core';
import { WorldItemsService } from 'src/app/services/world-items.service';

import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[];
  public show: boolean= false;
  public buttonName: String = 'show';

  constructor(private iServ: WorldItemsService) { }

  ngOnInit() {
    this.iServ.findAll().subscribe(data => {
      this.items = data;
    });
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Réduire";
    else
      this.buttonName = "Voir plus";
  }
}
