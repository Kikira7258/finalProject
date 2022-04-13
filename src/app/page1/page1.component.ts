import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { Page1Service } from '../services/page1.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public productList: any;

  currentFilter?: string;
  

  // sl1
  ngOnInit(): void {
    // this.items.getProduct()
    // .subscribe(res=>{
    //   this.productList = res;


    //   this.productList.forEach((a:any) => {
    //     Object.assign(a, {quantity:1, total:a.price});
    //   })
    // })



    this.items.forEach((item: any)=>{
      item.id = this.generateItemsId()

    })



  }


  // use this method in html to add items to cart
  addtocart(item: any) {

    // cat service addtoCart
    this.cartService.addtoCart(item);
  }


  // sl2
  constructor(private categoryService:CategoryService, private cartService : CartService) { 
    this.categoryService.category$.subscribe((category) => {
      this.currentFilter = category
    })
  }

  

  get filteredItems() {
    if (this.currentFilter) {
      return this.items.filter((item) => item.category.includes(this.currentFilter!));
    }

    return this.items;
  }



  fillHeart(id?: string){
    return this.cartService.cartItemList.some((item: any)=>{
      return item.id === id
    })

  }


  

  // Generate a random number between 1bil and 1 mil
  generateItemsId() {
    let num = Math.floor(Math.random()*(1_000_000_000-1_000_000)+1_000_000)
    // function randomIntFromInterval(min,max){ return }
    return num.toString()
  }
  


  items = [
    
    {
      image: 'https://m.media-amazon.com/images/I/512UkW5TT7L._AC_UX679_.jpg',
      title: `EXLURA Women's Lantern Sleeve Tie Back Dress Ruffled Off Shoulder A-Line Vintage Mini Dress`,
      price: 38.99,
      ratings: 4.5,

      category: ['dresses'],

      id: this.generateItemsId()
    },
    {
      image: 'https://m.media-amazon.com/images/I/61rdh3B3GqL._AC_UX679_.jpg',
      title: `Women Girls Pleated Simple Skirt High Waist Mini Skater Tennis All Around Uniforms A-Line Skirt`,
      price: 9.19,
      ratings: 4,

      category: ['bottoms', 'bestSeller'],
      bestSeller: true,
    },
    {
      image: 'https://m.media-amazon.com/images/I/61auyB9oljL._AC_UL480_FMwebp_QL65_.jpg',
      title: `DREAM PAIRS Office-02 Women's Classy Mary Jane Double Ankle Strap Almond Toe High Heel Pumps New`,
      price: 24.99,
      ratings: 4.5,

      category: ['shoes', 'bestSeller'],
      bestSeller: true,

    },
    {
      image: 'https://i.pinimg.com/564x/ce/b1/2b/ceb12b2c79db5085aacd0eef05e8d4a1.jpg',
      title: `Leather Handbags`,
      price: 31.00,
      ratings: 5,

      category: ['bags', 'bestSeller'],
      bestSeller: true,

    },
    {
      image: 'https://m.media-amazon.com/images/I/71b-hYokD7L._AC_UY741_.jpg',
      title: `SweatyRocks Women's 2 Pieces Swimsuit High Waist Scalloped Trim Lace Up Bikini Set`,
      price: 22.89,
      ratings: 3.5,

      category: ['swimwear'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71OHXCyoAoL._AC_UY741_.jpg',
      title: `Dressystar Women Floral Lace Bridesmaid Party Dress Short Prom Dress V Neck`,
      price: 32.99,
      ratings: 4.5,

      category: ['dresses', 'bestSeller'],
      bestSeller: true,
    },
    {
      image: 'https://m.media-amazon.com/images/I/71pXO76bF5L._AC_UY500_.jpg',
      title: `Small Crossbody Bags Shoulder Bag for Women Stylish Ladies Messenger Bags Purse and Handbags Wallet`,
      price: 17.98,
      ratings: 4.5,

      category: ['bags', 'bestSeller'],
      bestSeller: true,
    },
    {
      image: 'https://m.media-amazon.com/images/I/61Qc-GxsNHL._AC_UX535_.jpg',
      title: `Dreubea Women's Leather Handbag Tote Shoulder Bag Crossbody Purse`,
      price: 20.99,
      ratings: 4.5,

      category: ['bags'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/819DkVbLrTL._AC_UX569_.jpg',
      title: `Romwe Women's Stretchy A Line Swing Flared Skater Cocktail Party Dress`,
      price: 29.99,
      ratings: 4,

      category: ['dresses'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71eUNLS6PgL._AC_UY500_.jpg',
      title: `W YOU DI AN Women Tankini Swimsuits Two Piece Bathing Suits Mesh Tummy Control Modest Swimwear with Boyshorts`,
      price: 31.99,
      ratings: 4.5,

      category: ['jewelry'],

    },
    {
      image: 'https://m.media-amazon.com/images/I/61MCSSGG22L._AC_UX569_.jpg',
      title: `Belle Poque Women Plaid Skirt Vintage High Waist Pleated Skirt with Pockets BPA020`,
      price: 21.99,
      ratings: 4.5,

      category: ['bottoms'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71P7LM5j3IL._AC_UX569_.jpg',
      title: `GRACE KARIN Women Bowknot Tie Waist Summer Casual Shorts with Pockets`,
      price: 18.99,
      ratings: 4,

      category: ['bottoms', 'bestSeller'],
      bestSeller: true,
    },
    {
      image: 'https://m.media-amazon.com/images/I/617oKfFMwqL._AC_UY535_.jpg',
      title: `KOLILI Women's Knit Slip On ss | Comfort Walking Shoes | Lightweight & Comfort`,
      price: 29.99,
      ratings: 5,

      category: ['shoes'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61HWR-vWJwL._AC_UX569_.jpg',
      title: `sheer blouse`,
      price: 22.99,
      ratings: 4,

      category: ['tops'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/51a3ySyOQeL._AC_SX679._SX._UX._SY._UY_.jpg',
      title: `ZAFUL Women's Crisscross Ruched High Waisted Bottom Bikini Set Two Piece Swimsuit Tankini`,
      price: 28.99,
      ratings: 4.5,

      category: ['swimwear'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61nt-nZyKEL._AC_UX522_.jpg',
      title: `CDE Forever Love Heart Bracelet 925 Sterling Silver with Birthstone Zirconia, Birthday Jewelry Gift for Girls Mother’s Day Gifts for Women Mom`,
      price: 59.99,
      ratings: 4.5,

      category: ['jewelry'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/619-c+NiU9L._AC_UY741_.jpg',
      title: `Dokotoo Womens Square Neck Summer Dress Tie Back Long Lantern Sleeve Ruffle A-Line Casual Mini Dress`,
      price: 30.99,
      ratings: 4,

      category: ['dresses'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61DsehnQscS._AC_UX679_.jpg',
      title: `EXLURA Women Tie Back Long Lantern Sleeve Square Neck Ruffle Dress Elastic Waist Aline Casual Mini Dress`,
      price: 30.99,
      ratings: 4.5,

      category: ['dresses'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61x7dFvbkVL._AC_UY741_.jpg',
      title: `Ever-Pretty Sleeveless V-Neck Semi-Formal Maxi Evening Dress 09016`,
      price: 56.99,
      ratings: 4,

      category: ['dresses'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71uUOsyOa4L._AC_SY741._SX._UX._SY._UY_.jpg',
      title: `Allegra K Women's Boho Swiss Dots Metallic Flared Layered Ruffle Mini Skirt`,
      price: 21.99,
      ratings: 4,

      category: ['bottoms'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61ztTiXLyYL._AC_UY535_.jpg',
      title: `Latasa Women's Lace up Block Heel Platform Ankle Boots`,
      price: 46.99,
      ratings: 4.5,

      category: ['shoes'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/91++9BwE9jL._AC_UX569_.jpg',
      title: `Daily Ritual Women's Supersoft Terry Standard-Fit Long-Sleeve Hooded Pullover`,
      price: 11.84,
      ratings: 4.5,

      category: ['tops'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61w8GrRBPNL._AC_SY741._SX._UX._SY._UY_.jpg',
      title: `Bathing Suit Cover Up`,
      price: 26.99,
      ratings: 4.5,

      category: ['swimwear'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/61tM3ySf7ML._AC_UX679_.jpg',
      title: `Hanes Women's Shirred V-Neck T-Shirt`,
      price: 6,
      ratings: 4,

      category: ['tops'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/81GeV6s6M9L._AC_UY500_.jpg',
      title: `Betsey Johnson Rose Dangle Earring`,
      price: 46.99,
      ratings: 4.5,

      category: ['jewelry'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71vK7iQHS0L._AC_UY535_.jpg',
      title: `Dress Platform High Heels`,
      price: 45.99,
      ratings: 4,

      category: ['shoes'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/71qQHk-z-bL._AC_UX679_.jpg',
      title: `Lee Women's Wrinkle Free Relaxed Fit Straight Leg Pant`,
      price: 30.06,
      ratings: 4,

      category: ['bottoms'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/714jhzYj3sL._AC_UY500_.jpg',
      title: `Betsey Johnson Pave Daisy Flower Dangle Earrings`,
      price: 42.00,
      ratings: 4.5,

      category: ['jewelry'],
    },
    {
      image: 'https://m.media-amazon.com/images/I/610tD85BWVL._AC_SX679._SX._UX._SY._UY_.jpg',
      title: `Yige Women's High Waist Flared Skirt Pleated Midi Skirt with Pocket`,
      price: 22.88,
      ratings: 4,

      category: ['bottoms'],
    },
  ]
  
  
  
  
  // Limit page number to 12 items
  limit = 12;
  skip = 0;

  changePage(page: number) {
    this.skip = (page - 1) * this.limit;
  }

  // Make page number dynamic
  pages = new Array(Math.ceil(this.items.length/ this.limit));

// ---------------------------------------------------------------


  







  // Right section

  special = [
    {
      image: 'https://m.media-amazon.com/images/I/61LF578lDHS._AC_UL1500_.jpg',
      title: 'Clear Purse Bag',
      price: 15.99,
      rating: 4.5
    },
    {
      image: 'https://m.media-amazon.com/images/I/91bt72gHxLS._AC_UY741_.jpg',
      title: '4 Pieces Glitter Jewelry Set',
      price: 11.59,
      rating: 3.5
    },
    {
      image: 'https://m.media-amazon.com/images/I/51DcFVEf2WS._AC_UX679_.jpg',
      title: 'DRESSTELLS Mini Skirts',
      price: 13.99,
      rating: 4,
      // discount: 13.99
    },
    {
      image: 'https://m.media-amazon.com/images/I/611LD6YhE1L._AC_UY535_.jpg',
      title: 'Lace Up Buckle Boots',
      price: 35.99,
      rating: 4.5
    },
    {
      image: 'https://m.media-amazon.com/images/I/71AKiTeRvAL._AC_UY741_.jpg',
      title: 'One Piece Swimsuit',
      price: 19.99,
      rating: 4.5
    },
  ]



}