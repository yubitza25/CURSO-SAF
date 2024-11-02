import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/producto.data';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor() { }

  findAll(): Product[] {
    return products;
  }
}
