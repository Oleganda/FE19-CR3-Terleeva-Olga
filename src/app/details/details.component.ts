import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { MaincodeService } from '../maincode.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  products: Iproducts[] = products;
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private mainCode: MaincodeService) {

  }

  addToCart() {
    alert("Tasty Pizza is in your cart!");
    this.mainCode.addToCart(this.product);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.index = Number(params["index"]);
      this.product = products[this.index];
    })
  }
}
