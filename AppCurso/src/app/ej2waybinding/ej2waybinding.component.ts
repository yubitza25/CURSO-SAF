import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ej2waybinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej2waybinding.component.html',
  styleUrl: './ej2waybinding.component.css'
})
export class Ej2waybindingComponent {
  texto = 'Texto original al cargar';
  constructor() { }
  ngOnInit() {
  } 
}
