import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikesComponent } from './bikes/bikes.component';

const routes: Routes = [
  {path:'', component: BikesComponent},
  {path:'new', component:BikeEditComponent},
  {path:'detail', component:BikeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
