import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService) {
    this.cartService.productList
    .subscribe((products)=>{

      this.products = products;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  ngOnInit(): void {
    this.cartService.getProducts();
  }

  // remove item from cart
  removeItem(item : any) {
    this.cartService.removeCartItem(item);
  }

  // empty cart items
  emptycart() {
    this.cartService.removeAllCart();
  }

}
