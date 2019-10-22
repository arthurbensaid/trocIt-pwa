import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Item } from 'src/app/models/item';

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

  @Input() anItem: Item;

  @Output() updateItemEvent: EventEmitter<FormData> = new EventEmitter<FormData>();

  public selectedFile: File;

  constructor(
    private cd: ChangeDetectorRef
  ) {
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

  public submit() {
    const newItem = new FormData();
    newItem.append('title', this.title.value);
    newItem.append('photo', this.selectedFile);
    newItem.append('description', this.description.value);

    this.updateItemEvent.emit(newItem);
  }

  public dismiss() {
    this.updateItemEvent.emit(null);
  }

  ngOnInit() {
  }

}
