import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bike } from "./bikes/bike.model";

@Injectable()
export class BikeService{

  apiUrl = 'http://localhost:53683/api/bike';

  constructor(private http: HttpClient) {}

  addBikes(bike:Bike){
    return this.http.post(this.apiUrl, bike).subscribe(response=>response);
  }

  fetchBikes(){
    return this.http.get(this.apiUrl).subscribe(response=>response);
  }
}

