import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Category } from 'app/bikes/category.model';

@Component({
  selector: 'app-bike-category-list',
  templateUrl: './bike-category-list.component.html',
  styleUrls: ['./bike-category-list.component.css'],
})
export class BikeCategoryListComponent implements OnInit {
  categories: Category[]
  constructor(
    private bikeService: BikeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bikeService.fetchBikeCategories().subscribe(response=>{
      this.categories = response as Category[];
    });
  }
  onNewBikeCategory() {
    this.router.navigate(['/newcategory'], { relativeTo: this.route });
  }
}
