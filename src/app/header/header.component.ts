import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // add to cart visual number representation
  // store the total number on item - 1 --
  public totalItem : number = 0;
  constructor(private router: Router, private cartService : CartService) { }


// hide NavBar when viewing cart
  currentRoute?:string;

  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.slice(1)
      }
    })


    this.cartService.productList
    .subscribe(res=>{
      // --to display them here - 2 --
      this.totalItem = res.length;
    })
  }

}
