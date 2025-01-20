import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getCategoryAction, selectCategories } from '@store-workspace/Category';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  categories$!: Observable<string[]>;
  store = inject(Store);
  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategories);
    this.store.dispatch(getCategoryAction());
  }
}
