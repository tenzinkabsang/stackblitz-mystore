import { Component } from '@angular/core';

import { products } from '../product';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert("The product has been shared!");
  }

  onNotify(p: Product) {
    window.alert("Event handled in Parent component " + p.name + " will be notifiedXXX");
  }
}
