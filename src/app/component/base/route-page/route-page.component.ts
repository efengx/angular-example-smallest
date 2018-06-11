import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.scss']
})
export class RoutePageComponent implements OnInit {

  user: User = { username: '', password: ''};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.get(parseInt(id, 10)).subscribe(user => {
      this.user = user;
    })
  }

  update() {
    this.userService.patch(this.user).subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/base/page');
      } else {
        alert('update error')
      }
    });
  }
}
