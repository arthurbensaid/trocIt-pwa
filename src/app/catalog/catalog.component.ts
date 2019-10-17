import { Component, OnInit } from '@angular/core';
import { WorldItemsService } from '../services/world-items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];

  constructor(private iServ: WorldItemsService) { }

  ngOnInit() {
    this.iServ.findAll().subscribe(data => {
      this.items = data;
    });
  }

  public like(id: number) {
    console.log(id);
    this.iServ.like(id).subscribe(
      res => {
        console.log(res); // Get the item ID from backend...
      },
      err => {
        console.log('Error occured');
      }
    );

    this.iServ.isMatch(id).subscribe(
      res => {
        console.log(res); // Get the Boolean from backend...
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
