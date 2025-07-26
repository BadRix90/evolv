import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaButtonComponent } from '../shared/area-button/area-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AreaButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedAreaId: string | null = null;

  areas = [
    { id: '1', name: 'Marketing', color: '#ff6b6b' },
    { id: '2', name: 'Vertrieb', color: '#4ecdc4' },
    { id: '3', name: 'Entwicklung', color: '#45b7d1' },
    { id: '4', name: 'Support', color: '#96ceb4' },
    { id: '5', name: 'Finanzen', color: '#ffeaa7' },
    { id: '6', name: 'Personal', color: '#dda0dd' },
    { id: '7', name: 'Einkauf', color: '#98d8c8' },
    { id: '8', name: 'Produktion', color: '#f7dc6f' }
  ];

  onAreaClick(areaId: string): void {
    this.selectedAreaId = areaId;
  }
}