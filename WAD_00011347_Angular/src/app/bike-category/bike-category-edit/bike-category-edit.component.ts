import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';
import { Category } from 'app/bikes/category.model';

@Component({
  selector: 'app-bike-category-edit',
  templateUrl: './bike-category-edit.component.html',
  styleUrls: ['./bike-category-edit.component.css'],
})
export class BikeCategoryEditComponent implements OnInit, OnDestroy
{
  id:number;
  editMode = false;
  categoryForm: FormGroup;

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
      this.bikeService.updateBikeCategory(this.id, this.categoryForm.value).subscribe(response => {
        this.onCancel();
      });
    } else {
      this.bikeService.addBikeCategory(this.categoryForm.value).subscribe(response => {
        this.onCancel();
      });
    }

  }
  onCancel(){
    this.router.navigate(['/categories'])
  }
  initForm() {
    const category = localStorage.getItem('category');
    if (category) {
      this.categoryForm = new FormGroup({
        'id': new FormControl(0),
        'name': new FormControl('', Validators.required),
        'electric': new FormControl(false, Validators.required),
      });
      const categoryObj = JSON.parse(category);
      localStorage.removeItem('category');
      this.editMode = true;
      this.bikeService.getBikeCategory(categoryObj.id).subscribe((response) => {
        const category = response as Category
        this.categoryForm.setValue({
          id: category.id,
          name: category.name,
          electric: category.electric,
        });
      });
    } else {
      this.categoryForm = new FormGroup({
        'name': new FormControl('', Validators.required),
        'electric': new FormControl(false, Validators.required),
      });
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('category');
  }
}
