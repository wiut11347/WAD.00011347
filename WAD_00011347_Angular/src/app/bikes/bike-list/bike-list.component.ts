import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BikeService } from 'src/app/bike.service';
import { Bike } from '../bike.model';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css'],
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes!: Bike[];
  subscription: Subscription;
  constructor(
    private bikeService: BikeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const a = this.bikeService.fetchBikes();
    console.log(a);
  }
  onNewBike() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
