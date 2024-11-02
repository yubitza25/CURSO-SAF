import { Component } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  standalone: true,
  imports: [],
  templateUrl: './ejpropertybinding.component.html',
  styleUrl: './ejpropertybinding.component.css'
})
export class EjpropertybindingComponent {
  texto = 'Escribe algo';
  constructor() {
  setTimeout(() => {
  this.texto = 'por favor';
  }, 3000);
  }
  
}
