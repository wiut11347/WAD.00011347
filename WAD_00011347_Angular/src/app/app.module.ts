import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikeCategoryComponent } from './bike-category/bike-category.component';
import { BikeService } from './bike.service';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';

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
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
