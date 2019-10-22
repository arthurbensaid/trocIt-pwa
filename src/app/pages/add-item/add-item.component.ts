import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  constructor(
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
    /*
    newItem.append('categories', this.categories.value);
    */

    this.addItemEvent.emit(newItem);

  }

  public dismiss() {
    this.addItemEvent.emit(null);
  }

}
