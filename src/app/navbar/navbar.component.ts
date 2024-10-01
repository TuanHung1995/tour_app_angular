import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropdownOpen = false;

  isDropdownMobileOpen = false;

  // dropdown profile menu appears when user hover on profile icon
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // link to another page when click span in mobile view

}
