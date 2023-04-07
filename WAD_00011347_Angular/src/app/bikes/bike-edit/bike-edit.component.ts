import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BikeService } from 'app/bike.service';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css'],
})
export class BikeEditComponent implements OnInit
{
  id:number;
  editMode = false;
  bikeForm: FormGroup;

  get bikeControls(){
    return (this.bikeForm.get('categories') as FormArray).controls
  }

  constructor(
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private router: Router
  ) {}

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editMode = params['id']!=null;
      this.initForm();
    })
  }

  onSubmit(){
    if(this.editMode){
      this.bikeService.updateBike(this.id, this.bikeForm.value);
    }else{
      this.bikeService.addBike(this.bikeForm.value);
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  initForm(){

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
