import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fechaactual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fechaactual.component.html',
  styleUrl: './fechaactual.component.css'
})
export class FechaactualComponent {
  hoy: any = new Date(); 
}
