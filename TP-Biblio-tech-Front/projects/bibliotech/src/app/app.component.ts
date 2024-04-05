import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LivresComponent } from './components/livres/livres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LivresComponent],
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {}