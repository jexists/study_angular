import { Component } from '@angular/core';
import { Product } from './core/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-app';
  // product: Product;
  products: Product[]; // 배열

  constructor(

  ) {

    // let newProduct = new Product(
    //   'Nicehat',
    //   'a nice black hat',
    //   '/assets/images/products/black-hat/jpg',
    //   ['man', 'hats', 'accessories'],
    //   29.99
    // );

    // this.product = newProduct
    // this.product = new Product(
    //   'Nicehat',
    //   'a nice black hat',
    //   '/assets/images/products/black-hat/jpg',
    //   ['man', 'hats', 'accessories'],
    //   29.99
    // );

    this.products = [
      new Product(
        'NiceHat',
        'a nice black hat',
        '/assets/images/products/black-hat/jpg',
        ['man', 'hats', 'accessories'],
        29.99
      ),
      new Product(
        'MyShoes',
        'black running shoes',
        '/assets/images/products/black-shoes/jpg',
        ['man', 'shoes', 'running shoes'],
        108.99
      ),
      new Product(
        'NeatoJacket',
        'blue jacket',
        '/assets/images/products/blue-jacket/jpg',
        ['women', 'jacket', 'apparel'],
        29.99
      ),
    ];
  }


  prouctSelected(product: Product) {
    console.log(product);
    
  }
}
