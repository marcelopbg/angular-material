import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavAutosizeComponent } from './sidenav-autosize/sidenav-autosize.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavAutosizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidenavAutosizeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
