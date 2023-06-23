import { Component, DoCheck } from '@angular/core';
import { MaincodeService } from '../maincode.service';
import { Iproducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  items: Iproducts[] = products;
  number: number = 0;
  constructor(private MC: MaincodeService) {

  }
  ngDoCheck(): void {
    this.number = this.MC.lengthOfCart();
  }

}
