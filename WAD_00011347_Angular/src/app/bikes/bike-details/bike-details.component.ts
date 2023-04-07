import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Bike } from '../bike.model';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css'],
})
export class BikeDetailsComponent implements OnInit {
  bike!: Bike;
  id: number;
  loading = false;

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.bikeService.getBike(this.id).subscribe(bike => {
        this.bike = bike as Bike;
        localStorage.setItem('bike', JSON.stringify(this.bike));
        this.loading = false;
      });
    });
  }

  deleteBike(id: number) {
    this.bikeService.deleteBike(id).subscribe(response => {
      localStorage.removeItem('bike');
      this.router.navigate(['/']);
    });
  }
}
