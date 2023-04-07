import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeCategoryDetailsComponent } from './bike-category/bike-category-details/bike-category-details.component';
import { BikeCategoryEditComponent } from './bike-category/bike-category-edit/bike-category-edit.component';
import { BikeCategoryComponent } from './bike-category/bike-category.component';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikesComponent } from './bikes/bikes.component';

const routes: Routes = [
  {path:'', component: BikesComponent},
  {path:'new', component:BikeEditComponent},
  {path:'bike/detail/:id', component: BikeDetailsComponent},
  {path:'categories', component: BikeCategoryComponent},
  {path:'newcategory', component: BikeCategoryEditComponent},
  {path:'category/detail/:id', component: BikeCategoryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
