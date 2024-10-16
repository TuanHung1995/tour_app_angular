import { Component} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tour {
  image: string;
  name: string;
  startDate: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
}
interface  TourDetail {
  id1: number;
  name1: string;
  image1:  string;
  startDate1:  string;
  duration1:  string;
  originalPrice1: number;
  discountedPrice1: number;
  discount1: number,

}
@Component({
  selector: 'app-tour1',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './tour1.component.html',
  styleUrl: './tour1.component.css'
})
export class Tour1Component {
  tours: Tour[] = [
    {
      image: '../../assets/images/p-13.webp',
      name: 'Tour Phú Quốc 3N2Đ: HCM - Grand World - Cáp Cá - Lặn Ngắm San Hô',
      startDate: '02/07/2023',
      duration: '3N3Đ',
      originalPrice: 6500000,
      discountedPrice: 5790000,
      discount: 11
    },
    {
      image: '../../assets/images/p-14.webp',
      name: 'Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né',
      startDate: '01/07/2023',
      duration: '3 ngày',
      originalPrice: 4800000,
      discountedPrice: 4390000,
      discount: 9
    },
    {
      image: '../../assets/images/p-15.webp',
      name: 'Tour Phú Quốc 3N2Đ: Grand World - Cáp Treo Hòn Thơm - Vinwonders',
      startDate: '25/06/2023',
      duration: '4 ngày',
      originalPrice: 7500000,
      discountedPrice: 6790000,
      discount: 9
    },
    {
      image: '../../assets/images/p-15.1.webp',
      name: 'Tour Châu Âu 10N9Đ: Khám Phá Pháp - Thụy Sĩ - Ý - Vatican',
      startDate: '06/07/2023',
      duration: '10N9D',
      originalPrice: 88000000,
      discountedPrice: 82400000,
      discount: 6
    },    {
      image: '../../assets/images/p-17.webp',
      name: 'Tour Úc 5N4Đ: Khám phá Sydney - Free Day',
      startDate: '05/072023',
      duration: '4N3D',
      originalPrice:41000000,
      discountedPrice: 33690000,
      discount: 18
    },    {
      image: '../../assets/images/p-18.webp',
      name: 'Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng',
      startDate: '23/06/2023',
      duration: '4 ngày',
      originalPrice: 11000000,
      discountedPrice: 9900000,
      discount: 10
    },    {
      image: '../../assets/images/p-19.webp',
      name: 'Tour Nhật Bản 4N4Đ: Tokyo - Yamanashi - Núi Phú Sĩ',
      startDate: '05/072023',
      duration: '4N4D',
      originalPrice: 28000000,
      discountedPrice: 26690000,
      discount: 5
    },    {
      image: '../../assets/images/p-20.webp',
      name: 'Tour Cao Cấp Dubai 4N4Đ: Dubai - Abu Dhabi - Đài Quan Sát Sky Views',
      startDate: '05/07/2023',
      duration: '4N$D',
      originalPrice: 34000000,
      discountedPrice: 31990000,
      discount: 6
    },    {
      image: '../../assets/images/p-21.webp',
      name: 'Tour Đài Loan 5N4Đ: HCM - Đào Viên - Công Viên Dã Liễu - Cao Hùng',
      startDate: '05/072023',
      duration: '5N4D',
      originalPrice: 17000000,
      discountedPrice: 15500000,
      discount: 9
    },    {
      image: '../../assets/images/p-22.webp',
      name: 'Tour Trung Quốc 5N4Đ: Trương Gia Giới - Phượng Hoàng Cổ Trấn',
      startDate: '05/07/2023',
      duration: '5N4D',
      originalPrice: 18000000,
      discountedPrice: 16790000,
      discount: 7
    },    {
      image: '../../assets/images/p-23.webp',
      name: 'Tour Hàn Quốc 5N4Đ: Xứ Sở Kim Chi Seoul - Nami - Everland',
      startDate: '08/07/2023',
      duration: '5N4D',
      originalPrice: 0,
      discountedPrice: 23090000,
      discount: 0
    },    {
      image: '../../assets/images/p-24.webp',
      name: 'Tour Campuchia 3N3Đ: Cao Nguyên Bokor - Sihanoukville',
      startDate: '02/072023',
      duration: '3N3D',
      originalPrice: 0,
      discountedPrice: 8580000,
      discount: 0
    },
    // Add more tour objects as needed
  ];
  suggestedTours: TourDetail[] = [
    { id1: 1, name1: 'Tour Miền Bắc 4N3Đ: HCM - Hạ Long - Sapa - Hà Khẩu Trung Quốc - Công Viên Ánh Sáng', image1: '../../assets/images/photo13.webp', startDate1: '05/07/2023', duration1: '4N3Đ', originalPrice1: 19000000, discountedPrice1: 17000000, discount1: 11 },
    { id1: 1, name1: 'Tour Phú Quốc 3N2Đ: HCM - Grand World - Câu Cá - Lặn Ngắm San Hô - Nghỉ Dưỡng', image1: '../../assets/images/photo14.webp', startDate1: '02/07/2023', duration1: '3N3Đ', originalPrice1: 6500000, discountedPrice1: 5790000, discount1: 11},
    { id1: 1, name1: 'Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana', image1: '../../assets/images/photo15.webp', startDate1: '01/07/2023', duration1: '3 ngày', originalPrice1: 4800000, discountedPrice1: 4390000, discount1: 9},
    { id1: 1, name1: 'Tour Phú Quốc 3N2Đ: Grand World - Cáp Treo Hòn Thơm - Buffet Trưa 3 Miền', image1: '../../assets/images/photo16.webp', startDate1: '25/06/2023', duration1: '4 ngày', originalPrice1:7500000, discountedPrice1: 6790000, discount1: 9},    
  ];
  brands: string[] = ['lvivu', 'Traveloka', 'Viettravel'];
  tourTypes: string[] = ['Tour Châu Á', 'Tour Châu ÂU', 'Tour Châu Úc', 'Tour Đông Nam Á', 'Tour nước ngoài', 'Tour trong nước'];
  tourTypes1: string[] =['Hà Nội','TP.Hồ Chí Minh', 'Đà Nẵng', 'Nha Trang', 'Hạ Long', 'Sapa',  'Hoi An', 'Quy Nhơn', 'Đà Lạt'];
  tourTypes2: string[] =['Hà Nội','TP.Hồ Chí Minh', 'Bạc Liêu', 'Cà Mau', 'Sóc Trăng', 'Nha Trang', 'Hạ Long', 'Sapa',  'Hoi An', 'Quy Nhơn', 'Đà Lạt'];
  tourTypes3: string[] =['Úc', 'Hàn Quốc',  'Nhật Bản', 'Hoa Kỳ', 'Canada', 'Anh', 'Pháp'];



  priceRanges: { label: string; value: string }[] = [
    { label: 'Dưới 2 triệu', value: 'under2m' },
    { label: 'Từ 2 triệu - 4 triệu', value: '2m-4m' },
    { label: 'Từ 4 triệu - 7 triệu', value: '4m-7m' },
    { label: 'Từ 7 triệu - 13 triệu', value: '7m-13m' },
    { label: 'Trên 13 triệu', value: 'over13m' }
  ];

  sortOptions: string[] = ['Giá tăng dần', 'Giá giảm dần', 'Ngày khởi hành'];

  ngOnInit() {
    
    // Initialize data or fetch from service
  }
}