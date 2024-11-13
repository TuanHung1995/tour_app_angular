import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  selector: 'app-travel4',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="relative h-96">
    <img src="../../assets/images/t-6.webp" alt="" class="w-full h-full object-cover"
      onerror="this.src='https://via.placeholder.com/1200x400'" />
    <div class="absolute inset-0 bg-black/40"></div>
    <nav class="absolute top-0 w-full p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-white text-xl font-bold">Singapore</h1>
        <div class="flex gap-6 text-white">
        </div>
      </div>
    </nav>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        
      </div>
      <div class="absolute bottom-8 left-8 flex items-center text-white text-sm">
        <a href="/home" class="hover:text-blue-300">Trang chủ</a>
        <span class="mx-2">›</span>
        <a href="/travel" class="hover:text-blue-300">Tin tức</a>
        <span class="mx-2">›</span>
        <span>
   
Du lịch Singapore tháng 7,8,9 với nhiều sự kiện hấp dẫn</span>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Introduction -->
    <section id="intro" class="mb-16">
      <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">
          Giới thiệu về đất nước Singapore
        </h2>
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
            Singapore từ lâu đã trở thành điểm đến du lịch hàng đầu Châu Á. Đây là nơi gặp gỡ và giao thoa của những nền văn hóa như Trung Quốc, 
            Ấn Độ và Malaysia khiến Singapore trở nên rất khác biệt. Đảo quốc sư tử này vẫn luôn khiến mọi người đứng ngồi không yên vì những công trình kiến trúc đẹp, 
            có nhiều khu vui chơi giải trí hàng đầu châu Á và là thiên đường mua sắm với những trung tâm thương mại sầm uất. 
            Các tháng 7,8,9 Singapore đều khoác lên mình vẻ đẹp tuyệt vời cùng nhiều sự kiện hấp dẫn thu hút du khách ghé thăm.
            </p>
            <p class="text-gray-600 leading-relaxed">
            Tuy diện tích đất nước Singapore có phần “khiêm tốn”, nhưng có tất cả để đáp ứng mọi nhu cầu tham quan của du khách: môi trường xanh
             – sạch – đẹp, cơ sở hạ tầng hiện đại bậc nhất thế giới, văn hóa đa dạng lâu đời, ẩm thực đặc sắc, hàng loạt các trung tâm mua sắm khổng lồ,
              cuộc sống về đêm sôi động, hệ thống giao thông công cộng vừa rẻ vừa thuận tiện, và nhiều điều hấp dẫn khác nữa. Du lịch Singapore
               tháng 7,8,9 với nhiều sự kiện hấp dẫn hứa hẹn sẽ mang đến cho bạn những trải nghiệm bất ngờ.
          </div>
      </div>
    </section>

    <!-- Seasons Section -->
    <section id="seasons" class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">
      Những địa điểm du lịch Singapore không thể bỏ qua vào tháng 7,8,9
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let season of seasons"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img [src]="season.image" [alt]="season.title" class="w-full h-48 object-cover"
            onerror="this.src='https://via.placeholder.com/400x200'" />
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2 text-gray-800">
              {{ season.title }}
            </h3>
            <p class="text-gray-600 text-sm">{{ season.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="seasons" class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">
      Những lễ hội và ẩm thực ở Singapore không thể bỏ qua vào tháng 7,8,9
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let season of seasons1"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img [src]="season.image" [alt]="season.title" class="w-full h-48 object-cover"
            onerror="this.src='https://via.placeholder.com/400x200'" />
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2 text-gray-800">
              {{ season.title }}
            </h3>
            <p class="text-gray-600 text-sm">{{ season.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="tours" class="mb-16 mx-auto px-4">
      <!-- <p class="text-xl text-black">Các tour gợi ý</p> -->
       
      <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        Các Tour Khuyến Mãi
      </h2>
      <div class="max-w-7xl mx-auto">
        <swiper-container #swiper [init]="false" [slides-per-view]="3" [space-between]="24" [grab-cursor]="true"
          [speed]="500" [pagination]="false" [navigation]="true" [loop]="true" class="!overflow-visible py-8 px-4">
          <!-- Tour Bờ Đông Hoa Kỳ -->
          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/photo2.webp" alt="Tour Bờ Đông Hoa Kỳ"
                  class="w-full h-[200px] object-cover" onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Bờ Đông Hoa Kỳ: New York - Philadelphia
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>28/08/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>10N9Đ</span>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    180,000,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                      160,000,000đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -5%
                    </span>
                  </div>
                </div>

                <button
                  class="primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>

          <!-- Tour Nhật Bản -->
          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/p-19.webp" alt="Tour Nhật Bản" class="w-full h-[200px] object-cover"
                  onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Nhật Bản 4N4Đ: Tokyo - Yamanashi
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>05/07/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>4N4Đ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    26,690,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                      28,000,000đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -5%
                    </span>
                  </div>
                </div>

                <button
                  class="primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>

          <!-- Tour Dubai -->
          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/p-20.webp" alt="Tour Dubai" class="w-full h-[200px] object-cover"
                  onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Cao Cấp Dubai 4N4Đ: Dubai - Abu Dhabi
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>05/07/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>4N4Đ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    31,990,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                      34,000,000đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -6%
                    </span>
                  </div>
                </div>

                <button
                  class="primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/p-23.webp" alt="Tour Dubai" class="w-full h-[200px] object-cover"
                  onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Hàn Quốc 5N4Đ: Xứ Sở Kim Chi Seoul - Nami - Everland
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>02/07/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>5N4Đ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    23,090,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                     0đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -0%
                    </span>
                  </div>
                </div>

                <button
                  class="primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/p-21.webp" alt="Tour Dubai" class="w-full h-[200px] object-cover"
                  onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Đài Loan 5N4Đ: HCM - Đào Viên - Công Viên Dã Liễu - Cao Hùng - Phật Quang Sơn
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>05/07/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>5N4Đ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    15,000,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                      17,000,000đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -9%
                    </span>
                  </div>
                </div>

                <button
                  class="primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="tour-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="image-container relative">
                <img src="../../assets/images/p-22.webp" alt="Tour Dubai" class="w-full h-[200px] object-cover"
                  onerror="this.src='https://via.placeholder.com/300x200'" />
              </div>

              <div class="p-4">
                <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 line-clamp-2 min-h-[40px]">
                  Tour Trung Quốc 5N4Đ: Trương Gia Giới - Phượng Hoàng Cổ Trấn
                </h3>

                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Khởi hành:</span>
                    <span>05/07/2023</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-gray-500">Thời gian:</span>
                    <span>5N4Đ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="text-[#FD5056] font-bold text-xl">
                    16,990,000đ
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-gray-500 line-through text-sm">
                      18,000,000đ
                    </span>
                    <span class="bg-[#FD5056] text-white px-1 py-0.5 rounded text-xs">
                      -7%
                    </span>
                  </div>
                </div>

                <button
                  class=" primary-button w-full mt-4 bg-[#2D4271] hover:bg-blue-800 text-white font-medium py-2.5 rounded text-sm transition-colors duration-300">
                  Đặt ngay
                </button>
              </div>
            </div>
          </swiper-slide>

        </swiper-container>
      </div>
    </section>

    <!-- Transportation
    <section id="transport" class="mb-16">
      <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">
          Di chuyển đến làng dân gian Naganeupseong
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let transport of transportOptions"
            class="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i [class]="transport.icon" class="text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-bold mb-2 text-gray-800">
                {{ transport.title }}
              </h3>
              <p class="text-gray-600 text-sm">{{ transport.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Tours Section -->
    <section class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">
      TIN LIÊN QUAN
    </h2>
  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <a href="/trave2" class="block relative">
          <div class="relative overflow-hidden aspect-w-16 aspect-h-9">
            <img
              src="../../assets/images/t-1.webp"
              alt="Du hành ngược thời gian"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              onerror="this.src='https://via.placeholder.com/400x300'"
            />
          </div>
          <div class="p-4">
            <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              Du hành ngược thời gian tại làng dân gian Naganneupseong...
            </h3>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1">
                <i class="far fa-calendar text-sm"></i>
                <span>02/07/2023</span>
              </div>
              <div class="flex items-center gap-1">
                <i class="far fa-user text-sm"></i>
                <span>Nguyễn Thị Kim Anh</span>
              </div>
            </div>
          </div>
        </a>
      </div>
  
      <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <a href="/travel9" class="block relative">
          <div class="relative overflow-hidden aspect-w-16 aspect-h-9">
            <img
              src="../../assets/images/t-2.webp"
              alt="Cắm trại ở Chư Nâm"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              onerror="this.src='https://via.placeholder.com/400x300'"
            />
          </div>
          <div class="p-4">
            <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              Cắm trại ở Chư Nâm ngắm thiên đường mây ở độ cao
            </h3>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1">
                <i class="far fa-calendar text-sm"></i>
                <span>02/07/2023</span>
              </div>
              <div class="flex items-center gap-1">
                <i class="far fa-user text-sm"></i>
                <span>Nguyễn Thị Kim Anh</span>
              </div>
            </div>
          </div>
        </a>
      </div>
  
      <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <a href="#" class="block relative">
          <div class="relative overflow-hidden aspect-w-16 aspect-h-9">
            <img
              src="../../assets/images/t-3.webp"
              alt="Kinh nghiệm cắm trại"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              onerror="this.src='https://via.placeholder.com/400x300'"
            />
          </div>
          <div class="p-4">
            <h3 class="text-[15px] font-medium text-[#2D4271] mb-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              Kinh nghiệm cắm trại trên núi Bà Đen Tây Ninh cuối...
            </h3>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1">
                <i class="far fa-calendar text-sm"></i>
                <span>02/07/2023</span>
              </div>
              <div class="flex items-center gap-1">
                <i class="far fa-user text-sm"></i>
                <span>Nguyễn Thị Kim Anh</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
    <!-- Phần Tour gợi ý -->
    <div class="mt-12 bg-gray-100 py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Tour gợi ý
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let tour of suggestedTours"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img [src]="tour.image1" [alt]="tour.name1"
              class="w-full h-48 object-cover transition duration-300 transform hover:scale-105" />
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2 hover:text-blue-600 transition duration-300">
                {{ tour.name1 }}
              </h3>
              <p class="text-sm text-gray-600 mb-2">
                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>Khởi hành:
                {{ tour.startDate1 }}
              </p>
              <p class="text-sm text-gray-600 mb-2">
                <i class="fas fa-clock mr-2 text-blue-500"></i>Thời gian:
                {{ tour.duration1 }}
              </p>
              <div class="flex justify-between items-center mb-4">
                <p class="text-gray-500 line-through">
                  {{
                  tour.originalPrice1 | currency : "VND" : "symbol" : "1.0-0"
                  }}
                </p>
                <p class="text-xl font-bold text-red-600">
                  {{
                  tour.discountedPrice1 | currency : "VND" : "symbol" : "1.0-0"
                  }}
                </p>
                <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">-{{ tour.discount1
                  }}%</span>
              </div>
              <button
                class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring focus:ring-blue-200">
                Đặt ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
   ::ng-deep swiper-container {
  padding: 20px 40px !important;
}

::ng-deep swiper-slide {
  height: auto !important;
  display: flex !important;
  justify-content: center !important;
}

::ng-deep .swiper-button-prev,
::ng-deep .swiper-button-next {
  width: 32px !important;
  height: 32px !important;
  background-color:  #2D4271;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  color: white !important;
  transition: all 0.3s ease;
}

::ng-deep .swiper-button-prev:hover,
::ng-deep .swiper-button-next:hover {
  background-color: #1a2b4a;
  transform: scale(1.1);
}

::ng-deep .swiper-button-prev::after,
::ng-deep .swiper-button-next::after {
  font-size: 14px !important;
  font-weight: bold;
}

::ng-deep .swiper-button-prev {
  left: 0;
}

::ng-deep .swiper-button-next {
  right: 0;
}

::ng-deep .swiper-button-disabled {
  opacity: 0.5 !important;
  cursor: default;
  pointer-events: none;
  background-color: #4a5b7d;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Navigation Links Hover Effect */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Card Hover Effects */
.tour-card {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Image Hover Effects */
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

/* Button Hover Effects */
.primary-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.primary-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.primary-button:hover::before {
  width: 300px;
  height: 300px;
}

/* Form Input Hover Effects */
.form-input {
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.form-input:hover {
  border-color: #4A90E2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
}

/* Section Hover Effects */
.content-section {
  transition: transform 0.3s ease;
}

.content-section:hover {
  transform: translateY(-5px);
}

/* Custom Swiper Navigation Hover */
.swiper-button-next,
.swiper-button-prev {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
  transform: scale(1.1);
  background-color: #1a2b4a !important;
}
  `]
})
export class Travel4Component implements AfterViewInit {
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
  seasons = [
    {
      title: 'Marina Bay Sands',
      description: 'Marina Bay Sands là một quần thể kinh doanh và nghỉ dưỡng với 3 tòa tháp cao 55 tầng và các tòa nhà đẳng cấp.',
      image: '../../assets/images/s1.jpg'
    },
    {
      title: ' Đại lộ Orchard Road',
      description: 'Đại lộ Orchard Road là một trong những thiên đường mua sắm nổi tiếng nhất Singapore.',
      image: '../../assets/images/s2.jpeg'
    },
    {
      title: ' Đảo Sentosa',
      description: 'Mùa thu ở Naganeupseong mang đến khung cảnh đẹp với sự thay đổi màu sắc của cây cối và cảnh quan rực rỡ.',
      image: '../../assets/images/s3.jpg'
    },
    {
      title: 'China Town',
      description: 'Đảo Sentosa là một điểm đến hấp dẫn mà du khách không nên bỏ qua. “Sentosa” trong tiếng Malay có nghĩa là “thanh bình và yên tĩnh”.',
      image: '../../assets/images/s4.jpg'
    },
    {
      title: 'Gardens by the Bay',
      description: 'China Town, từng là nơi tập trung của cộng đồng người Hoa nhập cư vào Singapore, hiện nay trở thành sự kết hợp giữa văn hoá hiện đại và truyền thống. ',
      image: '../../assets/images/s5.jpg'
    },
    {
      title: 'Công Viên Nước Wild Wild Wet Singapore',
      description: 'Công Viên Nước Wild Wild Wet Singapore tại Singapore là điểm đến lý tưởng vào tháng 7 với hàng loạt trò chơi nước đầy thú vị.',
      image: '../../assets/images/s12.webp'
    }
  ];
  seasons1 = [
    {
      title: 'Lễ hội Hari Raya Haji',
      description: 'Lễ hội Hari Raya Haji, còn được gọi là lễ hội Tế Thần, là một trong những lễ hội lớn nhất tại Singapore. Đây là lễ hội của người Hồi giáo, kéo dài trong ba ngày. ',
      image: '../../assets/images/s6.jpg'
    },
    {
      title: ' Singapore Night Festival',
      description: 'Singapore Night Festival là một trong những lễ hội lớn nhất tại Singapore trong tháng 8. Lễ hội diễn ra tại Bras Basah.Bugis (BBB), một khu vực nổi tiếng với kiến trúc và văn hóa của Singapore. .',
      image: '../../assets/images/s7.jpg'
    },
    {
      title: ' Tết Trung Thu',
      description: 'Tết Trung Thu ở Singapore thường diễn ra vào ngày 15/08 âm lịch, tương đương với giữa hoặc cuối tháng 9 dương lịch. Giống như tại Việt Nam, người dân Singapore tụ họp sum vầy và phá cỗ cùng người thân trong ngày Tết Trung Thu.',
      image: '../../assets/images/s8.jpg'
    },
    {
      title: 'Quốc khánh Singapore',
      description: 'Quốc khánh Singapore là một sự kiện quan trọng đánh dấu sự độc lập của quốc gia này. Để kỷ niệm dịp này, toàn bộ thành phố sẽ được trang trí và có màn trình diễn pháo hoa hoành tráng khắp nơi. Du khách cũng có thể tham gia vào các cuộc diễu hành, biểu diễn và tham quan các phòng trưng bày, bảo tàng miễn phí. Quốc khánh Singapore diễn ra vào ngày 9 tháng 8 tại khắp Singapore..',
      image: '../../assets/images/s13.webp'
    },
    {
      title: 'Cua Sốt Ớt',
      description: 'Cua sốt ớt Singapore đã được bình chọn là một trong 50 món ăn ngon nhất thế giới năm 2011 bởi CNN Go (Hoa Kỳ). Món ăn này đã tồn tại suốt nhiều thập kỷ và vẫn là lựa chọn hàng đầu của du khách khi đến Singapore.',
      image: '../../assets/images/s10.jpg'
    },
    {
      title: 'Cháo ếch',
      description: 'Cháo ếch Singapore được nấu và phục vụ riêng biệt với hai thành phần chính là ếch và cháo. Món ăn này mang đến một trải nghiệm mới lạ với hương vị cay mặn độc đáo của thịt ếch hòa quyện với cháo trắng. Đây là một món ăn đáng thử với sự hòa hợp độc đáo của các thành phần.',
      image: '../../assets/images/s11.jpg'
    }
  ];

  // transportOptions = [
  //   {
  //     title: 'Ô tô',
  //     icon: 'fas fa-car',
  //     description: 'Nếu bạn có ô tô hoặc thuê xe thì từ trung tâm thành phố gần nhất, bạn có thể lái xe theo đường quốc lộ hoặc đường cao tốc để đến Naganeupseong.'
  //   },
  //   {
  //     title: 'Xe buýt',
  //     icon: 'fas fa-bus',
  //     description: 'Có các tuyến xe buýt công cộng từ các thành phố lân cận đến Naganeupseong.'
  //   },
  //   {
  //     title: 'Xe đạp',
  //     icon: 'fas fa-bicycle',
  //     description: 'Nếu bạn muốn trải nghiệm di chuyển chậm và gần gũi với thiên nhiên thì có thể sử dụng xe đạp.'
  //   },
  //   {
  //     title: 'Taxi',
  //     icon: 'fas fa-taxi',
  //     description: 'Taxi là một phương tiện linh hoạt và tiện lợi để đến Naganeupseong.'
  //   }
  // ];

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
      id1: 2,
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
      id1: 3,
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
      id1: 4,
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
}