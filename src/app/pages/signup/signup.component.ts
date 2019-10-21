import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usr } from 'src/app/models/usr';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  public usr: Usr;
  public userForm: FormGroup;
  public selectedFile: File;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {  }

  /***
   * Controls getter
  */
  public get username(): AbstractControl {
    return this.userForm.controls.username;
  }

  public get password(): AbstractControl {
    return this.userForm.controls.password;
  }

  public get avatar(): AbstractControl {
    return this.userForm.controls.avatar;
  }

  public get email(): AbstractControl {
    return this.userForm.controls.email;
  }

  public get phone(): AbstractControl {
    return this.userForm.controls.phone;
  }

  public get town(): AbstractControl {
    return this.userForm.controls.town;
  }

  ngOnInit() {
    this.usr = new Usr();
    this._setForm();
  }

  private _setForm(): void {
    this.userForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      password: [
        '',
        Validators.required
      ],
      avatar: [
        '',
        Validators.required
      ],
      email: [
        '',
        Validators.required
      ],
      phone: [
        '',
        Validators.required
      ],
      town: [
        '',
        Validators.required,
      ]
    });
  }

  onFileSelect(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.userForm.patchValue({
          file: this.selectedFile
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
////////////////////////////////////////////////////////////////////////////////

  public submit() {
    const newUsr = new FormData();
    newUsr.append('username', this.username.value);
    newUsr.append('password', this.password.value);
    newUsr.append('avatar', this.selectedFile);
    newUsr.append('email', this.email.value);
    newUsr.append('phone', this.phone.value);
    newUsr.append('town', this.town.value);

    this.userService.savePicture(newUsr)
    .subscribe(
      res => {
        console.log(res);
        this.gotoUserList();
      },
      err => {
        console.log('Error occured');
      }
    );
  }

////////////////////////////////////////////////////////////////////////////////

  /*
  public submit() {
    console.log('Yo... Datas are: ' + JSON.stringify(this.userForm.value));

    console.log(this.username.value);

    this.usr._username = this.username.value;
    this.usr._password = this.password.value;
    this.usr._avatar = this.avatar.value;
    this.usr._email = this.email.value;
    this.usr._phone = this.phone.value;
    this.usr._town = this.town.value;

    this.userService.save(this.usr)
    .subscribe(
      res => {
        console.log(res); // Get the ID from backend...
        this.gotoUserList();
      },
      err => {
        console.log('Error occured');
      }
    );
  }
  */

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}

