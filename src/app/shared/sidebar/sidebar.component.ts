import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() collapsed = new EventEmitter<boolean>();
  isCollapsed = true;

  onMouseEnter(): void {
    if (this.isCollapsed) {
      this.isCollapsed = false;
      this.collapsed.emit(this.isCollapsed);
    }
  }

  onMouseLeave(): void {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
      this.collapsed.emit(this.isCollapsed);
    }
  }
}