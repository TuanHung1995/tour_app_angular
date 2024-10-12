import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
interface Tour {
  id: number;
  name: string;
  image: string;
  startDate: string;
  duration: string;
  price: number;
}
interface  TourDetail {
  id1: number;
  name1: string;
  image1:  string;
  startDate1:  string;
  duration1:  string;
  price1:  number;
}


@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, ],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {
 

  tours: Tour[] = [
    { id: 1, name: 'Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ', image: '../../assets/images/photo1.webp', startDate: '28/08/2023', duration: '9N8Đ', price: 136800000 },
    { id: 2, name: 'Tour Bờ Đông Hoa Kỳ 10N9Đ: New York - Philadelphia -...', image: '../../assets/images/photo2.webp', startDate: '28/08/2023', duration: '10N9Đ', price: 160000000 },
    { id: 3, name: 'Tour Hoa Kỳ 6N5Đ: Hawaii - Honolulu - Đảo Thiên Đường', image: ' ../../assets/images/photo3.webp', startDate: '27/08/2023', duration: '6N5Đ', price: 193000000 },
    { id: 4, name: 'Tour Cao Cấp Indonesia 4N3Đ: Thiên Đường Biển Đảo Bali', image: ' ../../assets/images/photo4.webp', startDate: '27/08/2023', duration: '4N3DD', price:2798000},
    { id: 5, name: 'Tour Đà Lạt 4N3Đ: Đà Lạt - Nha Trang - Thành Phố Hoa Biển', image:  '../../assets/images/photo5.webp', startDate: '25/08/2023', duration: '4N3Đ', price:8600000},
    { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image:  '../../assets/images/photo6.webp', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
    { id: 7, name: 'Tour Đà Nẵng 3N2Đ: Sơn Trà - Rừng Dừa - Bảy Mẫu - Hội An - Bà Nà', image:  '../../assets/images/photo7.webp', startDate: '25/08/2023', duration: '3N2Đ', price:4700000},
    { id: 8, name: 'Tour Đà Nẵng 5N4Đ: Hội An - Bà Nà - Huế - Động Phong Nha', image:  '../../assets/images/photo8.webp', startDate: '27/08/2023', duration: '3N2Đ', price:8100000},
    { id: 9, name: 'Tour Mù Cang Chải 3N2Đ: Hà Nội - Trạm Tấu - Cu Vai', image:  '../../assets/images/photo9.webp', startDate: '23/08/2023', duration: '3N2Đ', price:4980000},
    { id: 10, name: 'Tour Ninh Bình 1N : Hà Nội - Bái Đính - Tràng An', image:  '../../assets/images/photo10.webp', startDate: '23/08/2023', duration: '1N', price:830000},
    { id: 11, name: 'Tour Hà Nội 1N: Tham Quan Phố Cổ Hà Nội', image:  '../../assets/images/photo11.webp', startDate: '23/08/2023', duration: '1N', price:700000},
    { id: 12, name: 'Tour Miền Bắc 4N3Đ: HCM - Hạ Long - Sapa - Hà Khẩu Trung Quốc', image: '../../assets/images/photo12.webp', startDate: '05/07/2023', duration: '1N', price:17000000},

  ];

  paginatedTours: Tour[] = [];

 
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
  

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  suggestedTours: TourDetail[] = [
    { id1: 1, name1: 'Tour Miền Bắc 4N3Đ: HCM - Hạ Long - Sapa - Hà Khẩu Trung Quốc - Công Viên Ánh Sáng', image1: '../../assets/images/photo13.webp', startDate1: '05/07/2023', duration1: '4N3Đ', price1: 17000000 },
    { id1: 1, name1: 'Tour Phú Quốc 3N2Đ: HCM - Grand World - Câu Cá - Lặn Ngắm San Hô - Nghỉ Dưỡng', image1: '../../assets/images/photo14.webp', startDate1: '02/07/2023', duration1: '3N3Đ', price1: 5790000 },
    { id1: 1, name1: 'Tour Limousine Phan Thiết 3N2Đ: Hồ Tràm - Phan Thiết - Mũi Né - Công Viên Tropicana', image1: '../../assets/images/photo15.webp', startDate1: '01/07/2023', duration1: '3 ngày', price1: 4390000 },
    { id1: 1, name1: 'Tour Phú Quốc 3N2Đ: Grand World - Cáp Treo Hòn Thơm - Buffet Trưa 3 Miền', image1: '../../assets/images/photo16.webp', startDate1: '25/06/2023', duration1: '4 ngày', price1: 6790000 },
    
  ];


}
