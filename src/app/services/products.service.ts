import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public $products = new BehaviorSubject<any[]>([]);

constructor(
  // https://my.api.mockaroo.com/javascript-store-product.json?key=c1a35bd0

  private readonly http: HttpClient
) { }

  getProducts() {
    const api = 'https://my.api.mockaroo.com/javascript-store-product.json?key=c1a35bd0';
    this.http.get<any>(api)
      .subscribe(s => {
        this.$products.next(s);
        console.log({s});
      });
  }
}
