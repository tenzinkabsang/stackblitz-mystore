import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[]  = [];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    // process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.warn('Name: ', this.checkoutForm.value.name);
    console.warn('Address: ', this.checkoutForm.value.address);
    this.checkoutForm.reset();
  }
}
