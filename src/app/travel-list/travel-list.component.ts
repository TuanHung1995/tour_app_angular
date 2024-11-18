import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
register();

interface TravelDetail {
  id: number;
  title: string;
  description: string;
  location: string;
  heritage: string;
  opening: string;
  mainImage: string;
  author: string;
  date: string;
  // Thêm các trường mới cho chi tiết
  overview: string;
  highlights: string[];
  activities: Activity[];
  quickInfo: QuickInfo;
  weather: Weather;
  galleryImages: string[];
}

interface Activity {
  title: string;
  description: string;
}

interface QuickInfo {
  bestTime: string;
  openingHours: string;
  prices: {
    adult: number;
    child: number;
  };
}

interface Weather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

@Component({
  selector: 'app-travel-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TravelListComponent implements AfterViewInit {
  
// Tiếp tục từ đối tượng travel đầu tiên
travels: TravelDetail[] = [
  {
    id: 1,
    title: "Du hành ngược thời gian tại làng dân gian",
    description: "Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc",
    location: "Tỉnh Jeolla Nam, Hàn Quốc",
    heritage: "Di sản UNESCO từ 2011",
    opening: "Mở cửa hàng ngày",
    mainImage: "../../assets/images/t-1.webp",
    author: "Nguyễn Thị Kim Anh",
    date: "02/07/2023",
    overview: "Nằm tại tỉnh Jeolla Nam của Hàn Quốc, làng dân gian Naganeupseong là một trong những di sản văn hóa quý giá với lịch sử gần 700 năm...",
    highlights: [
      "Kiến trúc truyền thống được bảo tồn nguyên vẹn từ thời Joseon",
      "Hệ thống tường thành và cổng làng còn nguyên vẹn",
      "Trải nghiệm văn hóa truyền thống Hàn Quốc",
      "Các lễ hội và sự kiện văn hóa được tổ chức thường xuyên"
    ],
    activities: [
      {
        title: "Tham quan nhà truyền thống",
        description: "Khám phá kiến trúc và cách bài trí trong nhà truyền thống Hanok"
      },
      {
        title: "Trải nghiệm văn hóa",
        description: "Thử mặc Hanbok và tham gia các hoạt động truyền thống"
      },
      {
        title: "Dạo quanh tường thành",
        description: "Ngắm cảnh toàn làng từ trên cao và chụp ảnh"
      },
      {
        title: "Ẩm thực địa phương",
        description: "Thưởng thức các món ăn truyền thống của vùng Jeolla"
      }
    ],
    quickInfo: {
      bestTime: "Mùa xuân (tháng 3-5) và mùa thu (tháng 9-11)",
      openingHours: "09:00 - 18:00",
      prices: {
        adult: 4000,
        child: 2000
      }
    },
    weather: {
      temperature: 24,
      condition: "Nắng nhẹ",
      humidity: 65,
      windSpeed: 12
    },
    galleryImages: [
      "../../assets/images/p1.jpg",
      "../../assets/images/p2.jpg",
      "../../assets/images/p3.jpg",
      "../../assets/images/p4.jpg"
    ]
  },
  {
    id: 2,
    title: "Khám phá Cố đô Huế - Kinh thành di sản",
    description: "Quần thể di tích Cố đô Huế - nơi lưu giữ những giá trị văn hóa và lịch sử độc đáo của Việt Nam",
    location: "Thừa Thiên Huế, Việt Nam",
    heritage: "Di sản UNESCO từ 1993",
    opening: "Mở cửa hàng ngày",
    mainImage: "../../assets/images/th.jpg",
    author: "Trần Văn Nam",
    date: "15/07/2023",
    overview: "Cố đô Huế là quần thể di tích lịch sử văn hóa và kiến trúc nghệ thuật nằm ở thành phố Huế, tỉnh Thừa Thiên Huế...",
    highlights: [
      "Kinh thành Huế - công trình kiến trúc độc đáo thời Nguyễn",
      "Lăng tẩm các vua nhà Nguyễn",
      "Sông Hương và cầu Trường Tiền biểu tượng",
      "Ẩm thực cung đình độc đáo"
    ],
    activities: [
      {
        title: "Tham quan Đại Nội",
        description: "Khám phá cung điện hoàng gia và các công trình kiến trúc"
      },
      {
        title: "Du thuyền sông Hương",
        description: "Ngắm cảnh và thưởng thức ca Huế trên sông"
      },
      {
        title: "Viếng lăng tẩm",
        description: "Tham quan các lăng tẩm của các vua nhà Nguyễn"
      },
      {
        title: "Thưởng thức ẩm thực",
        description: "Trải nghiệm ẩm thực cung đình và đặc sản Huế"
      }
    ],
    quickInfo: {
      bestTime: "Mùa xuân (tháng 2-4) và mùa thu (tháng 9-11)",
      openingHours: "07:00 - 17:30",
      prices: {
        adult: 150000,
        child: 75000
      }
    },
    weather: {
      temperature: 32,
      condition: "Nắng nóng",
      humidity: 75,
      windSpeed: 8
    },
    galleryImages: [
      "../../assets/images/p6.jpg",
      "../../assets/images/p7.jpg",
      "../../assets/images/p8.webp",
      "../../assets/images/p9.jpg"
    ]
  },
  {
    id: 3,
    title: "Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới",
    description: "Vịnh Hạ Long với hàng nghìn hòn đảo đá vôi tạo nên khung cảnh tuyệt đẹp trên biển",
    location: "Quảng Ninh, Việt Nam",
    heritage: "Di sản UNESCO từ 1994",
    opening: "Mở cửa cả năm",
    mainImage: "../../assets/images/tv.jpg",
    author: "Lê Thanh Hà",
    date: "20/07/2023",
    overview: "Vịnh Hạ Long là một trong những kỳ quan thiên nhiên của thế giới với hơn 1.600 hòn đảo đá vôi...",
    highlights: [
      "Khung cảnh thiên nhiên độc đáo với các đảo đá vôi",
      "Hang động kỳ bí và đẹp",
      "Làng chài truyền thống",
      "Hoạt động thể thao dưới nước"
    ],
    activities: [
      {
        title: "Du thuyền vịnh Hạ Long",
        description: "Ngắm cảnh vịnh và nghỉ đêm trên du thuyền"
      },
      {
        title: "Khám phá hang động",
        description: "Tham quan các hang động nổi tiếng như Thiên Cung, Đầu Gỗ"
      },
      {
        title: "Chèo kayak",
        description: "Khám phá vịnh bằng kayak và ghé thăm các hang động nhỏ"
      },
      {
        title: "Tắm biển",
        description: "Tắm biển tại các bãi tắm đẹp trong vịnh"
      }
    ],
    quickInfo: {
      bestTime: "Mùa thu (tháng 9-11) và mùa xuân (tháng 3-4)",
      openingHours: "00:00 - 24:00",
      prices: {
        adult: 250000,
        child: 125000
      }
    },
    weather: {
      temperature: 28,
      condition: "Mây rải rác",
      humidity: 80,
      windSpeed: 15
    },
    galleryImages: [
      "../../assets/images/p10.jpg",
      "../../assets/images/p11.webp",
      "../../assets/images/p12.jpg",
      "../../assets/images/p13.jpg"
    ]
  },
  {
    id: 4,
    title: "Phong Nha - Kẻ Bàng: Vương quốc hang động",
    description: "Khám phá hệ thống hang động lớn nhất thế giới tại Quảng Bình",
    location: "Quảng Bình, Việt Nam",
    heritage: "Di sản UNESCO từ 2003",
    opening: "Mở cửa hàng ngày",
    mainImage: "../../assets/images/tp.jpg",
    author: "Hoàng Minh Tuấn",
    date: "25/07/2023",
    overview: "Vườn quốc gia Phong Nha - Kẻ Bàng là khu bảo tồn thiên nhiên với hệ thống hang động kỳ vĩ bậc nhất thế giới. Nơi đây không chỉ nổi tiếng với hang Sơn Đoòng - hang động tự nhiên lớn nhất thế giới, mà còn có hệ sinh thái đa dạng với nhiều loài động thực vật quý hiếm...",
    highlights: [
      "Hang Sơn Đoòng - hang động lớn nhất thế giới",
      "Động Thiên Đường với những măng đá, nhũ đá tuyệt đẹp",
      "Sông Chày - Hang Tối với hoạt động thể thao mạo hiểm",
      "Hệ sinh thái rừng nhiệt đới nguyên sinh"
    ],
    activities: [
      {
        title: "Thám hiểm hang động",
        description: "Khám phá các hang động nổi tiếng như Paradise Cave, Dark Cave"
      },
      {
        title: "Zipline và tắm bùn",
        description: "Trải nghiệm zipline vượt sông và tắm bùn khoáng tại Dark Cave"
      },
      {
        title: "Chèo thuyền kayak",
        description: "Khám phá sông Son và các hang động bằng thuyền kayak"
      },
      {
        title: "Trekking rừng nhiệt đới",
        description: "Khám phá hệ sinh thái rừng nguyên sinh độc đáo"
      }
    ],
    quickInfo: {
      bestTime: "Mùa khô (tháng 2-8)",
      openingHours: "07:30 - 16:30",
      prices: {
        adult: 300000,
        child: 150000
      }
    },
    weather: {
      temperature: 30,
      condition: "Nắng ráo",
      humidity: 70,
      windSpeed: 10
    },
    galleryImages: [
      "../../assets/images/p14.jpg",
      "../../assets/images/p15.jpg",
      "../../assets/images/p16.jpg",
      "../../assets/images/p17.jpg"
    ]
  },
  {
    id: 5,
    title: "Phố cổ Hội An - Điểm đến văn hóa độc đáo",
    description: "Thành phố cổ xinh đẹp với kiến trúc độc đáo và ẩm thực phong phú",
    location: "Quảng Nam, Việt Nam",
    heritage: "Di sản UNESCO từ 1999",
    opening: "Mở cửa 24/7",
    mainImage: "../../assets/images/ta.jpg",
    author: "Phạm Thị Mai",
    date: "30/07/2023",
    overview: "Phố cổ Hội An là một trong những điểm đến hấp dẫn nhất Việt Nam, nơi giao thoa của nhiều nền văn hóa. Với kiến trúc cổ được bảo tồn nguyên vẹn, những con phố rợp bóng đèn lồng và ẩm thực đặc sắc, Hội An mang đến cho du khách trải nghiệm văn hóa độc đáo...",
    highlights: [
      "Kiến trúc cổ độc đáo thế kỷ 15-19",
      "Đèn lồng rực rỡ về đêm",
      "Ẩm thực đặc sắc với Cao lầu, Mì Quảng",
      "Làng nghề truyền thống"
    ],
    activities: [
      {
        title: "Dạo phố cổ",
        description: "Khám phá các ngôi nhà cổ, chùa cổ và cầu Nhật Bản"
      },
      {
        title: "Trải nghiệm ẩm thực",
        description: "Thưởng thức các món ăn đặc sản và học nấu ăn"
      },
      {
        title: "Đêm phố cổ",
        description: "Ngắm cảnh phố cổ về đêm với đèn lồng lung linh"
      },
      {
        title: "Tham quan làng nghề",
        description: "Ghé thăm làng gốm Thanh Hà, làng mộc Kim Bồng"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 2-4 hoặc tháng 9-10",
      openingHours: "00:00 - 24:00",
      prices: {
        adult: 120000,
        child: 60000
      }
    },
    weather: {
      temperature: 31,
      condition: "Nắng nhẹ",
      humidity: 75,
      windSpeed: 8
    },
    galleryImages: [
      "../../assets/images/p19.jpg",
      "../../assets/images/p20.jpg",
      "../../assets/images/p21.jpg",
      "../../assets/images/p22.jpg"
    ]
  },
  {
    id: 6,
    title: "Đảo Jeju - Thiên đường nghỉ dưỡng",
    description: "Hòn đảo xinh đẹp với cảnh quan thiên nhiên tuyệt vời và văn hóa độc đáo",
    location: "Jeju, Hàn Quốc",
    heritage: "Di sản UNESCO từ 2007",
    opening: "Mở cửa quanh năm",
    mainImage: "../../assets/images/tj.jpg",
    author: "Lee Min Ho",
    date: "05/08/2023",
    overview: "Đảo Jeju là điểm đến nghỉ dưỡng nổi tiếng của Hàn Quốc với phong cảnh thiên nhiên tuyệt đẹp, từ núi lửa đến bãi biển trong xanh. Đảo còn nổi tiếng với văn hóa độc đáo của người phụ nữ lặn biển haenyeo và ẩm thực phong phú...",
    highlights: [
      "Núi Hallasan - núi cao nhất Hàn Quốc",
      "Hang động dung nham độc đáo",
      "Văn hóa haenyeo - người phụ nữ lặn biển",
      "Bãi biển đẹp và thác nước tự nhiên"
    ],
    activities: [
      {
        title: "Leo núi Hallasan",
        description: "Chinh phục đỉnh núi cao nhất Hàn Quốc"
      },
      {
        title: "Thăm làng dân tộc",
        description: "Tìm hiểu văn hóa và lối sống truyền thống"
      },
      {
        title: "Lặn biển với haenyeo",
        description: "Trải nghiệm văn hóa lặn biển độc đáo"
      },
      {
        title: "Tham quan bảo tàng",
        description: "Khám phá lịch sử và văn hóa đảo Jeju"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 4-6 hoặc tháng 9-11",
      openingHours: "00:00 - 24:00",
      prices: {
        adult: 50000,
        child: 25000
      }
    },
    weather: {
      temperature: 26,
      condition: "Mát mẻ",
      humidity: 68,
      windSpeed: 15
    },
    galleryImages: [
      "../../assets/images/p34.jpg",
      "../../assets/images/p35.jpg",
      "../../assets/images/p36.jpg",
      "../../assets/images/p37.jpg"
    ]
  },
  {
    id: 7,
    title: "Angkor Wat - Kỳ quan của đế chế Khmer",
    description: "Quần thể đền đài Angkor Wat - Di sản kiến trúc và tâm linh vĩ đại của nền văn minh Khmer cổ đại",
    location: "Siem Reap, Campuchia",
    heritage: "Di sản UNESCO từ 1992",
    opening: "Mở cửa hàng ngày",
    mainImage: "../../assets/images/tg.jpg",
    author: "Lê Hoàng Nam",
    date: "10/08/2023",
    overview: "Angkor Wat là quần thể đền đài Hindu lớn nhất thế giới, được xây dựng vào thế kỷ 12, là biểu tượng của sự vĩ đại của đế chế Khmer...",
    highlights: [
      "Kiến trúc đền đài độc đáo",
      "Nghệ thuật điêu khắc tinh xảo",
      "Hoàng hôn tuyệt đẹp tại đền chính",
      "Lễ hội văn hóa truyền thống"
    ],
    activities: [
      {
        title: "Tham quan đền đài",
        description: "Khám phá các đền Angkor Wat, Bayon, Ta Prohm"
      },
      {
        title: "Xem bình minh",
        description: "Ngắm bình minh tại Angkor Wat"
      },
      {
        title: "Tour xe đạp",
        description: "Khám phá quần thể bằng xe đạp"
      },
      {
        title: "Show múa Apsara",
        description: "Thưởng thức múa cổ truyền Khmer"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 11-2 (mùa khô)",
      openingHours: "05:00 - 18:00",
      prices: {
        adult: 37,
        child: 0
      }
    },
    weather: {
      temperature: 32,
      condition: "Nắng nóng",
      humidity: 80,
      windSpeed: 8
    },
    galleryImages: [
      "../../assets/images/p38.jpg",
      "../../assets/images/p39.jpg",
      "../../assets/images/p40.jpg",
      "../../assets/images/p41.jpg"
    ]
  },
  {
    id: 8,
    title: "Fuji San - Ngọn núi thiêng của Nhật Bản",
    description: "Núi Phú Sĩ - Biểu tượng văn hóa và thiên nhiên của đất nước Mặt Trời mọc",
    location: "Tỉnh Yamanashi và Shizuoka, Nhật Bản",
    heritage: "Di sản UNESCO từ 2013",
    opening: "Mở cửa mùa leo núi (tháng 7-9)",
    mainImage: "../../assets/images/tf.jpg",
    author: "Hoàng Minh Trí",
    date: "15/08/2023",
    overview: "Núi Phú Sĩ không chỉ là ngọn núi cao nhất Nhật Bản mà còn là biểu tượng văn hóa, tâm linh của người Nhật...",
    highlights: [
      "Đỉnh núi tuyết phủ quanh năm",
      "Cảnh quan tuyệt đẹp bốn mùa",
      "Đền chùa linh thiêng",
      "Hồ Kawaguchiko nổi tiếng"
    ],
    activities: [
      {
        title: "Leo núi Phú Sĩ",
        description: "Chinh phục đỉnh núi cao nhất Nhật Bản"
      },
      {
        title: "Ngắm hồ Kawaguchiko",
        description: "Chụp ảnh núi Phú Sĩ phản chiếu trên mặt hồ"
      },
      {
        title: "Tham quan đền chùa",
        description: "Viếng thăm các đền thờ xung quanh núi"
      },
      {
        title: "Onsen",
        description: "Tắm onsen với view núi Phú Sĩ"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 7-9 (mùa leo núi), tháng 11-2 (ngắm núi đẹp nhất)",
      openingHours: "24/7 trong mùa leo núi",
      prices: {
        adult: 1000,
        child: 500
      }
    },
    weather: {
      temperature: 15,
      condition: "Mát mẻ",
      humidity: 65,
      windSpeed: 15
    },
    galleryImages: [
      "../../assets/images/p42.jpg",
      "../../assets/images/p43.jpg",
      "../../assets/images/p44.jpg",
      "../../assets/images/p45.jpg"
    ]
  },
  {
    id: 9,
    title: "Taj Mahal - Biểu tượng tình yêu vĩnh cửu",
    description: "Taj Mahal - Kiệt tác kiến trúc Mughal và câu chuyện tình yêu bất tử",
    location: "Agra, Ấn Độ",
    heritage: "Di sản UNESCO từ 1983",
    opening: "Mở cửa hàng ngày (trừ thứ 6)",
    mainImage: "../../assets/images/tm.jpg",
    author: "Nguyễn Thanh Tùng",
    date: "20/08/2023",
    overview: "Taj Mahal được xây dựng bởi Hoàng đế Shah Jahan để tưởng nhớ người vợ yêu quý Mumtaz Mahal, là biểu tượng của tình yêu vĩnh cửu...",
    highlights: [
      "Kiến trúc cẩm thạch trắng tinh xảo",
      "Vườn Mughal tuyệt đẹp",
      "Hoàng hôn và bình minh ấn tượng",
      "Nghệ thuật khảm đá quý độc đáo"
    ],
    activities: [
      {
        title: "Tham quan lăng mộ",
        description: "Khám phá kiến trúc và lịch sử Taj Mahal"
      },
      {
        title: "Chụp ảnh bình minh",
        description: "Ngắm Taj Mahal trong ánh bình minh"
      },
      {
        title: "Dạo vườn Mughal",
        description: "Khám phá vườn hoa và đài phun nước"
      },
      {
        title: "Tour đêm trăng tròn",
        description: "Ngắm Taj Mahal dưới ánh trăng"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 10-3 (thời tiết mát mẻ)",
      openingHours: "06:00 - 18:30",
      prices: {
        adult: 1100,
        child: 0
      }
    },
    weather: {
      temperature: 35,
      condition: "Nắng nóng",
      humidity: 60,
      windSpeed: 10
    },
    galleryImages: [
      "../../assets/images/p46.jpg",
      "../../assets/images/p47.jpg",
      "../../assets/images/p48.jpg",
      "../../assets/images/p49.jpg"
    ]
  },
  {
    id: 10,
    title: "Santorini - Thiên đường Aegean",
    description: "Hòn đảo tuyệt đẹp với những ngôi nhà trắng nổi tiếng và hoàng hôn đẹp nhất thế giới",
    location: "Cyclades, Hy Lạp",
    heritage: "Di sản văn hóa Địa Trung Hải",
    opening: "Mở cửa cả năm",
    mainImage: "../../assets/images/ts.jpg",
    author: "Trần Bảo Nam",
    date: "25/08/2023",
    overview: "Santorini là hòn đảo thiên đường của Hy Lạp, nổi tiếng với kiến trúc Cycladic trắng tinh khôi, những bãi biển đen volcanic và hoàng hôn tuyệt đẹp...",
    highlights: [
      "Làng Oia với hoàng hôn tuyệt đẹp",
      "Bãi biển cát đen độc đáo",
      "Vườn nho và rượu vang địa phương",
      "Kiến trúc Cycladic truyền thống"
    ],
    activities: [
      {
        title: "Ngắm hoàng hôn tại Oia",
        description: "Chiêm ngưỡng hoàng hôn đẹp nhất thế giới"
      },
      {
        title: "Tour thuyền Caldera",
        description: "Khám phá vịnh núi lửa và suối nước nóng"
      },
      {
        title: "Tham quan vườn nho",
        description: "Thưởng thức rượu vang địa phương"
      },
      {
        title: "Tắm biển Red Beach",
        description: "Trải nghiệm bãi biển cát đỏ độc đáo"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 4-10 (mùa du lịch)",
      openingHours: "24/7",
      prices: {
        adult: 15,
        child: 8
      }
    },
    weather: {
      temperature: 25,
      condition: "Nắng đẹp",
      humidity: 65,
      windSpeed: 18
    },
    galleryImages: [
      "../../assets/images/p30.jpg",
      "../../assets/images/p31.jpg",
      "../../assets/images/p32.jpg",
      "../../assets/images/p33.jpg"
    ]
  },
  {
    id: 11,
    title: "Machu Picchu - Thành phố cổ của người Inca",
    description: "Di tích huyền bí của đế chế Inca trên dãy núi Andes",
    location: "Cusco Region, Peru",
    heritage: "Di sản UNESCO từ 1983",
    opening: "Mở cửa hàng ngày",
    mainImage: "../../assets/images/tc.jpg",
    author: "Lê Minh Tâm",
    date: "30/08/2023",
    overview: "Machu Picchu là thành phố cổ của người Inca, nằm ẩn mình trên dãy núi Andes ở độ cao 2.430m, là một trong những di tích khảo cổ ấn tượng nhất thế giới...",
    highlights: [
      "Kiến trúc đá tinh xảo",
      "Cảnh quan núi Andes hùng vĩ",
      "Đường mòn Inca nổi tiếng",
      "Đền thờ Mặt Trời cổ đại"
    ],
    activities: [
      {
        title: "Trek đường mòn Inca",
        description: "Hành trình 4 ngày đến Machu Picchu"
      },
      {
        title: "Tham quan thành phố",
        description: "Khám phá kiến trúc và lịch sử Inca"
      },
      {
        title: "Leo núi Huayna Picchu",
        description: "Ngắm toàn cảnh từ đỉnh núi"
      },
      {
        title: "Trải nghiệm văn hóa",
        description: "Tìm hiểu về văn hóa người Inca"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 5-10 (mùa khô)",
      openingHours: "06:00 - 17:00",
      prices: {
        adult: 152,
        child: 76
      }
    },
    weather: {
      temperature: 20,
      condition: "Mát mẻ",
      humidity: 75,
      windSpeed: 12
    },
    galleryImages: [
      "../../assets/images/p26.jpg",
      "../../assets/images/p27.jpg",
      "../../assets/images/p28.jpg",
      "../../assets/images/p29.jpg"
    ]
  },
  {
    id: 12,
    title: "Grand Canyon - Kỳ quan thiên nhiên của Arizona",
    description: "Hẻm núi hùng vĩ được tạo thành bởi dòng sông Colorado",
    location: "Arizona, Hoa Kỳ",
    heritage: "Di sản UNESCO từ 1979",
    opening: "Mở cửa cả năm",
    mainImage: "../../assets/images/tr.jpg",
    author: "Phạm Hoàng Long",
    date: "05/09/2023",
    overview: "Grand Canyon là một trong những kỳ quan thiên nhiên lớn nhất thế giới, với chiều dài 446km, rộng 29km và sâu tới 1.6km...",
    highlights: [
      "Cảnh quan địa chất đa dạng",
      "Hoàng hôn và bình minh ngoạn mục",
      "Đa dạng hoạt động ngoài trời",
      "Văn hóa thổ dân American"
    ],
    activities: [
      {
        title: "Đi bộ đường mòn",
        description: "Khám phá các trail nổi tiếng"
      },
      {
        title: "Ngắm hoàng hôn",
        description: "Chiêm ngưỡng cảnh đẹp từ các điểm quan sát"
      },
      {
        title: "Chèo thuyền",
        description: "Trải nghiệm rafting trên sông Colorado"
      },
      {
        title: "Trực thăng scenic",
        description: "Ngắm Grand Canyon từ trên cao"
      }
    ],
    quickInfo: {
      bestTime: "Tháng 3-5 và 9-11",
      openingHours: "24/7",
      prices: {
        adult: 35,
        child: 0
      }
    },
    weather: {
      temperature: 28,
      condition: "Nắng khô",
      humidity: 30,
      windSpeed: 15
    },
    galleryImages: [
      "../../assets/images/p23.jpg",
      "../../assets/images/p24.jpg",
      "../../assets/images/p25.jph",
      "../../assets/images/p26.jpeg"
    ]
  }
];

selectedTravel: TravelDetail | null = null;

constructor() {}

ngAfterViewInit() {
  // Implementation for afterViewInit if needed
}

showDetail(travel: TravelDetail) {
  this.selectedTravel = travel;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

closeDetail() {
  this.selectedTravel = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}