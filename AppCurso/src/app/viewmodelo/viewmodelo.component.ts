import { Component } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodelo',
  standalone: true,
  imports: [],
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css'] // Corregido a "styleUrls"
})
export class ViewmodeloComponent {
  id: string;
  nombre: string;
  apellidos: string;
  ciudad: string;
  alumno1: Alumno;

  constructor() {
    this.id = '10';
    this.nombre = 'Juan';
    this.apellidos = 'Gutierres';
    this.ciudad = 'Lima';
    this.alumno1 = new Alumno(1, 'Joe', 'Valdivia', 'Arequipa');
  } 
} 

