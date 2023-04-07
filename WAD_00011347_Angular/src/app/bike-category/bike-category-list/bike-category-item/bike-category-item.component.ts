import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'app/bikes/category.model';


@Component({
  selector: 'app-bike-category-item',
  templateUrl: './bike-category-item.component.html',
  styleUrls: ['./bike-category-item.component.css']
})
export class BikeCategoryItemComponent implements OnInit {
  @Input() category: Category;
  @Input() index:number;

  ngOnInit() {
  }

}
