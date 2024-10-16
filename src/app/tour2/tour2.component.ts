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
  selector: 'app-tour2',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './tour2.component.html',
  styleUrl: './tour2.component.css'
})
export class Tour2Component {
  tours: Tour[] = [
    {
      image: '../../assets/images/p-25.webp',
      name: 'Tour Chiang Mai - Chiang Rai 4N3Đ: Trải Nghiệm Miền Bắc Thái Lan',
      startDate: '06/07/2023',
      duration: '4N3Đ',
      originalPrice: 0,
      discountedPrice: 8990000,
      discount: 0
    },
    {
      image: '../../assets/images/p-26.webp',
      name: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử',
      startDate: '01/07/2023',
      duration: '3N2D',
      originalPrice: 0,
      discountedPrice: 899000,
      discount: 0,
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
