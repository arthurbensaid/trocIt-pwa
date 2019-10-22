import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-mylikes',
  templateUrl: './mylikes.component.html',
  styleUrls: ['./mylikes.component.scss']
})
export class MylikesComponent implements OnInit {

  items: Item[];

  constructor(
    private iServ: ItemService
  ) { }

  ngOnInit() {
    this.iServ.findMyLikedItems().subscribe(data => {
      this.items = data;
    });
  }

}
