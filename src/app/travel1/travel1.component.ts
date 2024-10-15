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
  selector: 'app-travel1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel1.component.html',
  styleUrl: './travel1.component.css'
})
export class Travel1Component {
  additionalNews: NewsItem[] = [
    {
      title: 'Đảo Thanh Lân – “Viên ngọc sáng” của ngành du lịch Cô Tô',
      image: '../../assets/images/t-8.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Mặc dù nằm cách đảo Cô Tô lớn không xa, nhưng xã đảo Thanh Lân hầu như vẫn giữ được nguyên vẹn vẻ hoang sơ với hệ sinh thái rừng, biển phong phú, sẽ là điểm đến không thể bỏ qua khi du lịch Cô Tô. Đảo Thanh Lân – “Viên ngọc sáng” của ngành du lịch Cô Tô Xã đảo Thanh Lân nằm ở phía nam huyện đảo Cô Tô, có diện tích 27 kilomet vuông với khoảng 1500 người sinh sống. Thanh Lân cách đảo Cô Tô lớn 15 đến 20 phút đi đò. Hoặc du khách cũng có thể di chuyến...'
    },
    {
      title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản',
      image: '../../assets/images/t-9.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Lên kế hoạch ngay cho kỳ nghỉ đông tại Hokkaido, Nhật Bản với trải nghiệm trượt tuyết, đặc biệt với combo du lịch trọn gói có mức giá hấp dẫn tại top 3 khu nghỉ dưỡng Club Med đầy ấn tượng. Hokkaido là vùng núi vô cùng nổi tiếng với những lớp tuyết mịn rất phù hợp với các hoạt động thú vị của Nhật Bản. Với những du khách vừa muốn tận hưởng một kỳ nghỉ mùa đông vừa muốn tham gia vào các bộ môn thể thao với tuyết tại Hokkaido thì top 3 khu nghỉ dưỡng Club Med sau đây... '  
    }, 
    {
      title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản',
      image: '../../assets/images/t-10.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Khi mùa thu gõ cửa, cả đất trời nhộm đầy sắc màu tươi mới. Đây cũng là thời điểm lý tưởng để bạn khám phá Thổ Nhĩ Kỳ, xứ sở xa xăm và đẹp tráng lệ của những địa danh lịch sử huyền bí, khó có thể tìm thấy ở bất cứ nơi đâu. Hãy cùng Vietravel đặp chuyến bay thẳng đến thủ đô Istanbul của hãng hàng không 5 sao Turkish Airlines và...'
    },  {
      title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản ',
      image: '../../assets/images/t-11.webp',
      date: '02/07/2023',
      author: 'Nguyễn Thị Kim Anh',
      description: 'Khi mùa thu gõ cửa, cả đất trời nhộm đầy sắc màu tươi mới. Đây cũng là thời điểm lý tưởng để bạn khám phá Thổ Nhĩ Kỳ, xứ sở xa xăm và đẹp tráng lệ của những địa danh lịch sử huyền bí, khó có thể tìm thấy ở bất cứ nơi đâu. Hãy cùng Vietravel đặp chuyến bay thẳng đến thủ đô Istanbul của hãng hàng không 5 sao Turkish Airlines và...'
    },
  ];
}
