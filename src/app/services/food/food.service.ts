import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():Food[]{
    return [
      {
        id:1,
        name:'Poulet rotis plus pommes frits',
        price:12,
        cookTime:'10-20',
        favorite:false,
        origins:['Germany'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food1.jpg',
        tags:['FasFood','Fry']

      },
      {
        id:2,
        name:'Bouillons de poissons',
        price:20,
        cookTime:'40-60',
        favorite:false,
        origins:['Cameroon'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food2.jpg',
        tags:['FasFood','Fry']

      },
      {
        id:3,
        name:'Plantain sauce pistache',
        price:19,
        cookTime:'40-60',
        favorite:true,
        origins:['Cameroon'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food3.jpeg',
        tags:['FastFood','Fry']

      },
      {
        id:4,
        name:'Carpe braise avec plantains frits',
        price:18,
        cookTime:'40-60',
        favorite:true,
        origins:['Cameroon'],
        stars:4.6,
        imageUrl:'/assets/images/foods/food4.jpg',
        tags:['FasFood','Fry']

      },
      {
        id:5,
        name:'Poissons frits avec du plantains frits et du plantains tapes',
        price:25,
        cookTime:'60-80',
        favorite:false,
        origins:['Cameroon'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food5.jpeg',
        tags:['FasFood','Fry']

      },
      {
        id:6,
        name:'Ndole avec des crevettes fraiches',
        price:25,
        cookTime:'40-90',
        favorite:false,
        origins:['Cameroon'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food6.jpg',
        tags:['FasFood','Fry']

      }



    ]

  }
}
