import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Subscription } from 'rxjs';
import { Bike } from '../bike.model';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css'],
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes: Bike[];
  subscription: Subscription;
  constructor(
    private bikeService: BikeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bikeService.fetchBikes().subscribe(response=>{
      this.bikes = response as Bike[];
    });
    // console.log(a);
    // console.log('hello');
  }
  onNewBike() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
