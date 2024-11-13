import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { title } from 'process';

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
  selector: 'app-travel9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel9.component.html',
  styleUrl: './travel9.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Travel9Component {
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
seasons = [
  {title: 'Thăm các ngôi chùa linh thiêng nổi tiếng', description:'Ngoài du lịch cắm trại, núi Bà Đen là nơi nổi tiếng với rất nhiều các ngôi chùa linh thiêng. Trong đó không thể bỏ qua chùa Bà Đen với lịch sử hơn 300 tuổi. Ngôi chùa gắn với truyền thuyết về Linh Sơn Thánh Mẫu được người dân địa phương truyền miệng. Đây là điểm đến được nhiều phật tử thành tâm viếng thăm ở các thời điểm trong năm, đặc biệt là dịp lễ tết.', image: '../../assets/images/b4.jpg'},
  {title: 'Săn mây khi cắm trại núi Bà Đen', description:'Du khách đến cắm trại núi Bà Đen sao có thể bỏ qua việc săn mây. Chắc chắn bạn sẽ ngỡ ngàng khi nhìn ngắm khung cảnh tuyệt đẹp, vô cùng hùng vĩ của thiên nhiên nơi đây. Núi Bà Đen có độ cao ấn tượng, quanh năm mây mù bao phủ. Tuy nhiên, để bắt kịp khoảnh khắc mây trời lững lờ trôi giữa không gian thì không phải dễ dàng.', image: '../../assets/images/b5.jpg'},
  {title: ' Khám phá các hang động tự nhiên', description:'Với địa hình núi cao, núi Bà Đen có nhiều hang động tự nhiên để du khách khám phá. Các hang được hình thành bởi sức mạnh của tạo hóa, có những hình thù rất đặc biệt. Đến nay, rất nhiều hang động ở núi Bà Đen vẫn tiềm ẩn nhiều điều bí mật kỳ thú. Những điều mà ngay cả giới khoa học cũng chưa thể khám phá được một cách hoàn toàn.', image:'../../assets/images/b6.jpg'},
  {title: 'Thưởng thức ẩm thực Tây Ninh', description:'Cắm trại ở trên núi Bà Đen chắc chắn điều tuyệt vời nhất phải kể đến những bữa tiệc tự nấu bằng than củi hay tiệc BBQ ngoài trời. Nhưng nếu bạn không có đủ thời gian, hay đơn giản là muốn khám phá ẩm thực Tây Ninh thì có rất nhiều món ăn ngon đang chờ bạn thưởng thức bất cứ khi nào.', image: '../../assets/images/b7.jpg'}

];
seasons1 = [
  {title: 'Đi cáp treo ', description: 'Nếu muốn di chuyển nhanh chóng và tiết kiệm sức lực, lại được ngắm cảnh đẹp núi non hùng vĩ bên dưới bạn có thể đi cáp treo rất thuận tiện. Thời gian đi cáp treo khoảng 45 phút sẽ lên tới đỉnh núi Bà Đen. Giá vé cáp treo dao động khoảng 140.000đ/người lớn. Thời gian hoạt động từ 5h30 - 21h30. ', image: '../../assets/images/b1.jpg'},
  {title: 'Trekking núi Bà Đen ', description: 'Đối với những bạn muốn khám phá có thể leo bộ lên đỉnh núi Bà Đen, đây cũng là trải nghiệm thú vị được nhiều du khách yêu thích. Tuy nhiên đường đi khá gồ ghề, vì vậy bạn nên cẩn thận khi đi và tốt nhất nên đi giày cũng như chuẩn bị cho mình một chiếc gậy. Ngoài ra, cần có lương thực và nước uống.', image: '../../assets/images/b3.jpg'},
];
seasons2 = [
  {title: ' Nên mua hoặc thuê lều trại có lớp cách nhiệt', description:'Du khách cắm trại núi Bà Đen thường có ý định săn mây, nên cần lựa chọn điểm cắm trại ở địa thế cao. Cũng vì thế mà nhiệt độ nơi đây sẽ xuống khá thấp về đêm và sáng sớm. Đặc biệt sẽ có nhiều sương mù, sương muối, có thể ảnh hưởng đến sức khỏe của bạn và các thành viên.', image: '../../assets/images/b8.jpg'},
  {title: ' Chuẩn bị trang phục phù hợp', description:'Ngoài là điểm du lịch cắm trại, núi Bà Đen còn là khu di tích lịch sử linh thiêng. Đến đây du lịch nếu muốn vãn cảnh chùa. Du khách nên chuẩn bị 1 đến 2 bộ trang phục lịch sự để phù hợp với tính trang trọng, tôn nghiêm nơi cửa phật. Sẽ có rất nhiều địa điểm văn hóa lịch sử lý thú du khách có thể ghé thăm. Do đó đừng để trang phục là một trở ngại trong hành trình của bạn.', image:'../../assets/images/b9.jpg'},
  {title: 'Mang theo đồ ăn nhẹ', description: 'Đồ ăn chắc chắn là thứ không thể thiếu trong một chuyến cắm trại. Thưởng thức những bữa tiệc nướng bên bếp lửa hồng trong không gian rừng núi quả là tuyệt vời. Du khách nên mang theo các loại thực phẩm cho bữa tiệc bởi tại đây không có các cửa hàng bán thực phẩm sống. Bạn nên lưu ý cần chuẩn bị thực phẩm đủ cho cả bữa tối và bữa sáng hôm sau. Nhờ đó có thể đảm bảo nạp đủ năng lượng cho cơ thể.', image: '../../assets/images/b10.jpg'}
]
}

