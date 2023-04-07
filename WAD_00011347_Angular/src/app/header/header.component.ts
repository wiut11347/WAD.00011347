import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private bikeService: BikeService) {}

  ngOnInit() {
    // const someData = this.bikeService;
    //   .getData()
    //   .subscribe((data: any[]) => {
    //     this.data = data;
    //   });
    // console.log(someData);
  }

  onSaveData() {
    // this.bikeService.addBike();
  }

  onFetchData() {
    this.bikeService.fetchBikes();
    console.log('Fetched successfully');
  }
}
