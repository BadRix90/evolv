import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-button.component.html',
  styleUrl: './area-button.component.scss'
})
export class AreaButtonComponent {
  @Input() area!: { id: string; name: string; color: string };
  @Input() isSelected = false;
  
  @Output() areaClicked = new EventEmitter<string>();

  onClick(): void {
    this.areaClicked.emit(this.area.id);
  }
}