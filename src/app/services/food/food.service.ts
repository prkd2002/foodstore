import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getALL():String[]{
    return [
      '/assets/images/foods/food1.jpg',
      '/assets/images/foods/food2.jpg',
      '/assets/images/foods/food3.jpeg',
      '/assets/images/foods/food4.jpeg',
      '/assets/images/foods/food5.jpg',
      '/assets/images/foods/food6.jpg'
    ]

  }
}
