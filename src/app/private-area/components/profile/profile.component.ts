import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {UserModel} from '../../../core/models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInformation: UserModel;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear: boolean;

  constructor(private userService: UserService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.userService.getUserInformation(localStorage.getItem('username'))
      .subscribe(res => this.userInformation = res,
        (err) => console.log(err),
        () => console.log('this.userInformation', this.userInformation));
  }

}
