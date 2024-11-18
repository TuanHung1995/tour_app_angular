import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TourService } from '../core/services/tour.service';
import { NewsService } from '../core/services/news.service';
import { Tour } from '../core/models/tour';
import { News } from '../core/models/news';

interface BestTour {
  id: number;
  name: string;
  image: string;
  startDate: string;
  duration: string;
  price: number;
  total_customer: number;
}

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css',
})
export class HomeContentComponent implements OnInit {
  // mockNews: News[] = [
  //   {
  //     id: 1,
  //     title: 'Tin tức 1',
  //     image: 'assets/images/photo1.webp',
  //     content: 'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây..',
  //   },
  //   {
  //     id: 2,
  //     title: 'Tin tức 2',
  //     image: 'assets/images/photo2.webp',
  //     content: 'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây..',
  //   },
  //   {
  //     id: 3,
  //     title: 'Tin tức 3',
  //     image: 'assets/images/photo3.webp',
  //     content: 'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây..',
  //   },
  // ];

  // tours: Tour[] = [
  //   { id: 1, name: 'Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ', image: 'assets/images/photo1.webp', startDate: '28/08/2023', duration: '9N8Đ', price: 136800000 },
  //   { id: 2, name: 'Tour Bờ Đông Hoa Kỳ 10N9Đ: New York - Philadelphia -...', image: 'path_to_usa_image.jpg', startDate: '28/08/2023', duration: '10N9Đ', price: 160000000 },
  //   { id: 3, name: 'Tour Hoa Kỳ 6N5Đ: Hawaii - Honolulu - Đảo Thiên Đường', image: 'path_to_hawaii_image.jpg', startDate: '27/08/2023', duration: '6N5Đ', price: 193000000 },
  //   { id: 4, name: 'Tour Cao Cấp Indonesia 4N3Đ: Thiên Đường Biển Đảo Bali', image: 'path_to_danang_image.jpg', startDate: '27/08/2023', duration: '4N3DD', price:2798000},
  //   { id: 5, name: 'Tour Đà Lạt 4N3Đ: Đà Lạt - Nha Trang - Thành Phố Hoa Biển', image: 'path_to_danang_image.jpg', startDate: '25/08/2023', duration: '4N3Đ', price:8600000},
  //   { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
  //   { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
  //   { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
  //   { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
  //   { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},

  // ];

  // vietnamTours: Tour[] = [
  //     { id: 1, name: 'Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ', image: 'assets/images/photo1.webp', startDate: '28/08/2023', duration: '9N8Đ', price: 136800000 },
  //     { id: 2, name: 'Tour Bờ Đông Hoa Kỳ 10N9Đ: New York - Philadelphia -...', image: 'path_to_usa_image.jpg', startDate: '28/08/2023', duration: '10N9Đ', price: 160000000 },
  //     { id: 3, name: 'Tour Hoa Kỳ 6N5Đ: Hawaii - Honolulu - Đảo Thiên Đường', image: 'path_to_hawaii_image.jpg', startDate: '27/08/2023', duration: '6N5Đ', price: 193000000 },
  //     { id: 4, name: 'Tour Cao Cấp Indonesia 4N3Đ: Thiên Đường Biển Đảo Bali', image: 'path_to_danang_image.jpg', startDate: '27/08/2023', duration: '4N3DD', price:2798000},
  //   ];

  bestTours: BestTour[] = [
    {
      id: 1,
      name: 'Hà Nội',
      image: '../../assets/images/cate_1.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 2,
      name: 'Đà Nẵng',
      image: '../../assets/images/cate_2.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 3,
      name: 'Đà Lạt',
      image: '../../assets/images/cate_3.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 4,
      name: 'Phú Quốc',
      image: '../../assets/images/cate_4.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 5,
      name: 'Châu Á',
      image: '../../assets/images/cate_5.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 6,
      name: 'Châu Mỹ',
      image: '../../assets/images/cate_6.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 7,
      name: 'Châu Âu',
      image: '../../assets/images/cate_7.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 8,
      name: 'Châu Úc',
      image: '../../assets/images/cate_8.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
  ];

  sale = [
    '../../assets/images/quang_binh_sale.webp',
    '../../assets/images/hong_kong_sale.webp',
    'assets/images/tay_bac_sale.webp',
  ];

  currentSlide = 0;

  nextTour() {
    const totalTours = 4; // Change this to the number of tours you have
    if (this.currentSlide < totalTours - 1) {
      this.currentSlide++;
    }
  }

  prevTour() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  tours: Tour[] = [];
  vietnamTours: Tour[] = [];
  overseaTours: Tour[] = [];
  latestNews: News[] = [];

  constructor(
    private tourService: TourService,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTours();
    this.loadNews();
  }

  loadTours(): void {
    this.tourService.getAllTours().subscribe({
      next: (data) => {
        this.tours = data;
        // console.log(data);
        this.vietnamTours = this.tours.filter(
          (tour) => tour.category === 'VIETNAM'
        );
        this.overseaTours = this.tours.filter(
          (tour) => tour.category === 'OVERSEA'
        );
      },
      error: (error) => {
        console.error('Error loading tours', error);
      },
    });
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe({
      next: (data) => {
        this.latestNews = data.slice(0, 3);
        // console.log(data);
      },
      error: (error) => {
        console.error('Error loading news', error);
      },
    });
  }

  viewTourDetails(id: number): void {
    this.router.navigate(['/tour', id]);
  }

  // View overseas tours 
  viewCategoryTours(category: string): void {
    this.router.navigate(['/category'], {
      queryParams: { category: category, status: 'avaiable' },
    });
  }

  // View all tours
  viewAllTours(): void {
    this.router.navigate(['/tours']);
  }
}
