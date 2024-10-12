import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BestTour {
  id: number;
  name: string;
  image: string;
  startDate: string;
  duration: string;
  price: number;
  total_customer: number;
}

interface Tour {
  id: number;
  name: string;
  image: string;
  startDate: string;
  duration: string;
  price: number;
}

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css',
})
export class HomeContentComponent {

  tours: Tour[] = [
    { id: 1, name: 'Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ', image: 'assets/images/photo1.webp', startDate: '28/08/2023', duration: '9N8Đ', price: 136800000 },
    { id: 2, name: 'Tour Bờ Đông Hoa Kỳ 10N9Đ: New York - Philadelphia -...', image: 'path_to_usa_image.jpg', startDate: '28/08/2023', duration: '10N9Đ', price: 160000000 },
    { id: 3, name: 'Tour Hoa Kỳ 6N5Đ: Hawaii - Honolulu - Đảo Thiên Đường', image: 'path_to_hawaii_image.jpg', startDate: '27/08/2023', duration: '6N5Đ', price: 193000000 },
    { id: 4, name: 'Tour Cao Cấp Indonesia 4N3Đ: Thiên Đường Biển Đảo Bali', image: 'path_to_danang_image.jpg', startDate: '27/08/2023', duration: '4N3DD', price:2798000},
    { id: 5, name: 'Tour Đà Lạt 4N3Đ: Đà Lạt - Nha Trang - Thành Phố Hoa Biển', image: 'path_to_danang_image.jpg', startDate: '25/08/2023', duration: '4N3Đ', price:8600000},
    { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
  ];

  bestTours: BestTour[] = [
    {
      id: 1,
      name: 'Tour du lịch Quảng Bình',
      image: '../../assets/images/quang_binh.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 2,
      name: 'Tour du lịch Hồng Kông',
      image: '../../assets/images/hong_kong.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 3,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac_sale.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 4,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 5,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 6,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 7,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac.webp',
      startDate: '2022-06-01',
      duration: '4 ngày 3 đêm',
      price: 5000000,
      total_customer: 1000000,
    },
    {
      id: 8,
      name: 'Tour du lịch Tây Bắc',
      image: '../../assets/images/tay_bac.webp',
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
}
