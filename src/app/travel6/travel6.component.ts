import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

interface TourDetail {
  id1: number;
  name1: string;
  image1: string;
  startDate1: string;
  duration1: string;
  originalPrice1: number;
  discountedPrice1: number;
  discount1: number;
}

@Component({
  selector: 'app-travel6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel6.component.html',
  styleUrl: './travel6.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Travel6Component {
  @ViewChild('swiper') swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperContainer = this.swiperRef.nativeElement;
    
    Object.assign(swiperContainer, {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #2D4271 !important;
            padding: 8px;
            border-radius: 50%;
            color: white;
            transition: all 0.3s ease;
          }
          
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: #1a2b4a !important;
            transform: scale(1.1);
          }

          .swiper-button-disabled {
            background-color: #4a5b7d !important;
            opacity: 0.5 !important;
          }
        `,
      ],
    });
    
    swiperContainer.initialize();
  }

    
suggestedTours: TourDetail[] = [
  {
    id1: 1,
    name1:
      'Tour Miền Bắc 4N3Đ: HCM - Hạ Long - Sapa - Hà Khẩu Trung Quốc',
    image1: '../../assets/images/photo13.webp',
    startDate1: '05/07/2023',
    duration1: '4N3Đ',
    originalPrice1: 19000000,
    discountedPrice1: 17000000,
    discount1: 11,
  },
  {
    id1: 1,
    name1:
      'Tour Phú Quốc 3N2Đ: HCM - Grand World - Câu Cá - Lặn Ngắm San Hô - Nghỉ Dưỡng',
    image1: '../../assets/images/photo14.webp',
    startDate1: '02/07/2023',
    duration1: '3N3Đ',
    originalPrice1: 6500000,
    discountedPrice1: 5790000,
    discount1: 11,
  },
  {
    id1: 1,
    name1:
      'Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana',
    image1: '../../assets/images/photo15.webp',
    startDate1: '01/07/2023',
    duration1: '3 ngày',
    originalPrice1: 4800000,
    discountedPrice1: 4390000,
    discount1: 9,
  },
  {
    id1: 1,
    name1:
      'Tour Phú Quốc 3N2Đ: Grand World - Cáp Treo Hòn Thơm - Buffet Trưa 3 Miền',
    image1: '../../assets/images/photo16.webp',
    startDate1: '25/06/2023',
    duration1: '4 ngày',
    originalPrice1: 7500000,
    discountedPrice1: 6790000,
    discount1: 9,
  },
];
seasons1 = [
 {image: '../../assets/images/c1.jpg'},
 {image: '../../assets/images/c2.jpg'},
 {image: '../../assets/images/c3.jpg'},
 {image: '../../assets/images/c4.jpg'},
 {image: '../../assets/images/c5.jpg'},
 {image: '../../assets/images/c6.jpg'},
 {image: '../../assets/images/c7.jpg'},
 {image: '../../assets/images/c8.jpg'},
//  {image: '../../assets/images/c9.jpg'},
//  {image: '../../assets/images/c10.jpg'},
//  {image: '../../assets/images/c11.jpg'},
//  {image: '../../assets/images/q12.jpg'},

];
}

