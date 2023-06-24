import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { MaincodeService } from '../maincode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: Iproducts[] = products;
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private mainCode: MaincodeService) {
  }

  addToCart(obj: Iproducts) {
    alert("Tasty Pizza is in your cart!");
    this.mainCode.addToCart(obj);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.index = Number(params["index"]);
      this.product = products[this.index];
    })
  }
}
