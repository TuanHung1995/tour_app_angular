import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // NavbarComponent
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  vietnameCites = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Hạ Long', 'Bình Dương', 'Phú Quốc', 'Hội An', 'Huế', 'Nha Trang', 'Phan Thiết', 'Long Xuyên', 'Quy Nhơn', 'Sapa', 'Vũng Tàu', 'Quảng Ngãi', 'Quảng Ninh', 'Buôn Ma Thuột', 'Vinh', 'Cà Mau', 'Rạch Giá', 'Thanh Hóa', 'Đà Lạt'];
  countries = ['Úc', 'Nhật Bản', 'Dubai', 'Hàn Quốc', 'Trung Quốc', 'Thái Lan', 'Singapore', 'Indonesia']

  keyword: string = '';
  status: string = 'avaiable';
  location: string = '';
  destination: string = '';
  start_date: string = '';
  end_date: string = '';
  category: string = 'VIETNAM';

  activeTab: string = 'vietnam';
  
  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  searchTour() {
    this.searchService.searchTour(this.keyword, this.status, this.category, this.destination, this.location, this.start_date, this.end_date).subscribe(
      tours => {
        console.log(tours);
        this.router.navigate(['/search'], { queryParams: { keyword: this.keyword, status: this.status, category: this.category, destination: this.destination, location: this.location, start_date: this.start_date, end_date: this.end_date } });
      }
    );
  }

  chooseCategory(category: string) {
    this.category = category;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
