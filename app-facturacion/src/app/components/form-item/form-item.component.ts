import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {
@Output() addItemEventEmitter = new EventEmitter();
 private counterId = 4;

 item: any = {
  product: '',
  price: '',
  quantity: ''
  }
 
  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {
   
    this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
    this.counterId++;
   
    this.item = {
    product: '',
    price: '',
    quantity: ''
    };
    itemForm.reset();
    itemForm.resetForm();
    }
    }
   
}
