import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  dataSource: User[] = [];

  displayedColumns = ['id', 'name', 'age'];

  constructor() { }

  ngOnInit() {}

}
