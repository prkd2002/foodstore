import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    let cartItem = this.cart.listOfItems.find(item => item.food.id === food.id );
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity + 1);
      return;
    }else{
      this.cart.listOfItems.push(new CartItem(food));

    }

    
  }

  removeFromCart(foodId:number){
    this.cart.listOfItems = this.cart.listOfItems.filter(cartItem => cartItem.food.id != foodId);

  }


  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.listOfItems.find(item => item.food.id === foodId);
    if(!cartItem){
      return ;
    }
    cartItem.quantity = quantity;

  }


  getCart():Cart{
    return this.cart;

  }
  

  constructor() { }
}
