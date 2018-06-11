import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  dataSource: User[];
  constructor(
    private router: Router,
    private userSerivce: UserService
  ) { }

  ngOnInit() {
    this.userSerivce.find().subscribe( users => {
      this.dataSource = users;
    });
  }

  openDetail(id: number) {
    this.router.navigateByUrl('/base/route-page/' + id);
  }

}
