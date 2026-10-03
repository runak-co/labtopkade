import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="display: flex; min-height: 100vh;">
      <aside style="width: 250px; background: #111827; color: white; padding: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 2rem;">Admin Panel</h2>
        <nav style="display: flex; flex-direction: column; gap: 0.75rem;">
          <a routerLink="/dashboard" style="color: #9ca3af; text-decoration: none;">Dashboard</a>
          <a routerLink="/products" style="color: #9ca3af; text-decoration: none;">Products</a>
          <a routerLink="/categories" style="color: #9ca3af; text-decoration: none;">Categories</a>
          <a routerLink="/orders" style="color: #9ca3af; text-decoration: none;">Orders</a>
          <a routerLink="/customers" style="color: #9ca3af; text-decoration: none;">Customers</a>
          <a routerLink="/settings" style="color: #9ca3af; text-decoration: none;">Settings</a>
        </nav>
      </aside>
      <main style="flex: 1; padding: 2rem; background: #f9fafb;">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {
  title = 'admin';
}
