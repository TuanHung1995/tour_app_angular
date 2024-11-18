import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  numberOfPages: number[] = [];
  tours: any[] = [];
  isLoading = false;
  keyword = '';
  status = 'avaiable';
  category = '';
  destination = '';
  location = '';
  startDate = '';
  endDate = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Lấy tham số từ URL
    this.route.queryParams.subscribe((params) => {
      this.keyword = params['keyword'] || '';
      this.status = params['status'] || 'avaiable';
      this.category = params['category'] || '';
      this.destination = params['destination'] || '';
      this.location = params['location'] || '';
      this.startDate = params['start_date'] || '';
      this.endDate = params['end_date'] || '';

      // Gọi API tìm kiếm
      this.searchTours();

      // Tính số trang
      this.getNumberOfPages();
    });
  }

  searchTours(): void {
    this.isLoading = true;
    const params = {
      keyword: this.keyword,
      status: this.status,
      category: this.category,
      destination: this.destination,
      location: this.location,
      start_date: this.startDate,
      end_date: this.endDate,
    };

    console.log('params', params);

    this.searchService.searchTour(params.keyword, params.status, params.category, params.destination, params.location,params.start_date, params.end_date).subscribe({
      next: (response) => {
        this.tours = response;
        console.log('Tìm kiếm tour thành công:', response);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Lỗi khi tìm kiếm tour:', error);
        this.isLoading = false;
      },
    });
  }

  // Get tour detail
  viewDetail(tourId: string): void {
    this.router.navigate(['/tour', tourId]);
  }

  // Pagination
  getNumberOfPages(): void {
    this.numberOfPages = Array.from({ length: Math.ceil(this.tours.length / 12) }, (_, i) => i + 1);
  }
}
