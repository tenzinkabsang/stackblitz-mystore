import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedProduct: Product | undefined;

  // Constructor is used to simply initialize dependencies. Actual work is done in Init.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    // Find the product that correspond with the id provided in route.
    this.selectedProduct = products.find(p => p.id == productIdFromRoute);
  }

  addToCart(product: Product) {
    if(!product) return;
    
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
