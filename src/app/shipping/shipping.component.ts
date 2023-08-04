import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';
import { ShippingData } from '../product';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  shippingCosts! : Observable<ShippingData[]>;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

