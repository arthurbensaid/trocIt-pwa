import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  /**
   * Input attribute from the parent directive [itemForm]
   */
  @Input() public itemForm: FormGroup;
  // @Input() public anItem: Item;

  @Output() updateItemEvent: EventEmitter<FormData> = new EventEmitter<FormData>();

  // public item: Item;
  // public itemForm: FormGroup;
  public selectedFile: File;

  constructor(
    // private formBuilder: FormBuilder,
    // private itemService: ItemService,
    // private router: Router,
    // private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {

    /*
    this.item = new Item();

    this.route.queryParams.subscribe(params => {
      console.log(params.itemId);

      this.item._id = params.itemId;
      this.item._title = params.itemTitle;
      this.item._photo = params.itemPhoto;
      this.item._description = params.itemDescription;
  });
  */
  }

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

    this.updateItemEvent.emit(newItem);

    /*
    this.itemService.updatePicture(newItem, this.item._id)
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
    this.updateItemEvent.emit(null);
  }

  /*
  private _setForm(): void {

    this.itemForm = this.formBuilder.group({
      title: [
        this.item._title,
        [Validators.required, Validators.minLength(3)]
      ],
      photo: [
        this.item._photo
      ],
      description: [
        this.item._description,
        Validators.required,
      ]
    });
  }
  */

  ////////////////////////////////////////////////////////////////////////////////

  /*
  gotoGiveList() {
    this.router.navigate(['/myitems']);
  }
  */

  ngOnInit() {
    /*
    this._setForm();
    console.log('updating is taking place');
    console.log('updating' + this.item._title);
    */
  }

}
