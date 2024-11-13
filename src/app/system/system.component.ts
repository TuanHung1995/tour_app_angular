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
}

interface Area {
  name: string;
  districts: string[];
}

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Loading Screen -->
    <div *ngIf="isLoading" class="fixed inset-0 bg-white z-50">
      <div class="flex flex-col items-center justify-center h-full">
        <!-- Map Loading Animation -->
        <div class="relative w-48 h-48 mb-8">
          <div class="absolute inset-0 animate-pulse">
            <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Map Pin Animation -->
              <circle class="animate-ping" cx="50" cy="50" r="8" fill="#3B82F6" fill-opacity="0.4"/>
              <circle cx="50" cy="50" r="6" fill="#3B82F6"/>
              <!-- Circular Rings Animation -->
              <circle class="animate-ripple-1" cx="50" cy="50" r="20" stroke="#3B82F6" stroke-width="2" stroke-opacity="0.3"/>
              <circle class="animate-ripple-2" cx="50" cy="50" r="35" stroke="#3B82F6" stroke-width="2" stroke-opacity="0.2"/>
              <!-- Map Grid Background -->
              <path d="M20 20 H80 M20 40 H80 M20 60 H80 M20 80 H80" stroke="#E5E7EB" stroke-width="1"/>
              <path d="M20 20 V80 M40 20 V80 M60 20 V80 M80 20 V80" stroke="#E5E7EB" stroke-width="1"/>
            </svg>
          </div>
        </div>
        <!-- Loading Text -->
        <div class="text-center">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Đang tải bản đồ</h2>
          <p class="text-sm text-gray-500">Vui lòng đợi trong giây lát...</p>
        </div>
        <!-- Loading Progress Bar -->
        <div class="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div class="h-full bg-blue-500 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>

    <!-- Main Content (only shown after loading) -->
    <div [class.opacity-0]="isLoading" [class.animate-fadeIn]="!isLoading">
    <!-- Breadcrumb navigation -->
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
       <!-- Mobile View Toggle Button -->
       <!-- <div class="lg:hidden p-4 flex justify-end">
        <button 
          (click)="toggleMobileView()"
          class="px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
          {{ showMobileMap ? 'Xem danh sách' : 'Xem bản đồ' }}
        </button>
      </div> -->
     <div class="flex h-screen bg-gray-50">
      <!-- Left side: Location list -->
      <div class="w-80 bg-white border-r border-gray-100 flex flex-col">
        <!-- Header -->
        <div class="p-4 border-b border-gray-100">
          
          
          <h2 class="text-sm font-medium text-gray-700 mb-3">
            Hệ thống chi nhánh
          </h2>
          
          <!-- Area filters -->
          <div class="space-y-2">
            <!-- Khu vực tabs -->
            <div class="flex flex-wrap gap-1 mb-3">
              <button
                *ngFor="let area of areas"
                (click)="selectArea(area.name)"
                [class.bg-blue-500]="selectedArea === area.name"
                [class.text-white]="selectedArea === area.name"
                [class.bg-gray-100]="selectedArea !== area.name"
                class="px-3 py-1 text-xs rounded-full transition-colors">
                {{ area.name }}
              </button>
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
            <!-- Location name with status indicator -->
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-sm font-medium text-gray-900">
                {{ location.name }}
              </h3>
              <span *ngIf="location.isMainOffice" 
                    class="px-1.5 py-0.5 text-[10px] font-medium text-red-700 bg-red-50 rounded-full">
                Trụ sở chính
              </span>
            </div>
            
            <!-- Contact details -->
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

          <!-- Empty state -->
          <div *ngIf="filteredLocations.length === 0" 
               class="p-8 text-center text-gray-500">
            <p class="text-sm">Không tìm thấy chi nhánh nào trong khu vực này</p>
          </div>
        </div>
      </div>

      <!-- Right side: Map Container -->
      <div class="flex-1 p-6 flex items-start justify-center">
        <div class="w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden">
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
          <div class="relative" style="padding-top: 56.25%">
            <iframe
              [src]="currentMapUrl"
              class="absolute top-0 left-0 w-full h-full border-none"
              allowfullscreen=""
              loading="lazy">
            </iframe>
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

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      @apply bg-gray-300 rounded-full;
    }

    ::-webkit-scrollbar-thumb:hover {
      @apply bg-gray-400;
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
  selectedArea: string = '';
  selectedDistrict: string = '';
  selectedLocation: Location | null = null;
  currentMapUrl: SafeResourceUrl;
  filteredLocations: Location[] = [];

  // Danh sách khu vực và quận/huyện
  areas: Area[] = [
    {
      name: 'Khu vực phía Bắc',
      districts: ['Ba Đình', 'Cầu Giấy', 'Đống Đa', 'Hoàn Kiếm']
    },
    {
      name: 'Khu vực phía Nam',
      districts: ['Thanh Xuân', 'Hà Đông', 'Nam Từ Liêm', 'Hoàng Mai']
    },
    {
      name: 'Khu vực phía Tây',
      districts: ['Bắc Từ Liêm', 'Tây Hồ', 'Long Biên']
    }
  ];

  locations: Location[] = [
    {
      name: 'TRỤ SỞ HÀ NỘI',
      address: 'Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội',
      phone: '1900 6750',
      isMainOffice: true,
      area: 'Khu vực phía Bắc',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265858605295!2d105.81637731476292!3d21.035710985994775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ8O0bmcgTmdo4buHIFNhcG8!5e0!3m2!1sen!2s!4v1635739201863!5m2!1sen!2s'
    },
    {
      name: 'CHI NHÁNH CẦU GIẤY',
      address: '136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
      phone: '0945321821',
      isMainOffice: false,
      area: 'Khu vực phía Bắc',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1125457248985!2d105.78240701476284!3d21.028913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMTM2IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739301863!5m2!1svi!2s'
    },
    {
      name: 'CHI NHÁNH HÀ ĐÔNG',
      address: '39 P. Nguyễn Viết Xuân, P. Quang Trung, Hà Đông, Hà Nội',
      phone: '0965464212',
      isMainOffice: false,
      area: 'Khu vực phía Nam',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1925457248985!2d105.75640701476284!3d20.968913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad7d840727a7%3A0x9c3550fff0307a17!2zMzkgUC4gTmd1eeG7hW4gVmnhur90IFh1w6JuLCBQLiBRdWFuZyBUcnVuZywgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635739401863!5m2!1svi!2s'
    },
    {
      name: 'CHI NHÁNH HOÀNG MAI',
      address: '123 Giải Phóng, Hoàng Mai, Hà Nội',
      phone: '0987654321',
      isMainOffice: false,
      area: 'Khu vực phía Nam',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5525457248985!2d105.77340701476284!3d21.008913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMjAgTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE5ow6JuIE3hu7ksIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739601863!5m2!1svi!2s'
      },
      {
        name: 'CHI NHÁNH BẮC',
        address: '3PGH+8R9, ĐT70A, thôn Trung, Nam Từ Liêm, Hà Nội, Việt Nam',
        phone: '0987654321',
        isMainOffice: false,
        area: 'Khu  vực phía Bắc',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6725457248985!2d105.76940701476284!3d20.998913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1635739501863!5m2!1svi!2s'
      },
      {
        name: 'CHI NHÁNH NAM',
        address: '20 Ng. 322 Đ. Mỹ Đình, Nhân Mỹ, Nam Từ Liêm, Hà Nội',
        phone: '0912345678',
        isMainOffice: false,
        area: 'Khu vực phía nam',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5525457248985!2d105.77340701476284!3d21.008913986000215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca0539f5f%3A0x88f752dc5b934c31!2zMjAgTmcuIDMyMiDEkC4gTeG7uSDEkMOsbmgsIE5ow6JuIE3hu7ksIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1635739601863!5m2!1svi!2s'
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
      const areaMatch = !this.selectedArea || location.area === this.selectedArea;
      const districtMatch = !this.selectedDistrict || 
                          location.address.toLowerCase().includes(this.selectedDistrict.toLowerCase());
      return areaMatch && districtMatch;
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
    