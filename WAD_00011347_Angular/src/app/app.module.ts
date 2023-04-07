import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeCategoryComponent } from './bike-category/bike-category.component';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikesComponent } from './bikes/bikes.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikesComponent,
    BikeListComponent,
    BikeDetailsComponent,
    BikeEditComponent,
    BikeCategoryComponent,
    BikeItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
