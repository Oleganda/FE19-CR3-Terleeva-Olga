import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class MaincodeService {
  cart: Iproducts[] = [];
  constructor() { }

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;

  }

  // function count items in the cart and put value in badge

  lengthOfCart() {
    return this.cart.length;
  }

  // functions calculate total Amount, Tips and Total Amount of items in the cart

  calculateTotal() {
    let total = 0;
    for (let val of this.cart) {
      total = total + val.price;
    }
    return total;
  }

  calculateTips() {
    let tip = 0;
    for (let val of this.cart) {
      tip += val.price * 0.1;
    }
    return Math.round(tip);
  }

  calculateTotalAmount() {
    const total = this.calculateTips();
    const tips = this.calculateTotal();
    return total + tips;
  }

  newTotalAmount() {
    const newtotal = this.calculateTotalAmount();
    return Math.round(newtotal * 0.85);

  }

}
