import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { MaincodeService } from '../maincode.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Iproducts[] = [];
  total: number = 0;
  tip: number = 0;
  totalAmount: number = 0;
  newTotal: number = 0;

  constructor(private mainCode: MaincodeService) {

  }
  ngOnInit(): void {
    this.cart = this.mainCode.getItems();
    this.total = this.mainCode.calculateTotal();
    this.tip = this.mainCode.calculateTips();
    this.totalAmount = this.mainCode.calculateTotalAmount();
    this.newTotal = this.mainCode.newTotalAmount();
  }


  info = new FormGroup({
    yourName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });


  onSubmit() {
    if (this.info.valid) {
      alert("Thank you! Your pizza is on the way")
    }
    else {
      alert("Please fill required information")
    }
    this.info.reset();
  }

}
