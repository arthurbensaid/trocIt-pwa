import { Component, OnInit, TemplateRef } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // private modalRef: BsModalRef;
  // navbarOpen: boolean;

  items: Item[];
  private modalRef: BsModalRef;

  /**
   * Item selected
   */
  public currentItem: Item;

  constructor(
    private iServ: ItemService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.items = new Array<Item>();
    console.log(localStorage.getItem('currentUsr'));
    this.iServ.findMyItems().subscribe(data => {
      data.forEach(item => {
        const newItem = new Item().deserialize(item);
        this.items.push(newItem);
      });
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

  /*
  toggleNavbar() {
this.navbarOpen = !this.navbarOpen;
  }
  */

  openModal(template: TemplateRef<any>, item: Item) {
    this.currentItem = item;
    this.modalRef = this.modalService.show(template);
  }

}
