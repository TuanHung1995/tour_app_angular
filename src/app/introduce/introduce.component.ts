import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white min-h-screen">
      <div class="container mx-auto p-4">
        <nav class="text-sm mb-4">
          <a href="/home" class="text-gray-500 hover:text-gray-700">Trang chủ</a>
          <span class="mx-2">/</span>
          <span class="text-gray-700">Giới thiệu</span>
        </nav>

        <h1 class="text-3xl font-bold mb-6">Giới thiệu</h1>

        <div *ngFor="let section of sections" class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
          <div [innerHTML]="section.content"></div>
        </div>

        <div *ngIf="coreValues.length > 0" class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">{{ coreValues[0].title }}</h2>
          <ul class="list-disc pl-5">
            <li *ngFor="let value of coreValues[0].items" class="mb-2" [innerHTML]="value"></li>
          </ul>
        </div>

        <div *ngIf="commitments.length > 0" class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">{{ commitments[0].title }}</h2>
          <ul class="list-disc pl-5">
            <li *ngFor="let commitment of commitments[0].items" class="mb-2">{{ commitment }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrl: './introduce.component.css'
})
export class IntroduceComponent {

  sections = [
    {
      title: '1. Lời ngỏ',
      content: `Lời đầu tiên, Công ty cổ phần OH!Travel xin gửi lời chào trân trọng và kính chúc Quý khách hàng và Quý đối tác luôn đầy đủ sức khỏe, thành công trong cuộc sống. Lữ hành OH!Travel không ngừng lớn mạnh trở thành một trong 10 hãng lữ hành hàng đầu của ngành du lịch Việt Nam. Đồng thời, lĩnh vực kinh doanh ngày càng được mở rộng: kinh doanh du lịch trong và ngoài nước, cung cấp vé máy bay, đặt phòng khách sạn, dịch vụ vận chuyển, tổ chức sự kiện (M.I.C.E), Free & easy, Visa... Lữ hành OH!Travel cũng đã xây dựng được hệ thống chi nhánh ở Hà Nội, Đà Nẵng, Tp. Hồ Chí Minh và Cần Thơ và mạng lưới đại lý ở nhiều tỉnh thành của cả nước. Với phương châm "Chất lượng tiên phong" được chính sách đa dạng hóa sản phẩm và bảo đảm thực hiện đúng những cam kết về chất lượng, Lữ hành OH!Travel đã định vị trong lòng công chúng là thương hiệu hàng đầu của Việt Nam nói chung và thị trường TP. HCM nói riêng về chất lượng dịch vụ.`
    },
    {
      title: '2. Tầm nhìn và sứ mệnh',
      content: `Luôn phấn đấu để giữ vững giữ vị trí là một trong những công ty du lịch hàng đầu của Việt Nam và khu vực về qui mô, chất lượng và uy tín.<br><br>
      Với nguồn lực dồi dào, kinh nghiệm và uy tín trong lĩnh vực dịch vụ du lịch, mối quan hệ bền vững với các đối tác lớn khắp nơi trên thế giới, đội ngũ nhân viên năng động và chuyên nghiệp, Lữ hành OH!Travel luôn nỗ lực mang đến cho khách hàng những sản phẩm du lịch giá trị nhất.`
    },
    {
      title: '3. Triết lý kinh doanh',
      content: `Lữ hành OH!Travel luôn coi trọng ý thức trách nhiệm của doanh nghiệp đối với cộng đồng và môi trường, phát triển các sản phẩm và hoạt động kinh doanh trên tiêu chí hài hòa lợi ích doanh nghiệp với cộng đồng, xã hội.`
    }
  ];

  coreValues = [
    {
      title: '4. Giá trị cốt lõi',
      items: [
        'Luôn tuân thủ các quy chuẩn và cam kết chất lượng đã công bố với khách hàng.',
        'Xem chất lượng dịch vụ và sự tiện ích của khách hàng là tiêu chí hàng đầu trong các định hướng và hoạt động kinh doanh của Lữ hành OH!Travel.',
        'Tiên phong trong việc gợi mở những cảm hứng, mong đợi tiềm ẩn của khách hàng để mang đến cho khách những sản phẩm du lịch độc đáo, mới lạ mà khách chỉ có thể tìm thấy ở Lữ hành OH!Travel'
      ]
    }
  ];

  commitments = [
    {
      title: '5. Hành trình phát triển cùng phương châm CHẤT LƯỢNG TIÊN PHONG',
      items: [
        'Bảo đảm thực hiện đúng cam kết',
        'Bảo đảm cung cấp những sản phẩm đã được chọn lọc',
        'Bảo đảm giá cả hợp lý',
        'Bảo đảm phong cách phục vụ nhiệt tình và chu đáo'
      ]
    }
  ];
}
