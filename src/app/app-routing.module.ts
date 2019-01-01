import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component'
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
