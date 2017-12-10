import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {UserModel} from '../../../core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInformation: UserModel;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserInformation('ante')
      .subscribe(res => this.userInformation = res,
        (err) => console.log(err),
        () => console.log('this.userInformation', this.userInformation));
  }

}
