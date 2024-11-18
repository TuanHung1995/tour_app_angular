import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-infomation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './infomation.component.html',
  styleUrl: './infomation.component.css'
})
export class InfomationComponent implements OnInit {

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
