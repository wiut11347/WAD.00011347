import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Bike } from '../bike.model';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css'],
})
export class BikeEditComponent implements OnInit, OnDestroy
{
  id:number;
  editMode = false;
  bikeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    })
  }

  onSubmit(){
    if(this.editMode) {
      this.bikeService.updateBike(this.id, this.bikeForm.value).subscribe(response => {
        console.log(response);
        this.onCancel();
      });
    } else {
      this.bikeForm.patchValue({
        category: {
          id: Number(this.bikeForm.value.category.id)
        }
      })
      this.bikeService.addBike(this.bikeForm.value).subscribe(response => {
        console.log(response);
        this.onCancel();
      });
    }

  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  initForm() {
    const bike = localStorage.getItem('bike');
    if (bike) {
      this.bikeForm = new FormGroup({
        'id': new FormControl(0),
        'name': new FormControl('', Validators.required),
        'imagePath': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'price': new FormControl(0, Validators.required),
        'category': new FormGroup({
          id: new FormControl(0, Validators.required)
        })
      });
      const bikeObj = JSON.parse(bike);
      localStorage.removeItem('bike');
      this.editMode = true;
      this.bikeService.getBike(bikeObj.id).subscribe((response) => {
        const bike = response as Bike
        this.bikeForm.setValue({
          id: bike.id,
          name: bike.name,
          imagePath: bike.imagePath,
          description: bike.description,
          price: bike.price,
          category: {
            id: bike.category.id
          }
        });
      });
    } else {
      this.bikeForm = new FormGroup({
        'name': new FormControl('', Validators.required),
        'imagePath': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'price': new FormControl(0, Validators.required),
        'category': new FormGroup({
          id:new FormControl(0, Validators.required)
        })
      });
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('bike');
  }
}
