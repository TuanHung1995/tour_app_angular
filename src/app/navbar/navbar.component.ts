import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
 interface Destination{
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
  isDropdownOpen = false;

  isDropdownMobileOpen = false;

  // dropdown profile menu appears when user hover on profile icon
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  user: any;
  userRole: string = '';
  defaultAvatar: string = 'path/to/default/avatar.png'; // Default avatar path

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Get user and role information after login
    this.user = this.authService.getUser();
    this.userRole = this.authService.getUserRole();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // link to another page when click span in mobile view
  domesticDestinations:  Destination[] = [

    { name: 'Hà Nội', link: '#' },
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
