import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
    @Input() items: Item[] = [];
    @Output() removeEventEmitter: EventEmitter<number> = new
    EventEmitter();
    onRemove(id: number) {
    this.removeEventEmitter.emit(id);

    
 }
}
