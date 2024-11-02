import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] 
})
export class CartComponent {
  @Input() items: CartItem[] = [];
  @Input() total: number = 0;  
  @Output() idProductEventEmitter = new EventEmitter<number>();

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }
}

export class CartItem {
  quantity: number = 0;
  product!: Product;
}