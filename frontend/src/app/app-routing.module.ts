import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import { SingleComponent} from "./single/single.component";

const routes: Routes = [
  { path: 'table', component: TableComponent},
  { path: 'table/:id', component: SingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
