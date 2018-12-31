import { Component, OnInit, NgModule } from '@angular/core';
import {AppComponent} from '../app.component'
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [MatSidenavModule]
})
@Component({
  selector: 'app-sidenav-autosize',
  templateUrl: './sidenav-autosize.component.html',
  styleUrls: ['./sidenav-autosize.component.css']
})
export class SidenavAutosizeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
