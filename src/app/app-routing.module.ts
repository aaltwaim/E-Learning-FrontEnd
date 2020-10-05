import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'category', component:CategoryComponent
  },
  {
    path:'**', component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
