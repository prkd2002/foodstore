import { CartItem } from "./Cartitem";

export class Cart{
    listOfItems:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.listOfItems.forEach(item =>{
            totalPrice += item.food.price;
        });
        return totalPrice;


    }
    

}