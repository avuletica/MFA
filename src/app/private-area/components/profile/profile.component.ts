import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {UserModel} from '../../../core/models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.userInformation = this.route.snapshot.data['userData'];

  }

}
