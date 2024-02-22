import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
            <app-navbar />
            <router-outlet />
            <app-footer />
            `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'recipe-app';
}