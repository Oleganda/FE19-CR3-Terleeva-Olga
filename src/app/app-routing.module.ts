import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "details/:index", component: DetailsComponent
}, {
  path: "footer", component: FooterComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "**", redirectTo: ""
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
