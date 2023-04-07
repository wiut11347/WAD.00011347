import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Bike } from "./bikes/bike.model";
import { Category } from "./bikes/category.model";

@Injectable({
  providedIn: 'root'
})
export class BikeService{
  bikesChanged = new Subject<Bike[]>;

  apiUrl = 'http://localhost:53683/api/bike';

  constructor(private http: HttpClient) {}

  addBike(bike: Bike){
    return this.http.post(this.apiUrl, bike);
  }

  getBike(id: number){
    return this.http.get(this.apiUrl + '/' + id);
  }

  fetchBikes(){
    return this.http.get(this.apiUrl);
  }

  updateBike(index:number, newBike: Bike){
    return this.http.put(this.apiUrl + '/' + index, newBike);
  }

  deleteBike(index: number) {
    return this.http.delete(this.apiUrl + '/' + index);
  }


  addBikeCategory(bikecategory: Category){
    return this.http.post(this.apiUrl + 'category/', bikecategory);
  }

  getBikeCategory(id: number) {
    return this.http.get(this.apiUrl + 'category/' + id);
  }

  fetchBikeCategories() {
    return this.http.get(this.apiUrl + 'category');
  }

  updateBikeCategory(index:number, newBikeCategory: Bike){
    return this.http.put(this.apiUrl + 'category/' + index, newBikeCategory);
  }

  deleteBikeCategory(index: number) {
    return this.http.delete(this.apiUrl + 'category/' + index);
  }

}

