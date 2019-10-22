import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})
export class NotifComponent implements OnInit {

  public usrId = localStorage.getItem('currentUsr');
  public items: Item[];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    /*
    this.items = new Array<Item>();
    console.log(localStorage.getItem('currentUsr'));
    this.itemService.findMyNotifs().subscribe(data => { // TODO My Notif request
      data.forEach(item => {
        const newItem = new Item().deserialize(item);
        this.items.push(newItem);
      });
    });
    */
  }

}
