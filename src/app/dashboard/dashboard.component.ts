import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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

  getSlicePath(index: number): string {
    const centerX = 200;
    const centerY = 200;
    const radius = 140;
    const innerRadius = 60;

    const startAngle = (index * 45) - 90;
    const endAngle = ((index + 1) * 45) - 90;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + innerRadius * Math.cos(startRad);
    const y1 = centerY + innerRadius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(startRad);
    const y2 = centerY + radius * Math.sin(startRad);
    const x3 = centerX + radius * Math.cos(endRad);
    const y3 = centerY + radius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(endRad);
    const y4 = centerY + innerRadius * Math.sin(endRad);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  }

  getTextX(index: number): number {
    const angle = (index * 45) - 90 + 22.5; // Mitte Segment
    const rad = (angle * Math.PI) / 180;
    return 200 + 100 * Math.cos(rad);
  }

  getTextY(index: number): number {
    const angle = (index * 45) - 90 + 22.5;
    const rad = (angle * Math.PI) / 180;
    return 200 + 100 * Math.sin(rad) + 5;
  }

  getTextAnchor(): string {
    return 'middle';
  }
}
