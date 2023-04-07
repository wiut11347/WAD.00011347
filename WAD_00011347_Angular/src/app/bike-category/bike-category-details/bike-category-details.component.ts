import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Category } from 'app/bikes/category.model';

@Component({
  selector: 'app-bike-category-details',
  templateUrl: './bike-category-details.component.html',
  styleUrls: ['./bike-category-details.component.css'],
})
export class BikeCategoryDetailsComponent implements OnInit {
  category: Category;
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
      this.bikeService.getBikeCategory(this.id).subscribe(category => {
        this.category = category as Category;
        localStorage.setItem('category', JSON.stringify(this.category));
        this.loading = false;
      });
    });
  }

  deleteBike(id: number) {
    this.bikeService.deleteBikeCategory(id).subscribe(response => {
      localStorage.removeItem('category');
      this.router.navigate(['/']);
    });
  }
}
