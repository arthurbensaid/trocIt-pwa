import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-give-list',
  templateUrl: './give-list.component.html',
  styleUrls: ['./give-list.component.scss']
})
export class GiveListComponent implements OnInit {

  public items: Item[];

  /**
   * Item selected for update
   */
  public anItem: Item;

  /**
   * Displaying add Item form
   */
  public creatingItem: boolean;

  /**
   * Update form we'll pass to our task
   */
  private itemForm: FormGroup;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.items = new Array<Item>();
    console.log(localStorage.getItem('currentUsr'));
    this.itemService.findMyItems().subscribe(data => {
      data.forEach(item => {
        const newItem = new Item().deserialize(item);
        this.items.push(newItem);
      });
    });

    this.creatingItem = false;

  }

  /**
   * Check if there is an Item to update
   * @returns boolean
   */
  public hasItem(): boolean {
    return this.anItem ? true : false;
  }

  /**
   * Manage the update form for an Item
   * @param item Item object to be updated
   */
  public loadUpdateFormFor(item: Item) {
    console.log(this.hasItem());
    this.anItem = item;
    console.log(this.hasItem());
    console.log(this.anItem._title);
    // Invoke formBuilder method for this item
    this._setUpdateForm();
  }

  /**
   * Manage the form to add a new Item
   */
  public loadAddForm() {
    this.creatingItem = true;
    console.log(this.creatingItem);
    // Invoke formBuilder method
    this._setAddForm();
  }

  public remove(id: number) {
    console.log(id);
    this.itemService.delete(id).subscribe(
      res => {
        console.log(res); // Get the ID from backend...
        this.ngOnInit();
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  public receiveUpdateForm(formData: FormData): void {
    if (formData) {

      this.itemService.updatePicture(formData, this.anItem._id)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
    }
    this.anItem = null;
  }

  public receiveAddForm(formData: FormData): void {
    if (formData) {

      this.itemService.savePicture(formData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
    }
    this.creatingItem = false;
  }

  private _setUpdateForm(): void {
    if (this.anItem) {
      console.log(this.anItem._title);
      this.itemForm = this.formBuilder.group({
        title: [
          this.anItem._title,
          Validators.required,
        ],
        photo: [
          '',
          Validators.required,
        ],
        description: [
          this.anItem._description,
          Validators.required,
        ]
      });
    }
  }

  private _setAddForm(): void {
    this.itemForm = this.formBuilder.group({
      title: [
        '',
        Validators.required,
      ],
      photo: [
        '',
        Validators.required,
      ],
      description: [
        '',
        Validators.required,
      ]
    });
  }

}
