import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowService } from '../services/follow.service';
import { TourService } from '../services/tour.service';
import { Tour } from '../models/tour';

@Component({
  selector: 'app-followed-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './followed-tour.component.html',
  styleUrl: './followed-tour.component.css'
})
export class FollowedTourComponent implements OnInit {

  constructor(private followService: FollowService, private tourService: TourService) {}

  ngOnInit(): void {
    this.followedTour();
  }

  id : number[] = [];
  followTour: any[] = [];

  // Followed tour
  followedTour(): void {
    this.followService.getAllFollows().subscribe({
      next: (data) => {
        this.followTour = data.tours;
      },
      error: (error) => {
        console.error('Error fetching followed tour:', error);
      }
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
      }
    });
  }

  getTourDetails(id: number): void {
    this.tourService.getTourById(id).subscribe({
      next: (tour) => {
        this.followTour.push(tour);
      },
      error: (error) => {
        console.error('Error fetching tour details:', error);
      }
    });
  }

  getFollowedTourDetails(): void {
    this.id.forEach(id => {
      this.getTourDetails(id);
    });
  }

}
