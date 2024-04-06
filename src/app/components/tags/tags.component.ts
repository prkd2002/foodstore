import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];
  listOfTags?:Tag[];

  @Input()
  justitfyContent:string = 'center';



  constructor(
    private foodService:FoodService
  ){

  }
  
  
  ngOnInit(): void {
    this.listOfTags = this.foodService.getAllTags();
    
  }
 

}
