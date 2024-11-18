import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: any[] = [];
  numberItems: number = 0;
  adjustForm!: FormGroup;

  constructor(private cartService: CartService,
    private router: Router,
    private fb: FormBuilder  
  ) {}

  ngOnInit(): void {
    this.getCartItems();
    this.adjustForm = this.fb.group({
      id: [0, [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      tourId: [0, [Validators.required]],
    });
  }

  // Get all items in cart
  getCartItems(): void {
    this.cartService.getAllItems().subscribe({
      next: (data) => {
        this.items = data.items;
        this.numberItems = this.items.length;
      },
      error: (error) => {
        console.error('Error fetching cart items:', error);
      },
    });
  }

  // Remove item from cart
  removeItem(id: number): void {
    this.cartService.deleteItems(id).subscribe({
      next: () => {
        this.getCartItems();
      },
      error: (error) => {
        console.error('Error removing item from cart:', error);
      },
    });
  }

  // Update quantity of item in cart
  updateQuantity(): void {
    this.cartService.adjustQuantity(this.adjustForm.value).subscribe({
      next: () => {
        this.getCartItems();
      },
      error: (error) => {
        console.error('Error updating quantity of item in cart:', error);
      },
    });
  }

  // Increase quantity of item in cart
  increaseQuantity(item: any): void {
    item.quantity += 1;
    this.adjustForm.get('quantity')?.setValue(item.quantity);
    this.adjustForm.get('id')?.setValue(item.id);
    this.adjustForm.get('tourId')?.setValue(item.tour.id);
    this.updateQuantity();
  }

  // Decrease quantity of item in cart
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.adjustForm.get('quantity')?.setValue(item.quantity);
      this.adjustForm.get('id')?.setValue(item.id);
      this.adjustForm.get('tourId')?.setValue(item.tour.id);
      this.updateQuantity();
    }
  }

  // Get total price of item in cart
  getTotalPrice(item: any): number {
    return item.tour.price * item.quantity;
  }

  // Get total price of all items in cart
  getTotalItemPrice(): number {
    return this.items.reduce((acc, item) => acc + item.tour.price*item.quantity, 0);
  }

  // View tour details
  viewTourDetails(id: number): void {
    this.router.navigate(['/tour', id]);
  }
}
