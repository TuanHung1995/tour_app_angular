import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Location {
  name: string;
  address: string;
  phone: string;
  isMainOffice: boolean;
  mapUrl: string;
  area: string; // Thêm trường khu vực
  city: string; // Thêm trường thành phố
}

interface Area {
  name: string;
  districts: string[];
  city: string;
}
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="bg-white">
    <!-- Loading Screen -->
    <div *ngIf="isLoading" class="fixed inset-0 bg-white z-50">
      <!-- Loading content remains the same -->
    </div>

    <!-- Main Content (only shown after loading) -->
    <div [class.opacity-0]="isLoading" [class.animate-fadeIn]="!isLoading">
      <!-- Breadcrumb navigation remains the same -->
      <div class="bg-gray-50 px-4 sm:px-6 py-3 border-b">
        <nav class="text-sm">
          <ol class="list-none p-0 inline-flex items-center space-x-2">
            <li class="flex items-center">
              <a href="/home" class="text-gray-500 hover:text-gray-700">Trang chủ</a>
            </li>
            <li class="flex items-center">
              <svg class="h-4 w-4 text-gray-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
              <a href="/system"><span class="text-gray-900">Hệ thống chi nhánh</span></a>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Main Container -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="h-96 flex bg-gray-50 rounded-lg shadow-sm overflow-hidden p-4 gap-4">
          <!-- Left side: Location list -->
          <div class="w-1/2 bg-white border-r border-gray-100 flex flex-col ">
            <!-- Header -->
            <div class="p-4 border-b border-gray-100">
              <h2 class="text-sm font-medium text-gray-700 mb-3">
                Hệ thống chi nhánh
              </h2>
                  <!-- City Selection -->
            <div class="mb-3">
              <select
                [(ngModel)]="selectedCity"
                (ngModelChange)="onCityChange()"
                class="select-style mb-3">
                <option value="cities">Tất cả tỉnh/thành phố</option>
                <option *ngFor="let city of cities" [value]="city.code">
                  {{ city.name }}
                </option>
              </select>
            </div>
              <!-- Area filters -->
              <div class="space-y-2">
                <!-- Khu vực tabs -->
                   <!-- Area Selection (now dropdown) -->
              <div class="mb-3">
                <select
                  [(ngModel)]="selectedArea"
                  (ngModelChange)="filterLocations()"
                  class="select-style">
                  <option value="">Tất cả khu vực</option>
                  <option *ngFor="let area of areas" [value]="area.name">
                    {{ area.name }}
                  </option>
                </select>
              </div>


                <!-- District select -->
                <select
                  [(ngModel)]="selectedDistrict"
                  (ngModelChange)="filterLocations()"
                  class="select-style">
                  <option value="">Tất cả quận/huyện</option>
                  <option *ngFor="let district of availableDistricts">
                    {{ district }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Scrollable list -->
            <div class="flex-1 overflow-y-auto">
              <div *ngFor="let location of filteredLocations" 
                   (click)="selectLocation(location)"
                   class="location-card relative"
                   [class.selected]="selectedLocation === location">
                <!-- Location content remains the same -->
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-sm font-medium text-gray-900">
                    {{ location.name }}
                  </h3>
                  <span *ngIf="location.isMainOffice" 
                        class="px-1.5 py-0.5 text-[10px] font-medium text-red-700 bg-red-50 rounded-full">
                    Trụ sở chính
                  </span>
                </div>
                
                <div class="space-y-1.5 text-xs">
                  <div class="flex items-start text-gray-600">
                    <svg class="w-3.5 h-3.5 mr-1.5 mt-0.5 text-gray-400" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{{ location.address }}</span>
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg class="w-3.5 h-3.5 mr-1.5 text-gray-400" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>{{ location.phone }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side: Map -->
          <div class="flex-1">
            <div class="h-full">
              <!-- Map Header -->
              <div class="p-4 border-b border-gray-100">
                <div class="flex items-start justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-700">
                      {{ selectedLocation?.name || 'Chọn chi nhánh' }}
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                      {{ selectedLocation?.address || 'Vui lòng chọn chi nhánh để xem bản đồ' }}
                    </p>
                  </div>
                  <div *ngIf="selectedLocation" 
                       class="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                    {{ selectedLocation.area }}
                  </div>
                </div>
              </div>
              
              <!-- Map Frame -->
              <div class="h-[calc(100%-73px)]">
                <iframe
                  [src]="currentMapUrl"
                  class="w-full h-full border-none"
                  allowfullscreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .select-style {
      @apply w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-md
      bg-white text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.25em 1.25em;
      padding-right: 2.5rem;
      -webkit-print-color-adjust: exact;
      appearance: none;
    }

    .location-card {
      @apply p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-150;
    }

    .location-card.selected {
      @apply bg-blue-50 hover:bg-blue-50;
    }

    .location-card.selected::before {
      content: '';
      @apply absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500;
    }

    ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
::-webkit-scrollbar-track {
  background: linear-gradient(to right, #f1f1f1, #e4e4e4);
}::-webkit-scrollbar-corner {
  background-color: #f1f1f1;
  border-radius: 8px;
}::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-track-piece {
  background-color: #f1f1f1;
  border-radius: 4px;
}
     /* Existing styles */

    /* New Animation Styles */
    @keyframes progress {
      0% { width: 0; }
      50% { width: 70%; }
      100% { width: 100%; }
    }

    @keyframes ripple {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(1.2); opacity: 0; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-progress {
      animation: progress 2s ease-in-out;
    }

    .animate-ripple-1 {
      animation: ripple 2s infinite;
    }

    .animate-ripple-2 {
      animation: ripple 2s infinite;
      animation-delay: 0.5s;
    }

    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }

    /* Your existing styles */
    .select-style {
      @apply w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-md
      bg-white text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.25em 1.25em;
      padding-right: 2.5rem;
      -webkit-print-color-adjust: exact;
      appearance: none;
    }

    /* Rest of your existing styles */
  `]
})
export class SystemComponent {
  isLoading = true;
  selectedCity: string = '';
  selectedArea: string = '';
  selectedDistrict: string = '';
  selectedLocation: Location | null = null;
  currentMapUrl: SafeResourceUrl;
  filteredLocations: Location[] = [];
  cities: City[] = [
    { name: 'Hà Nội', code: 'HN' },
    { name: 'Hồ Chí Minh', code: 'HCM' },
    { name: 'Đà Nẵng', code: 'DN' }
  ];

  // Danh sách khu vực và quận/huyện
  areas: Area[] = [
    {
      name: 'Khu vực phía Bắc',
      districts: ['Ba Đình', 'Cầu Giấy', 'Đống Đa', 'Hoàn Kiếm'],
      city: 'HN'
    },
    {
      name: 'Khu vực phía Nam',
      districts: ['Thanh Xuân', 'Hà Đông', 'Nam Từ Liêm', 'Hoàng Mai'],
       city: 'HN'
    },
    {
      name: 'Khu vực phía Tây',
      districts: ['Bắc Từ Liêm', 'Tây Hồ', 'Long Biên'],
       city: 'HN'
    },
     // Hồ Chí Minh
     {
      name: 'Khu vực Trung tâm',
      districts: ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 10'],
      city: 'HCM'
    },
    {
      name: 'Khu vực phía Đông',
      districts: ['Quận 2', 'Quận 9', 'Thủ Đức'],
      city: 'HCM'
    },
    {
      name: 'Khu vực phía Tây',
      districts: ['Quận 6', 'Quận 11', 'Tân Bình', 'Tân Phú'],
      city: 'HCM'
    },
    // Đà Nẵng
    {
      name: 'Khu vực Trung tâm Đà Nẵng',
      districts: ['Hải Châu', 'Thanh Khê'],
      city: 'DN'
    },
    {
      name: 'Khu vực ven biển',
      districts: ['Sơn Trà', 'Ngũ Hành Sơn'],
      city: 'DN'
    }
  ];

  locations: Location[] = [
    {
      name: 'TRỤ SỞ HÀ NỘI',
      address: 'Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội',
      phone: '1900 6750',
      isMainOffice: true,
      area: 'Khu vực phía Bắc',
        city: 'HN',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265858605295!2d105.81637731476292!3d21.035710985994775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ8O0bmcgTmdo4buHIFNhcG8!5e0!3m2!1sen!2s!4v1635739201863!5m2!1sen!2s'
    },
    {
      name: 'CHI NHÁNH CẦU GIẤY',
      address: '136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
      phone: '0945321821',
      isMainOffice: false,
      area: 'Khu vực phía Bắc',
      city: 'HN',

      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1125457248985!2d105.78240701476284!3d21.028913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMTM2IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739301863!5m2!1svi!2s'
    },
    {
      name: 'CHI NHÁNH HÀ ĐÔNG',
      address: '39 P. Nguyễn Viết Xuân, P. Quang Trung, Hà Đông, Hà Nội',
      phone: '0965464212',
      isMainOffice: false,
      area: 'Khu vực phía Nam',
      city: 'HN',

      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1925457248985!2d105.75640701476284!3d20.968913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad7d840727a7%3A0x9c3550fff0307a17!2zMzkgUC4gTmd1eeG7hW4gVmnhur90IFh1w6JuLCBQLiBRdWFuZyBUcnVuZywgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635739401863!5m2!1svi!2s'
    },
    {
      name: 'CHI NHÁNH HOÀNG MAI',
      address: '123 Giải Phóng, Hoàng Mai, Hà Nội',
      phone: '0987654321',
      isMainOffice: false,
      area: 'Khu vực phía Nam',
      city: 'HN',

      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5525457248985!2d105.77340701476284!3d21.008913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMjAgTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE5ow6JuIE3hu7ksIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739601863!5m2!1svi!2s'
      },
      {
        name: 'CHI NHÁNH BẮC',
        address: '3PGH+8R9, ĐT70A, thôn Trung, Nam Từ Liêm, Hà Nội, Việt Nam',
        phone: '0987654321',
        isMainOffice: false,
        area: 'Khu  vực phía Bắc',
        city: 'HN',

        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6725457248985!2d105.76940701476284!3d20.998913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1635739501863!5m2!1svi!2s'
      },
      {
        name: 'CHI NHÁNH NAM',
        address: '20 Ng. 322 Đ. Mỹ Đình, Nhân Mỹ, Nam Từ Liêm, Hà Nội',
        phone: '0912345678',
        isMainOffice: false,
        area: 'Khu vực phía nam',
        city: 'HN',

        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5525457248985!2d105.77340701476284!3d21.008913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMjAgTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE5ow6JuIE3hu7ksIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739601863!5m2!1svi!2s'
      },
       // HỒ CHÍ MINH
    {
      name: 'TRỤ SỞ HỒ CHÍ MINH',
      address: 'Tầng 5, Tòa nhà Bitexco Financial, 2 Hải Triều, Quận 1, TP HCM',
      phone: '028 7300 1866',
      isMainOffice: true,
      area: 'Khu vực Trung tâm',
      city: 'HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.516376861043!2d106.70179561148561!3d10.771706389332483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3acf87eaeb%3A0xc969a1975f3be32a!2sBitexco%20Financial%20Tower!5e0!3m2!1svi!2s!4v1731531772698!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH QUẬN 3',
      address: '123 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, TP HCM',
      phone: '028 7300 1867',
      isMainOffice: false,
      area: 'Khu vực Trung tâm',
      city: 'HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.321633380793!2d106.68442301148565!3d10.786659589318347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d9bf443ed%3A0xeb944875bc7fe0c7!2zMTIzIMSQLiBOYW0gS-G7syBLaOG7n2kgTmdoxKlhLCBQaMaw4budbmcgVsO1IFRo4buLIFPDoXUsIFF14bqtbiAzLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731531856290!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>'
    },
    {
      name: 'CHI NHÁNH QUẬN 5',
      address: '456 Nguyễn Trãi, Phường 8, Quận 5, TP HCM',
      phone: '028 7300 1868',
      isMainOffice: false,
      area: 'Khu vực Trung tâm',
      city: 'HCM',
      mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7316258581795!2d106.66894361148545!3d10.755154789348081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efc617f3451%3A0xac634e6b9a4b1e26!2zNDU2IMSQLiBOZ3V54buFbiBUcsOjaSwgUGjGsOG7nW5nIDgsIFF14bqtbiA1LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731531902742!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></https:>'
    },
    {
      name: 'CHI NHÁNH THỦ ĐỨC',
      address: '456 Võ Văn Ngân, Phường Bình Thọ, TP Thủ Đức, TP HCM',
      phone: '028 7300 1869',
      isMainOffice: false,
      area: 'Khu vực phía Đông',
      city: 'HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.50189603133!2d106.77046651148635!3d10.849379089259244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270adbcdde4b%3A0xeaf2eeabe065ba76!2zNDU2IMSQLiBWw7UgVsSDbiBOZ8OibiwgQsOsbmggVGjhu40sIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1731531994515!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH QUẬN 9',
      address: '789 Lê Văn Việt, Phường Tăng Nhơn Phú A, TP Thủ Đức, TP HCM',
      phone: '028 7300 1870',
      isMainOffice: false,
      area: 'Khu vực phía Đông',
      city: 'HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.538104410115!2d106.7848643614863!3d10.846616289261808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527ac895d3821%3A0x8787b0db97567891!2zVFLGr-G7nE5HIFBIw4FUIFRI4bumIMSQ4buoQyAtIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1731532092000!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH TÂN BÌNH',
      address: '256 Hoàng Văn Thụ, Phường 2, Tân Bình, TP HCM',
      phone: '028 7300 1871',
      isMainOffice: false,
      area: 'Khu vực phía Tây',
      city: 'HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.157681915629!2d106.65704961148568!3d10.7992325893065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529312666c66f%3A0x3e2441e6986ceeb2!2zMjU2IMSQLiBIb8OgbmcgVsSDbiBUaOG7pSwgUGjGsOG7nW5nIDQsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1731532130638!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },

    // ĐÀ NẴNG
    {
      name: 'TRỤ SỞ ĐÀ NẴNG',
      address: '58 Nguyễn Chí Thanh, Hải Châu 1, Hải Châu, Đà Nẵng',
      phone: '0236 7300 1866',
      isMainOffice: true,
      area: 'Khu vực Trung tâm Đà Nẵng',
      city: 'DN',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.833414000638!2d108.21788821156082!3d16.07413208454195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421830b64ddcd5%3A0xeda112dc0566707e!2zNTggTmd1eeG7hW4gQ2jDrSBUaGFuaCwgSOG6o2kgQ2jDonUgMSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731532165965!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH THANH KHÊ',
      address: '291 Hải Phòng, Tân Chính, Thanh Khê, Đà Nẵng',
      phone: '0236 7300 1867',
      isMainOffice: false,
      area: 'Khu vực Trung tâm Đà Nẵng',
      city: 'DN',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.899649902428!2d108.20631631156076!3d16.070696384544807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184be2bf9baf%3A0x7aa5d2e6bf1bbd74!2zMjkxIEjhuqNpIFBow7JuZywgVGFtIFRodeG6rW4sIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731532198573!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH SƠN TRÀ',
      address: '478 Ngô Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng',
      phone: '0236 7300 1868',
      isMainOffice: false,
      area: 'Khu vực ven biển',
      city: 'DN',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6101883617193!2d108.2367961115611!3d16.085705684531845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217f5370a2865%3A0x980a06c0c4bcce5d!2zNDc4IE5nLiBRdXnhu4FuLCBBbiBI4bqjaSBC4bqvYywgU8ahbiBUcsOgLCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731532232439!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      name: 'CHI NHÁNH NGŨ HÀNH SƠN',
      address: '103 Lê Văn Hiến, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng',
      phone: '0236 7300 1869',
      isMainOffice: false,
      area: 'Khu vực ven biển',
      city: 'DN',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.8112737270344!2d108.24825191155998!3d16.023336984585523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142174e158cc44b%3A0x4eaafe66822c8568!2zMTAzIMSQLiBMw6ogVsSDbiBIaeG6v24sIEtodcOqIE3hu7ksIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1731532263067!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    ];
    ngOnInit() {
      // Simulate loading time
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  
  constructor(private sanitizer: DomSanitizer) {
    // Khởi tạo với tất cả locations
    this.filteredLocations = [...this.locations];
    // Khởi tạo map URL an toàn
    this.currentMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.685886858839!2d105.84273007479455!3d21.030673580617025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xe54ff25479d95e3c!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635739501863!5m2!1svi!2s'
    );
  }
  onCityChange(): void {
    this.selectedArea = '';
    this.selectedDistrict = '';
    this.filterLocations();
  }
  get filteredAreas(): Area[] {
    return this.areas.filter(area => !this.selectedCity || area.city === this.selectedCity);
  }

  // Getter cho danh sách quận/huyện có sẵn dựa trên khu vực đã chọn
  get availableDistricts(): string[] {
    if (!this.selectedArea) {
      return [];
    }
    const selectedAreaObj = this.areas.find(area => area.name === this.selectedArea);
    return selectedAreaObj ? selectedAreaObj.districts : [];
  }

  // Phương thức chọn khu vực
  selectArea(areaName: string): void {
    if (this.selectedArea === areaName) {
      this.selectedArea = '';
    } else {
      this.selectedArea = areaName;
    }
    this.selectedDistrict = '';
    this.filterLocations();
  }

  // Phương thức chọn location
  selectLocation(location: Location): void {
    this.selectedLocation = location;
    if (location.mapUrl) {
      this.currentMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(location.mapUrl);
    }
  }

  // Phương thức lọc locations
  filterLocations(): void {
    this.filteredLocations = this.locations.filter(location => {
      const cityMatch = !this.selectedCity || location.city === this.selectedCity;
      const areaMatch = !this.selectedArea || location.area === this.selectedArea;
      const districtMatch = !this.selectedDistrict || 
                          location.address.toLowerCase().includes(this.selectedDistrict.toLowerCase());
      return cityMatch && areaMatch && districtMatch;
    });

    // Nếu không còn location nào sau khi lọc, reset selection
    if (this.filteredLocations.length === 0) {
      this.selectedLocation = null;
      this.currentMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.685886858839!2d105.84273007479455!3d21.030673580617025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0xe54ff25479d95e3c!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635739501863!5m2!1svi!2s'
      );
    }
    // Nếu chỉ còn 1 location, tự động chọn location đó
    else if (this.filteredLocations.length === 1) {
      this.selectLocation(this.filteredLocations[0]);
    }
  }

  // Phương thức reset filters
  resetFilters(): void {
    this.selectedArea = '';
    this.selectedDistrict = '';
    this.filterLocations();
  }

  // Phương thức kiểm tra xem location có đang được chọn không
  isLocationSelected(location: Location): boolean {
    return this.selectedLocation === location;
  }

  // Phương thức lấy tên quận/huyện từ địa chỉ
  getDistrictFromAddress(address: string): string {
    const districts = this.areas.flatMap(area => area.districts);
    return districts.find(district => address.includes(district)) || '';
  }
}
    