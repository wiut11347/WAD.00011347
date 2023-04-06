import { Component, Input, OnInit } from '@angular/core';
import { Bike } from '../../bike.model';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {
  @Input() bike: Bike;
  @Input() index:number;
  
  ngOnInit(){
  }

}
