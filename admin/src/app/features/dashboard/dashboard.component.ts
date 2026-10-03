import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div>
      <h1 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 1rem;">Dashboard Overview</h1>
      <p style="color: #4b5563;">Welcome to the E-Commerce administration management console.</p>
    </div>
  `
})
export class DashboardComponent {}
