import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from './components/cart-app/cart-app.component';
import{ ProductCardComponent }  from './components/product-card/product-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CartAppComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cart-appuss';
}
