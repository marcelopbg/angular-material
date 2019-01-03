import { Component, OnInit, AfterContentChecked } from '@angular/core';

export interface PeriodicElement {
  name: string;
  manufacturingDate: string;
  expirationDate: string;
  price: string;
  quantity: string;
  type: string;
}
var itensList = localStorage.getItem('itensList')
var itens = JSON.parse(itensList);
console.log(itens);

const ELEMENT_DATA: PeriodicElement[] = [
  itens
]
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterContentChecked {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;
/*   itensList = new Array()
  constructor() { } */
/* 
  ngOnInit() {
    var itensList = localStorage.getItem('itensList')
     this.itensList = JSON.parse(itensList);
    console.log(this.itensList);
  } */
ngAfterContentChecked() {
  console.log('test', this.dataSource);
  
}
}
