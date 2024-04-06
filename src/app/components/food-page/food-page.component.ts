import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { FoodService } from '../../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent implements OnInit {
  food!:Food;

  constructor(
    private foodService:FoodService,
    private route:ActivatedRoute
  ){

    /*
    this.route.params.subscribe(
      (params) =>{
        if(params['id']){
          this.food = this.foodService.getFoodById(params['id'])
        }
      }

    )
    */
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
        if(params['id']){
          this.food = this.foodService.getFoodById(params['id']);
        }
      }
    )
  
  }



}
