import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  listOfFoods:Food[] = [];

  constructor(
    private foodService:FoodService,
    private route:ActivatedRoute
    ){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        if(params['searchTerm']){
          this.listOfFoods = this.foodService.getAllFoods().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        }else{
          this.listOfFoods = this.foodService.getAllFoods();

        }

      }
    )

  }

}
