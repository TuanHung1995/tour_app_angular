import { Component } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
interface Tour {
  id: number;
  name: string;
  image: string;
  startDate: string;
  duration: string;
  price: number;
}

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {
  tours: Tour[] = [
    { id: 1, name: 'Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ', image: 'assets/images/photo1.webp', startDate: '28/08/2023', duration: '9N8Đ', price: 136800000 },
    { id: 2, name: 'Tour Bờ Đông Hoa Kỳ 10N9Đ: New York - Philadelphia -...', image: 'path_to_usa_image.jpg', startDate: '28/08/2023', duration: '10N9Đ', price: 160000000 },
    { id: 3, name: 'Tour Hoa Kỳ 6N5Đ: Hawaii - Honolulu - Đảo Thiên Đường', image: 'path_to_hawaii_image.jpg', startDate: '27/08/2023', duration: '6N5Đ', price: 193000000 },
    { id: 4, name: 'Tour Cao Cấp Indonesia 4N3Đ: Thiên Đường Biển Đảo Bali', image: 'path_to_danang_image.jpg', startDate: '27/08/2023', duration: '4N3DD', price:2798000},
    { id: 5, name: 'Tour Đà Lạt 4N3Đ: Đà Lạt - Nha Trang - Thành Phố Hoa Biển', image: 'path_to_danang_image.jpg', startDate: '25/08/2023', duration: '4N3Đ', price:8600000},
    { id: 6, name: 'Tour Đà Lạt 3N2Đ : Đà Lạt - Thành Phố Ngàn Hoa', image: 'path_to_danang_image.jpg', startDate: '29/08/2023', duration: '3N2Đ', price:6600000},
    { id: 7, name: 'Tour Đà Nẵng 3N2Đ: Sơn Trà - Rừng Dừa - Bảy Mẫu - Hội An - Bà Nà', image: 'path_to_danang_image.jpg', startDate: '25/08/2023', duration: '3N2Đ', price:4700000},
    { id: 8, name: 'Tour Đà Nẵng 5N4Đ: Hội An - Bà Nà - Huế - Động Phong Nha', image: 'path_to_danang_image.jpg', startDate: '27/08/2023', duration: '3N2Đ', price:8100000},
    { id: 9, name: 'Tour Mù Cang Chải 3N2Đ: Hà Nội - Trạm Tấu - Cu Vai', image: 'path_to_danang_image.jpg', startDate: '23/08/2023', duration: '3N2Đ', price:4980000},
    { id: 10, name: 'Tour Ninh Bình 1N : Hà Nội - Bái Đính - Tràng An', image: 'path_to_danang_image.jpg', startDate: '23/08/2023', duration: '1N', price:830000},
    { id: 11, name: 'Tour Hà Nội 1N: Tham Quan Phố Cổ', image: 'path_to_danang_image.jpg', startDate: '23/08/2023', duration: '1N', price:700000},
    { id: 12, name: 'Tour Miền Bắc 4N3Đ: HCM - Hạ Long - Sapa - Hà Khẩu Trung Quốc - Công Viên Ánh Sáng', image: 'path_to_danang_image.jpg', startDate: '05/07/2023', duration: '1N', price:17000000},

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

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

}
