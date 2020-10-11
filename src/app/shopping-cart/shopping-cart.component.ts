import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart = new BehaviorSubject<any[]>([]);
  constructor(
    private readonly productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.productService.$products.subscribe(res => {
      this.cart.next(res);
    });

  }

}
