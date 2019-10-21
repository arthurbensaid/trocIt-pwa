import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  /**
   * Input attribute from the parent directive [itemForm]
   */
  @Input() public itemForm: FormGroup;

  public selectedFile: File;

  @Output() addItemEvent: EventEmitter<FormData> = new EventEmitter<FormData>();

  /*
  public item: Item;
  public itemForm: FormGroup;
  public categorySet: Array<string>;
  */

  constructor(
    /*
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    */
    private cd: ChangeDetectorRef
  ) { }

  /***
   * Controls getter
  */
 public get title(): AbstractControl {
  return this.itemForm.controls.title;
}

public get photo(): AbstractControl {
  return this.itemForm.controls.photo;
}

public get description(): AbstractControl {
  return this.itemForm.controls.description;
}

/*
public get categories(): AbstractControl {
  return this.itemForm.controls.categories;
}
*/

  ngOnInit() {
    /*
    this.item = new Item();
    this.categorySet = ['Book', 'Video Game', 'Board Game'];
    console.log(this.categorySet);
    this._setForm();
    */
  }

  /*
  private _setForm(): void {
    this.itemForm = this.formBuilder.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      photo: [
        '',
        Validators.required,
      ],
      description: [
        '',
        Validators.required,
      ]
      /*
      ,
      categories: [
        '',
        Validators.required,
      ]
    });
  }
  */

  onFileSelect(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.itemForm.patchValue({
          file: this.selectedFile
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
////////////////////////////////////////////////////////////////////////////////

  public submit() {
    const newItem = new FormData();
    newItem.append('title', this.title.value);
    newItem.append('photo', this.selectedFile);
    newItem.append('description', this.description.value);
    /*
    newItem.append('categories', this.categories.value);
    */

    this.addItemEvent.emit(newItem);

    /*
    this.itemService.savePicture(newItem)
    .subscribe(
      res => {
        console.log(res);
        this.gotoGiveList();
      },
      err => {
        console.log('Error occured');
      }
    );
    */
  }

  public dismiss() {
    this.addItemEvent.emit(null);
  }

////////////////////////////////////////////////////////////////////////////////
/*
  public submit() {
    console.log('Yo... Datas are: ' + JSON.stringify(this.itemForm.value));

    console.log(this.title.value);

    this.item._title = this.title.value;
    this.item._photo = this.photo.value;
    this.item._description = this.description.value;

    this.itemService.save(this.item)
    .subscribe(
      res => {
        console.log(res); // Get the ID from backend...
        this.gotoGiveList();
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  gotoGiveList() {
    this.router.navigate(['/myitems']);
  }
  */

}
