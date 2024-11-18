import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { futureDateValidator } from '../validators/future-date.validator';
import { AuthService } from '../core/services/auth.service';
import { TourService } from '../core/services/tour.service';
import { CartService } from '../core/services/cart.service';
import { FollowService } from '../core/services/follow.service';
import { Tour } from '../core/models/tour';
import { Follow } from '../core/models/follow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  cartForm!: FormGroup;

  quantity: number = 0;

  totalPrice: number = 0;

  followed: boolean = false;

  tour: Tour | undefined;

  followTour: Follow | undefined;

  tourId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private followService: FollowService,
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.tourId = Number(this.route.snapshot.paramMap.get('id'));
  }

  activeTab: string = 'schedule';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    // this.logFormValue();
    const tourId = this.route.snapshot.paramMap.get('id');
    if (tourId) {
      this.getTourDetails(Number(tourId));
    }
    // if (this.tourId) {
    //   this.getTourDetails(this.tourId);
    // }
    console.log('Tour ID:', this.tourId);

    this.cartForm = this.fb.group({
      quantity: [this.quantity, [Validators.required, Validators.min(1)]],
      tourId: [this.tourId, [Validators.required]],
      date: ['', [Validators.required, futureDateValidator()]],
    });
  }

  getTourDetails(id: number): void {
    this.tourService.getTourById(id).subscribe({
      next: (tour) => {
        this.tour = tour;
      },
      error: (error) => {
        console.error('Error fetching tour details:', error);
      },
    });
  }

  // Follow tour
  follow(): void {
    if (this.tourId) {
      this.followService.createFollow(this.tourId).subscribe({
        next: () => {
          this.followed = true;
          alert('Tour đã được theo dõi thành công!');
        },
        error: (error) => {
          console.error('Lỗi khi theo dõi tour:', error);
          alert('Không thể theo dõi tour.');
        },
      });
    }
  }

  // Unfollow tour
  unfollow(): void {
    if (this.tour) {
      this.followService.deleteFollow(this.tour.id).subscribe({
        next: (data) => {
          console.log('Unfollow tour successfully:', data);
          this.followed = false;
        },
        error: (error) => {
          console.error('Error unfollowing tour:', error);
        },
      });
    }
  }

  increaseQuantity(): void {
    this.quantity++;
    this.cartForm.get('quantity')?.setValue(this.quantity);
    this.calculateTotalPrice();
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.cartForm.get('quantity')?.setValue(this.quantity);
      this.calculateTotalPrice();
    }
  }

  // Calculate total price
  calculateTotalPrice(): void {
    if (this.tour) {
      this.totalPrice = this.tour.price * this.quantity;
    }
  }

  // DEBUG: Log form value
  logFormValue(): void {
    console.log('Form value:', this.cartForm.value);
  }

  // Add tour to cart
  addToCart(): void {
    const formValue = this.cartForm.value;
    console.log('Form value on submit:', formValue);
    if (this.cartForm.valid) {
  
      if (!formValue.tourId) {
        formValue.tourId = this.tourId;
      }

      
      this.cartService.createItem(formValue).subscribe({
        next: () => {
          alert('Tour đã được thêm vào giỏ hàng!');
          this.router.navigate(['/cart']);
        },
        error: (error) => {
          console.error('Error adding tour to cart:', error);
          alert('Không thể thêm tour vào giỏ hàng.');
        },
      });
    } else {
      if (!this.cartForm.value.date) {
        alert('Vui lòng chọn ngày đi');
        return;
      }
      console.log('Field errors:', {
        quantity: this.cartForm.get('quantity')?.errors,
        tourId: this.cartForm.get('tourId')?.errors,
        date: this.cartForm.get('date')?.errors,
      });
    }
  }

  // Go to cart page
  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
