import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  listOfFoods:String[] = [];

  constructor(private foodService:FoodService){

  }
  ngOnInit(): void {
    this.listOfFoods = this.foodService.getALL();
  }

}
