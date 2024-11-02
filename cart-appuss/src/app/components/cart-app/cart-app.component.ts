// cart-app.component.ts
import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent, CartItem } from "../cart/cart.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent, CommonModule],
  templateUrl: './cart-app.component.html',
  styleUrls: ['./cart-app.component.css']
})
export class CartAppComponent {
  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(private service: ProductoService) {}

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();
  }

  onAddCart(product: Product) {
    const hasItem = this.items.find((item) => item.product.id === product.id);
    if (hasItem) {
      this.items = this.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    } else {
      this.items = [...this.items, { product: { ...product }, quantity: 1 }];
    }
    this.calculateTotal();
    this.saveSession();
  }

  onDeleteCart(id: number) {
    this.items = this.items.filter((item) => item.product.id !== id);
    this.calculateTotal();
    this.saveSession();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((total, item) => total + item.product.price * item.quantity, 0); 
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
