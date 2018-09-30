import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {

  @Input()
  columnHeaderList : string[] = [];
  @Input()
  columnList : string[] = [];
  @Input()
  dataList: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
