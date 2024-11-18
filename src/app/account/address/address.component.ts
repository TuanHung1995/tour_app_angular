import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  user: any;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getInfomation();
  }

  // Get user information
  getInfomation(): void {
    const getUserData = () => JSON.parse(this.localStorageService.getItem('user') || '{}');
    this.user = getUserData();
  }

}
