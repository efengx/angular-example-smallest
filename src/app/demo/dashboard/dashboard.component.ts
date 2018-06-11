import {Component, Input, OnInit} from '@angular/core';
import {DashboardService} from './service/dashboard.service';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileDatabaseService} from './service/file-database.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {FileNode} from './entity/file-node';
import {FileFlatNode} from './entity/file-flat-node';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FileDatabaseService]
})
export class DashboardComponent implements OnInit {
  @Input() test: string;

  // card 1
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  // card 2
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  // card 6
  panelOpenState: boolean = false;

  // card 7
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // card 9
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;


  cards: Observable<any>;
  constructor(
    private _formBuilder: FormBuilder,      // card 7
    private dashboardService: DashboardService,
    private database: FileDatabaseService,  // card 9
  ) {
    // card 9
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {
    this.dashboardService.getCard().subscribe(card => (this.cards = card));

    // card 7
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // card 9
  transformer = (node: FileNode, level: number) => {
    let flatNode = new FileFlatNode();
    flatNode.filename = node.filename;
    flatNode.type = node.type;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    return flatNode;
  };
  private _getLevel = (node: FileFlatNode) => { return node.level; };
  private _isExpandable = (node: FileFlatNode) => { return node.expandable; };
  private _getChildren = (node: FileNode): Observable<FileNode[]> => {
    return of(node.children);
  };
  hasChild = (_: number, _nodeData: FileFlatNode) => { return _nodeData.expandable; };
}
