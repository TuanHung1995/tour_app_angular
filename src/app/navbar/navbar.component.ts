import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../core/services/cart.service';
import { FollowService } from '../core/services/follow.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { Item } from '../core/models/item';
import { Follow } from '../core/models/follow';
import { Tour } from '../core/models/tour';

interface Destination {
  name: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
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
  cart: Item[] = [];
  follows: Follow[] = [];
  items: number = 0;
  numberFollows: number = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private followService: FollowService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Get user and role information after login
    // this.userRole = this.authService.getUserRole();
    this.getCartItems();
    this.getFollows();
    // this.user = this.authService.setUser(this.user);
    // this.user = this.authService.getUser();
  }

  getCartItems(): void {
    this.cartService.getAllItems().subscribe({
      next: (data) => {
        this.cart = data.items;
        this.items = this.cart.length;
      },
      error: (error) => {
        console.error('Error fetching cart items:', error);
      },
    });
  }

  // Get a number of follows
  getFollows(): void {
    this.followService.getFollows().subscribe({
      next: (data) => {
        this.follows = data;
        this.user = this.follows[0].user;
        this.localStorageService.setItem('user', JSON.stringify(this.user));
        this.numberFollows = this.follows.length;
      },
      error: (error) => {
        console.error('Error fetching follows:', error);
      },
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // link to another page when click span in mobile view

  domesticDestinations: Destination[] = [
    { name: 'Hà Nội', link: 'tour4' },
    { name: 'Đà Nẵng', link: '#' },
    { name: 'Đà Lạt', link: '#' },
    { name: 'Phú Quốc', link: '#' },
  ];

  internationalDestinations: Destination[] = [
    { name: 'Châu Á', link: '#' },
    { name: 'Châu Mỹ', link: '#' },
    { name: 'Châu Âu', link: '#' },
    { name: 'Châu Úc', link: '#' },
  ];
}
