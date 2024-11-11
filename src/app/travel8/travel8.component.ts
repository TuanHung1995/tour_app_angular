import { Component,  ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  selector: 'app-travel8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel8.component.html',
  styleUrl: './travel8.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Travel8Component {
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
 {title:' Tận hưởng thiên nhiên núi Chư Nâm ', description: 'Cắm trại ở Chư Nâm bạn sẽ được tận hưởng một thiên nhiên tuyệt sắc trong tầm mắt, đây cũng chính là lý do mà nhiều người quyết chinh phục ngọn núi này dù hành trình bắt đầu không hề dễ dàng. Bạn sẽ được ngắm nhìn những khoảng rừng cổ thụ xanh thẫm, ngắm lòng hồ thuỷ điện Ia Ly xa xa, Chư Đăng Ya trước mặt lại tựa như một lòng chảo bé nhỏ so với chư Nâm với những khoảng xanh lấm tấm của những nương rẫy đang vào mùa, ngôi nhà sàn của đồng bào Ia Gri nép mình bên những cung đường nhỏ hay những sương khói mờ ảo bay lên từ đỉnh núi bên cạnh, dãy Kon Ka Kinh xanh thẫm ẩn hiện trong làn mây bạc.',image: '../../assets/images/n4.jpg'},
 {title:' Săn mây', description: 'Có người từng nói, hành trình trekking và cắm trại ở Chư Nâm chính là hành trình bước cùng bây ngàn bởi từ đỉnh núi này bạn có thể được chiêm ngưỡng khung cảnh những vầng mây háo hức dạo chơi trên đỉnh non cao. Chư Nâm chính là thánh địa săn mây tuyệt vời chính vì vậy khi cắm trại ở đây bạn sẽ không thể bỏ lỡ khoảnh khắc những đám mây ùa xuống kèm theo từng hạt nước liti và cái lạnh đặc trưng mang đến cảm giác đến sảng khoái.Thời khắc tuyệt vời nhất để cắm trại ở Chư Nâm và ngắm mây chính là dịp cuối năm, lúc này đất trời hanh hao, nắng đẹp không có mưa, những thảm mây xốp trắng lượn lờ ở khe núi, kết thành từng chùm dạo chơi khắp nơi sẽ tạo nên một khung cảnh đầy kỳ thú.',image: '../../assets/images/n3.jpg'},
 {title:' Đốt lửa trại & tiệc BBQ o', description:'Cắm trại ở Chư Nâm và tận hưởng những đêm cao nguyên tĩnh lặng, nơi chỉ có những thanh âm của núi rừng và tiếng gió ngàn vi vu. Dưới bầu trời đầy sao, bạn có thể cùng bạn bfe, nhâm nhi những ly cafe nóng, thưởng thức những bữa tiệc BBQ thơm ngon bên ánh lửa bập bùng, lắng nghe những câu chuyện về xứ cao nguyên huyền thoại hay có những phút giây lắng lòng phóng tầm mắt hướng về thành phố nơi có có những chấm sáng nhỏ xíu, tựa ánh sao xa. Đêm cao nguyên tĩnh lặng cũng là lúc bạn có thể cảm nhận rõ nét cảm giác của sự tự do, hồn nhiên và trong trẻo.',image: '../../assets/images/n2.jpg'},
//  {image: '../../assets/images/c4.jpg'},
//  {image: '../../assets/images/c5.jpg'},
//  {image: '../../assets/images/c6.jpg'},
//  {image: '../../assets/images/c7.jpg'},
//  {image: '../../assets/images/c8.jpg'},
// //  {image: '../../assets/images/c9.jpg'},
//  {image: '../../assets/images/c10.jpg'},
//  {image: '../../assets/images/c11.jpg'},
//  {image: '../../assets/images/q12.jpg'},

];
seasons2 =[
  {image:'../../assets/images/n6.jpg'},
  {image:'../../assets/images/n7.jpg'},
  {image:'../../assets/images/n8.jpg'},
]
}

