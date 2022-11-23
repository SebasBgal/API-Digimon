import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigiDetailComponent } from './components/digi-detail/digi-detail.component';
import { DigiTableComponent } from './components/digi-table/digi-table.component';

const routes: Routes = [
  {path:"home",component: DigiTableComponent},
  {path:"DigiDetail/:name",component: DigiDetailComponent},
  {path:" ",pathMatch: "full", redirectTo:"home"},
  {path:"** ",pathMatch: "full", redirectTo:"home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
