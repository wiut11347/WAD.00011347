import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Bike } from "./bikes/bike.model";

@Injectable({
  providedIn: 'root'
})
export class BikeService{
  bikesChanged = new Subject<Bike[]>;

  apiUrl = 'http://localhost:53683/api/bike';
  bikes: Bike[] = [];

  constructor(private http: HttpClient) {}

  addBike(bike: Bike){
    return this.http.post(this.apiUrl, bike).subscribe(response=> response);
  }
  getBikes(){
    return this.bikes.slice();
  }


  fetchBikes(){
    return this.http.get(this.apiUrl);
  }

  updateBike(index:number, newBike: Bike){
    this.bikes[index] = newBike;
    this.bikesChanged.next(this.bikes.slice());
  }
}

