import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'lib-orders',
  imports: [CommonModule, OrderListComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  status = signal('');
  count = signal(0);
  delivered() {
    this.status.set('delivered');
  }
  returned() {
    this.status.set('returned');
  }
  shipped() {
    this.status.set('shipped');
  }
  increment() {
    this.count.update((data) => data + 1);
  }
  decrement() {
    this.count.update((data) => data - 1);
  }
}
