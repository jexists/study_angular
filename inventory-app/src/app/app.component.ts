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
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];

    // console.log(this.products);

  }


  prouctSelected(product: Product) {
    console.log(product);

  }
}
