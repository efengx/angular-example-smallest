import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../entity/user';
import {UserService} from '../../../service/user.service';
import { Router} from '@angular/router';
import {TableDatasource} from './table-datasource';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  datas: User[];
  constructor(
    private router: Router,
    private userSerivce: UserService
  ) { }

  // table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: TableDatasource;

  ngOnInit() {
    this.userSerivce.find().subscribe( users => {
      this.datas = users;
    });
    this.dataSource = new TableDatasource(this.paginator, this.sort);

    this.userSerivce.findUser().subscribe( users => {
      this.dataSource.data = users;
    });
  }

  openDetail(id: number) {
    this.router.navigateByUrl('/base/route-page/' + id);
  }
}
