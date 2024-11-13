import { Component, OnInit } from '@angular/core';
import { DescriptionComponent } from '../tour/description/description.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { TourService } from '../services/tour.service';
import { FollowService } from '../services/follow.service';
import { Tour } from '../models/tour';
import { Follow } from '../models/follow';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  followed: boolean = false;

  tour: Tour | undefined;

  followTour: Follow | undefined;

  tourId: number | undefined;

  constructor(private route: ActivatedRoute, private tourService: TourService, private followService: FollowService) {
    this.tourId = Number(this.route.snapshot.paramMap.get('id'));
  }


  activeTab: string = 'schedule';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');
    if (tourId) {
      this.getTourDetails(Number(tourId));
    }
  }

  getTourDetails(id: number): void {
    this.tourService.getTourById(id).subscribe({
      next: (tour) => {
        this.tour = tour;
      },
      error: (error) => {
        console.error('Error fetching tour details:', error);
      }
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
        }
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
        }
      });
    }
  }

}
