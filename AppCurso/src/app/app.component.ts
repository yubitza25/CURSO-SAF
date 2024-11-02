import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import {EjpropertybindingComponent} from './ejpropertybinding/ejpropertybinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaactualComponent,ViewmodeloComponent,EjpropertybindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngularUss';
}
