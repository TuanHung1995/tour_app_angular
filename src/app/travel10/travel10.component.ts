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
  selector: 'app-travel0',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel10.component.html',
  styleUrl: './travel10.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Travel10Component {
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
  {title:'Hạ Long - Quảng Ninh ', description: 'Hạ Long được xem là một trong những điểm du lịch nổi tiếng nhất miền Bắc Việt Nam. Đến Hạ Long, bạn sẽ được ngắm nhìn vẻ đẹp của vịnh Hạ Long với hàng nghìn đảo đá lớn nhỏ xanh ngắt nổi trên mặt biển. Bạn có thể đi thuyền kayaking, tham quan hang động, tắm biển hay đơn giản chỉ nghỉ ngơi trên tàu thưởng ngoạn cảnh quan.',image: '../../assets/images/v1.jpg'},
  {title:'Cô Tô - Quảng Ninh', description: 'Nếu có ai đó hỏi rằng tháng 7 nên đi du lịch ở đâu Việt Nam? Thì câu trả lời đầu tiên chính là du lịch biển Cô Tô - Quảng Ninh. Với vẻ đẹp hoang sơ, giản dị, biển Cô Tô luôn cuốn hút đông đảo du khách ghé thăm. Nơi đây, bạn sẽ có cơ hội hòa mình trong làn nước trong vắt, mát lạnh của những bãi tắm đẹp như mơ như Bãi Vàn Chảy, bãi tắm tình yêu, bãi Hồng Vàn,... Cùng nhiều địa danh có cảnh sắc thiên nhiên tuyệt đẹp như Bãi đá Móng Rồng, hải đăng Cô Tô, bãi Cô Tô con,...',image: '../../assets/images/v2.jpg'},
  {title:'Sapa', description:'Sapa là một thành phố nhỏ nằm ở miền Bắc Việt Nam, với phong cảnh đẹp và khí hậu mát mẻ quanh năm. Sapa được biết đến với những cánh đồng lúa bậc thang bát ngát, các khu vườn ngập tràn hương sắc của các loài hoa và những thác nước hùng vĩ. Nơi đây cũng là điểm đến lý tưởng để bạn có thể tìm hiểu về đời sống của người dân tộc thiểu số tại các bản làng và đặc biệt là đỉnh Fansipang  - điểm đến du lịch cao nhất Việt Nam. ',image: '../../assets/images/v3.jpg'},
  {title:'Hà Giang', description:'Với những cánh đồng hoa màu tím và những ngọn đồi xanh mướt, Hà Giang là điểm đến đẹp nhất vào tháng 7. Tại đây, bạn có thể tham gia các hoạt động như đi bộ đường dài, leo núi, ngắm cảnh và tham quan các bản làng dân tộc.', image: '../../assets/images/v4.jpg'}
 ];
seasons2 = [
  {title: 'Đà Nẵng', description:'Dù phân vân tháng 7 nên đi du lịch ở đâu thì nhiều người vẫn luôn dành vị trí đầu tiên cho du lịch Đà Nẵng. Tháng 7, thành phố năng động này đón bạn bằng những đợt nắng vàng ruộm của mùa khô và mùi mặn mòi của biển cả. Đừng quên sắm cho mình những bộ đồ bơi thật đẹp để được đắm mình vào làn nước trong mát của bãi biển Mỹ Khê', image: '../../assets/images/v5.jpg'},
  {title: 'Quy Nhơn', description:'Thời tiết Quy Nhơn tháng 7 vô cùng hoàn hảo để đi du lịch biển. Với nhiệt độ trung bình dao động từ 27 đến 33 độ, bạn tha hồ mặc những bộ đồ năng động khi đến với Quy Nhơn. ', image: '../../assets/images/v6.jpg'},
  {title: 'Phú Yên', description:'Phú Yên tháng 7 đón bạn bằng sự trong lành của không khí và làn nước trong vắt của biển cả. Chưa bước vào mùa mưa nên đây sẽ là dịp hoàn hảo để bạn khám phá xứ "nẫu". Phú Yên có rất nhiều cảnh đẹp, hệt như những thước phim trong "Tôi thấy hoa vàng trên cỏ xanh". ', image: '../../assets/images/v7.jpg'},
  {title: 'Mũi Né - Phan Thiết', description:'Thiên đường resort Mũi Né - Phan Thiết sẽ là điểm dừng chân thú vị cho chuyến du lịch tháng 7 của bạn. Đến với Mũi Né, bạn sẽ có những phút giây thực sự nghỉ dưỡng bên người thân. ', image: './../assets/images/v8.jpg'},
];
seasons3 = [
  {title:'Đà Lạt', description:'Du lịch Đà Lạt vào tháng 7, du khách sẽ được chiêm ngưỡng vẻ đẹp thiên nhiên hùng vĩ của những con thác, vẻ thanh bình, yên ả của những hồ nước trong xanh hay vẻ đẹp thơ mộng của đồi thông rộng lớn. Hơn nữa, Đà Lạt vào tháng 7 đẹp như một bức tranh đầy màu sắc của những loài hoa đang nở rộ. Nào là hoa dã quỳ mộc mạc, hoa hồng kiêu sa, cẩm tú cầu mơ mộng,... cho đến những cánh đồng lau man mác hay hoa hướng dương rợp vàng cả một vùng trời... ',image: '../../assets/images/v9.webp'},
  {title:'Phú Quốc', description:'Phú Quốc là một hòn đảo nằm ở miền Nam Việt Nam, được biết đến với những bãi biển đẹp như tranh vẽ và nhiều hoạt động giải trí hoành tráng hàng đầu. Đảo có nhiều địa điểm tham quan như Bãi Dài, Bãi Sao, đảo Móng Tay, Suối Tranh, chợ đêm Dương Đông. Du khách có thể tham gia các hoạt động như tắm biển, lặn biển, lướt ván, chèo thuyền kayak, tham quan các khu vườn trái cây, trải nghiệm ẩm thực đặc trưng của địa phương và khám phá văn hóa dân tộc đặc trưng. ', image:'../../assets/images/v10.jpg'},
  {title:'Cần Thơ', description:'Cần Thơ xinh đẹp biết bao trong câu thơ gạo trắng nước trong - ai đi đến đó lòng không muốn về. Tháng 7, Cần Thơ cũng bắt đầu chuyển giao giữa mùa mưa và nắng. Những ngày đầu tháng 7 mưa chưa nhiều nên bạn có thể tranh thủ tham quan.', image:'./../assets/images/v11.png'},
  {title:'An Giang', description:'Đến An Giang, du khách đừng quên thưởng thức các đặc sản chỉ ngon khi ăn tại địa phương như bún cá Châu Đốc, cháo bò Tri Tôn, gà nướng lá chúc Ô Thum, cơm tấm Long Xuyên, bánh bò thốt nốt, xôi Xiêm, gỏi sầu đâu, cơm nị cà púa của người Chăm...', image:'./../assets/images/v12.jpg'}
];
}

