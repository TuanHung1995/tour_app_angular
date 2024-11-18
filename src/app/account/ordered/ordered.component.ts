import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-ordered',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ordered.component.html',
  styleUrl: './ordered.component.css'
})
export class OrderedComponent {

  order: any;

  user: any;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getInfomation();
  }

  // Get user information
  getInfomation(): void {
    const getUserData = () => JSON.parse(localStorage.getItem('user') || '{}');
    this.user = getUserData();
  }

}
