import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../service/base.service';
import {Router} from '@angular/router';
import {User} from '../../entity/user';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  user: User = { username: '', password: '' };

  constructor(
    private baseService: BaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.baseService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigateByUrl('/login');
      }
    })
  }
}
