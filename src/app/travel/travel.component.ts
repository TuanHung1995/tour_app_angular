import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  description?: string;
  link: string;
}

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  
 
  selectedNews: NewsItem | null = null; // Biến lưu tin tức được chọn
  
  
  featuredNews: NewsItem = {
    id: 1,
    title: 'Du hành ngược thời gian tại làng dân gian Naganeupseong Hàn Quốc',
    image: '../../assets/images/t-1.webp',
    date: '02/07/2023',
    author: 'Nguyễn Thị Kim Anh',
    description: 'Với lịch sử gần 700 năm, ngôi làng pháo đài Naganeupseong của Hàn Quốc khiến người ta ngỡ ngàng bởi thời gian dường như ngừng lại ở nơi đây...',
    link: '/travel/1'
  };
  newsItems: NewsItem[] = [
    { id: 2, title: 'Cắm trại ở Chu Nậm ngắm thiên đường mây ở độ cao', image: '../../assets/images/t-2.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', link: '/travel-list' },
    { id: 3, title: 'Kinh nghiệm cắm trại trên núi Bà Đen Tây Ninh cuối tuần...', image: '../../assets/images/t-3.webp', date: '20/07/2023', author: 'Lê Thanh Hà', link: '/travel/3' },
    { id: 4, title: 'Tháng 7 nên đi du lịch ở đâu Việt Nam là lý tưởng nhất?', image: '../../assets/images/t-4.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', link:'/travel10' },
  ];


  additionalNews: NewsItem[] = [
    { id: 5, title: 'Thổ Nhĩ Kỳ - Một thoáng sắc thu quyến rũ', image: '../../assets/images/t-5.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', description: 'Khi mùa thu gõ cửa, cả đất trời nhuộm đầy sắc màu tươi mới. Đây cũng là thời điểm lý tưởng để bạn khám phá Thổ Nhĩ Kỳ, xuýt xoa trước vẻ đẹp tráng lệ của những địa danh lịch sử huyền thoại, khó có thể tìm thấy ở bất cứ nơi đâu. Hãy cùng Vietravel đáp chuyến bay thẳng đến thủ đô Istanbul của hãng hàng không 5 sao Turkish Airlines và trải nghiệm dịch vụ 5 sao tiêu chuẩn quốc tế. Istanbul – thành phố trên 7 quả đồi Thành phố đắm mình trong sắc thu rực rỡ của những...',  link: '/travel3' },
    { id: 6, title: 'Du lịch Singapore tháng 7,8,9 với nhiều sự kiện hấp dẫn', image: '../../assets/images/t-6.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', description: 'Singapore từ lâu đã trở thành điểm đến du lịch hàng đầu Châu Á. Đây là nơi gặp gỡ và giao thoa của những nền văn hóa như Trung Quốc, Ấn Độ và Malaysia khiến Singapore trở nên rất khác biệt. Đảo quốc sư tử này vẫn luôn khiến mọi người đứng ngồi không yên vì những công trình kiến trúc đẹp, có nhiều khu vui chơi giải trí hàng đầu châu Á và là thiên đường mua sắm với những trung tâm thương mại sầm uất. Các tháng 7,8,9 Singapore đều khoác lên mình vẻ đẹp tuyệt vời cùng...', link:'/travel4' },
    { id: 7, title: 'Kỳ nghỉ ấn tượng bên bãi Khem xinh đẹp tại Premier Residences Phú Quốc Emerald Bay', image: '../../assets/images/t-7.webp', date: '26/06/2023', author: 'Nguyễn Thị Kim Anh', description: 'Premier Residences Phú Quốc Emerald Bay tọa lạc tại bãi Khem, một trong những bãi biển đẹp nhất thế giới. Khu nghỉ dưỡng có thiết kế kiến trúc độc đáo hướng tầm nhìn ra đại dương xanh mát, mang đến kỳ nghỉ đẳng cấp cho du khách. Kỳ nghỉ ấn tượng bên bãi Khem xinh đẹp tại Premier Residences Phú Quốc Emerald Bay Bãi Khem là một trong những bãi tắm đẹp nhất Phú Quốc, từng được vinh danh trong top 100 bãi biển đẹp nhất thế giới 2018 do Flight Network bình chọn. Tọa lạc tại bãi Khem xinh đẹp, Premier Residences...', link:'/travel5' },
    { id: 8, title: 'Đảo Thanh Lân – “Viên ngọc sáng” của ngành du lịch Cô Tô', image: '../../assets/images/t-8.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', description: 'Mặc dù nằm cách đảo Cô Tô lớn không xa, nhưng xã đảo Thanh Lân hầu như vẫn giữ được nguyên vẹn vẻ hoang sơ với hệ sinh thái rừng, biển phong phú, sẽ là điểm đến không thể bỏ qua khi du lịch Cô Tô. Đảo Thanh Lân – “Viên ngọc sáng” của ngành du lịch Cô Tô Xã đảo Thanh Lân nằm ở phía nam huyện đảo Cô Tô, có diện tích 27 kilomet vuông với khoảng 1500 người sinh sống. Thanh Lân cách đảo Cô Tô lớn 15 đến 20 phút đi đò. Hoặc du khách cũng có thể di chuyến...', link:'/travel6' },
    { id: 9, title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản', image: '../../assets/images/t-9.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', description: 'Lên kế hoạch ngay cho kỳ nghỉ đông tại Hokkaido, Nhật Bản với trải nghiệm trượt tuyết, đặc biệt với combo du lịch trọn gói có mức giá hấp dẫn tại top 3 khu nghỉ dưỡng Club Med đầy ấn tượng. Hokkaido là vùng núi vô cùng nổi tiếng với những lớp tuyết mịn rất phù hợp với các hoạt động thú vị của Nhật Bản. Với những du khách vừa muốn tận hưởng một kỳ nghỉ mùa đông vừa muốn tham gia vào các bộ môn thể thao với tuyết tại Hokkaido thì top 3 khu nghỉ dưỡng Club Med sau đây...', link:'/travel7' },
    // { id: 10, title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản', image: '../../assets/images/t-10.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', link:'' },
    // { id: 11, title: 'Top 3 combo khu nghỉ dưỡng Club Med tuyệt vời cho kỳ nghỉ đông tại Nhật Bản', image: '../../assets/images/t-11.webp', date: '02/07/2023', author: 'Nguyễn Thị Kim Anh', link:'' },
  ];

  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;
  isLoading: boolean = false;

  ngOnInit() {
    this.totalPages = Math.ceil(this.additionalNews.length / this.itemsPerPage);
  }

  get paginatedNewsItems(): NewsItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.additionalNews.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.isLoading = true;
      this.currentPage = page;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.isLoading = true;
      this.currentPage++;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.isLoading = true;
      this.currentPage--;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }
  selectNews(id: number) {
    this.selectedNews = this.additionalNews.find(news => news.id === id) || null;
  }
}
