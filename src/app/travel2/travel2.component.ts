import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
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
  selector: 'app-travel2',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './travel2.component.html',
  styleUrl: './travel2.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Travel2Component {
  seasons = [
    {
      title: 'Mùa xuân (tháng 3 - tháng 5)',
      description: 'Mùa xuân ở Naganeupseong thường mang đến khung cảnh tươi tắn với các loại hoa nở rộ và cảnh quan xanh tươi.',
      image: '../../assets/images/p1.jpg'
    },
    {
      title: 'Mùa hè (tháng 6 - tháng 8)',
      description: 'Mùa hè ở Naganeupseong có thời tiết nóng và ẩm ướt. Tuy nhiên trong mùa này, bạn có thể tận hưởng các hoạt động ngoài trời.',
      image: '../../assets/images/p3.jpg'
    },
    {
      title: 'Mùa thu (tháng 9 - tháng 11)',
      description: 'Mùa thu ở Naganeupseong mang đến khung cảnh đẹp với sự thay đổi màu sắc của cây cối và cảnh quan rực rỡ.',
      image: '../../assets/images/p2.jpg'
    },
    {
      title: 'Mùa đông (tháng 12 - tháng 2)',
      description: 'Mùa đông ở Naganeupseong có thể rất lạnh. Tuy nhiên, đây là thời điểm lý tưởng để tận hưởng khung cảnh tuyết trắng.',
      image: '../../assets/images/p4.jpg'
    }
  ];

  transportOptions = [
    {
      title: 'Ô tô',
      icon: 'fas fa-car',
      description: 'Nếu bạn có ô tô hoặc thuê xe thì từ trung tâm thành phố gần nhất, bạn có thể lái xe theo đường quốc lộ hoặc đường cao tốc để đến Naganeupseong.'
    },
    {
      title: 'Xe buýt',
      icon: 'fas fa-bus',
      description: 'Có các tuyến xe buýt công cộng từ các thành phố lân cận đến Naganeupseong.'
    },
    {
      title: 'Xe đạp',
      icon: 'fas fa-bicycle',
      description: 'Nếu bạn muốn trải nghiệm di chuyển chậm và gần gũi với thiên nhiên thì có thể sử dụng xe đạp.'
    },
    {
      title: 'Taxi',
      icon: 'fas fa-taxi',
      description: 'Taxi là một phương tiện linh hoạt và tiện lợi để đến Naganeupseong.'
    }
  ];

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
      id1: 2,
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
      id1: 3,
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
      id1: 4,
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
}

