import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowService } from '../core/services/follow.service';
import { TourService } from '../core/services/tour.service';
import { Tour } from '../core/models/tour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followed-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './followed-tour.component.html',
  styleUrl: './followed-tour.component.css',
})
export class FollowedTourComponent implements OnInit {
  constructor(
    private followService: FollowService,
    private tourService: TourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.followedTour();
  }

  followTour: any[] = [];
  numberOfFollowedTour: number = 0;

  // Followed tour
  followedTour(): void {
    this.followService.getFollows().subscribe({
      next: (data) => {
        this.followTour = data;
        this.numberOfFollowedTour = this.followTour.length;
      },
      error: (error) => {
        console.error('Error fetching followed tour:', error);
      },
    });
  }

  // Unfollow tour
  unfollow(id: number): void {
    this.followService.deleteFollow(id).subscribe({
      next: () => {
        this.followedTour();
      },
      error: (error) => {
        console.error('Error unfollowing tour:', error);
      },
    });
  }

  getTourDetails(id: number): void {
    this.router.navigate(['/tour', id]);
  }
}
