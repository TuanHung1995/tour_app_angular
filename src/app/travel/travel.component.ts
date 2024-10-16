import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface NewsItem {
  title: string;
  image: string;
  date: string;
  author: string;
  description?: string;
}

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  featuredNews: NewsItem = {
    title: 'Du hành ngược thời gian tại làng dân gian Naganeupseong Hàn Quốc',
    image: '../../assets/images/t-1.webp',
    date: '02/07/2023',
    author: 'Nguyễn Thị Kim Anh',
    description: 'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây. Những ngôi nhà xây đơn giản với mái tranh, đá không...'
  };

  newsItems: NewsItem[] = [
    {
      title: 'Cắm trại ở Chu Nậm ngắm thiên đường mây ở độ cao',
      image: '../../assets/images/t-2.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh'
    },
    {
      title: 'Kinh nghiệm cắm trại trên núi Bà Đen Tây Ninh cuối tuần...',
      image: '../../assets/images/t-3.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh'
    },
    {
      title: 'Tháng 7 nên đi du lịch ở đâu Việt Nam là lý tưởng nhất?',
      image: '../../assets/images/t-4.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh'
    }
  ];

  additionalNews: NewsItem[] = [
    {
      title: 'Thổ Nhĩ Kỳ - Một thoáng sắc thu quyến rũ',
      image: '../../assets/images/t-5.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Khi mùa thu gõ cửa, cả đất trời nhộm đầy sắc màu tươi mới. Đây cũng là thời điểm lý tưởng để bạn khám phá Thổ Nhĩ Kỳ, xứ sở xa xăm và đẹp tráng lệ của những địa danh lịch sử huyền bí, khó có thể tìm thấy ở bất cứ nơi đâu. Hãy cùng Vietravel đặp chuyến bay thẳng đến thủ đô Istanbul của hãng hàng không 5 sao Turkish Airlines và...'
    },
    {
      title: 'Du lịch Singapore tháng 7,8,9 với nhiều sự kiện hấp dẫn',
      image: '../../assets/images/t-6.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Singapore từ lâu đã trở thành điểm đến du lịch hàng đầu Châu Á. Đây là nơi gặp gỡ và giao thoa của những nền văn hóa như Trung Quốc, Ấn Độ và Malaysia khiến Singapore trở nên rất khác biệt. Đảo quốc sư tử này vẫn luôn khiến mọi người đứng ngồi không yên vì những công trình kiến trúc đẹp, có nhiều khu vui chơi giải trí hàng đầu châu Á và là thiên đường mua sắm với những trung tâm thương mại sầm uất. Các tháng 7,8,9 Singapore đều khoác lên mình vẻ đẹp tuyệt vời cùng...'
    },
    {
      title: 'Kỳ nghỉ ấn tượng bên bãi Khem xinh đẹp tại Premier Residences Phú Quốc Emerald Bay',
      image: '../../assets/images/t-7.webp',
      date: '26/06/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Premier Residences Phú Quốc Emerald Bay tọa lạc tại bãi Khem, một trong những bãi biển đẹp nhất thế giới. Khu nghỉ dưỡng có thiết kế kiến trúc độc đáo hướng tầm nhìn ra đại dương xanh mát, mang đến kỳ nghỉ đáng cấp cho du khách. Kỳ nghỉ ấn tượng bên bãi Khem xinh đẹp tại Premier Residences Phú Quốc Emerald Bay Bãi Khem là một trong những bãi tắm đẹp nhất Phú Quốc, từng được vinh danh trong top 100 bãi biển đẹp nhất thế giới 2018 do Flight Network bình chọn. Tọa lạc tại bãi Khem xinh đẹp, Premier Residences...'
    }
  ];
}
