import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

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
        tags:['SlowFood', 'Fry']

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
        tags:['Soup', 'SlowFood']

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
        tags:['SlowFood']

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
        tags:['Fry', 'SlowFood']

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
        tags:['FastFood','Fry']

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
        tags:['SLowFood']

      },
      {
        id:7,
        name:'Salade de Fruirs exotiques',
        price:25,
        cookTime:'30-45',
        favorite:false,
        origins:['Cameroon'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food7.jpg',
        tags:['Lunch']

      },
      {
        id:8,
        name:'Pizza',
        price:18,
        cookTime:'40-50',
        favorite:false,
        origins:['Cameroon'],
        stars:4.6,
        imageUrl:'/assets/images/foods/food8.jpg',
        tags:['FastFood','Pizza']

      },
      {
        id:9,
        name:'Hamburger',
        price:14,
        cookTime:'40-90',
        favorite:false,
        origins:['Cameroon'],
        stars:4.0,
        imageUrl:'/assets/images/foods/food9.webp',
        tags:['Hamburger', 'Fry']

      }



    ]

  }


  getAllFoodsByTag(tag:string):Food[]{
    return tag === 'AllFoods'?
     this.getAllFoods() :
     this.getAllFoods().filter(food => food.tags?.includes(tag));

    /*
    if(tag == 'All'){
      return this.getAllFoods();
    }else{
      return this.getAllFoods().filter(food => food.tags?.includes(tag))
    }
    */


  }

  getAllTags():Tag[]{
    return [
      {name:'AllFoods', count:9},
      {name: 'FastFood', count:3},
      {name:'Pizza',count:1},
      {name:'Lunch',count:1},
      {name:'SlowFood', count: 5 },
      {name:'Hamburger',count:1},
      {name:'Fry', count:4 },
      {name:'Soup',count: 1}
    ]

    
  }


  getAllFoodsBySearchItem(searchItem:string):Food[]{
    return searchItem === ''?
            this.getAllFoods():
            this.getAllFoods().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()));
  }
}
