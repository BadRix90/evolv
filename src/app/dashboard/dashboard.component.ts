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
    { id: '1', name: 'Gesundheit', color: '#C9B6E4' },
    { id: '2', name: 'Wissen & Lernen', color: '#A3D5FF' },
    { id: '3', name: 'Beziehungen', color: '#F8C8DC' },
    { id: '4', name: 'Finanzen', color: '#B8F2E6' },
    { id: '5', name: 'Beruf & Berufung', color: '#F2E2BA' },
    { id: '6', name: 'Persönlichkeit', color: '#C8C6D7' },
    { id: '7', name: 'Freizeit & Abenteuer', color: '#FFA69E' },
    { id: '8', name: 'Zuhause & Ordnung', color: '#BFD8B8' }
  ];

  onAreaClick(areaId: string): void {
    this.selectedAreaId = areaId;
  }
}