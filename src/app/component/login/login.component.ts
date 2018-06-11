import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = { username: '', password: '' };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  // event
  login() {
    if (!this.user.username) {
      alert('username is not null');
    } else if (!this.user.password) {
      alert('password is not null');
    } else {
      this.userService.login(this.user).subscribe(user => {
        if (user) {
          this.router.navigateByUrl('base');
          // alert('success');
        } else {
          alert('username or password error ');
        }
      });
    }
  }
}
