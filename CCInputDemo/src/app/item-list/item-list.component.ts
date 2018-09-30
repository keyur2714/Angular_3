import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemHeaderList : string[] = ["Code","Desc","Unit Price"];
  columnList : string[] = ["code","desc","unitPrice"];
  itemList : Item[] = [];

  constructor() { }

  ngOnInit() {
    let item1 = new Item();
    item1.id = 10;
    item1.code = "KB";
    item1.desc = "Key Board";
    item1.unitPrice = 1100;
    let item2 = new Item();
    item2.id = 20;
    item2.code = "MO";
    item2.desc = "Mouse";
    item2.unitPrice = 700;
    let item3 = new Item();
    item3.id = 30;
    item3.code = "MON";
    item3.desc = "Monitor";
    item3.unitPrice = 3200;

    this.itemList.push(item1);
    this.itemList.push(item2);
    this.itemList.push(item3);
  }

}
