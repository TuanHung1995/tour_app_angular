import { NgIf, NgStyle, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Destination {
  name: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterOutlet,
    NgStyle,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  // Desktop dropdown states
  isDropdownOpen = false;
  
  // Mobile menu states
  isMobileMenuOpen = false;
  currentMobileView: 'main' | 'dulich' | 'camnang' | 'account' = 'main';

  user: any;
  userRole: string = '';
  defaultAvatar: string = 'path/to/default/avatar.png';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.userRole = this.authService.getUserRole();
  }

  // Mobile menu toggles
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.currentMobileView = 'main';
    }
  }

  setMobileView(view: 'main' | 'dulich' | 'camnang' | 'account') {
    this.currentMobileView = view;
  }

  // Desktop dropdown toggle
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toggleMobileMenu();
  }

  domesticDestinations: Destination[] = [
    { name: 'Hà Nội', link: 'tour4' },
    { name: 'Đà Nẵng', link: '#' },
    { name: 'Đà Lạt', link: '#' },
    { name: 'Phú Quốc', link: '#' }
  ];

  internationalDestinations: Destination[] = [
    { name: 'Châu Á', link: '#' },
    { name: 'Châu Mỹ', link: '#' },
    { name: 'Châu Âu', link: '#' },
    { name: 'Châu Úc', link: '#' }
  ];
}