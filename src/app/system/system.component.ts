import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Location {
  name: string;
  address: string;
  phone: string;
  isMainOffice: boolean;
}

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Left side: Location list -->
      <div class="w-1/3 p-6 bg-white shadow-lg overflow-hidden">
      <div class="flex items-center text-gray-500 text-sm mb-4">
          <a href="/home" class="hover:text-blue-500">Trang chủ</a>
          <span class="mx-2">›</span>
          <span>Liên hệ</span>
        </div>
        <h2 class="text-2xl font-bold mb-6 text-gray-800">
          Hệ Thống Của Chúng Tôi
        </h2>

        <!-- Dropdowns -->
        <div class="mb-6 space-y-4">
          <select [(ngModel)]="selectedCity" class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>Hà Nội</option>
          </select>

          <select [(ngModel)]="selectedDistrict" class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>Chọn Quận/Huyện</option>
          </select>
        </div>

        <!-- Location list with custom scrollbar -->
        <div class="space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
          <div *ngFor="let location of locations" class="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50 cursor-pointer">
            <h3 [class.text-red-600]="location.isMainOffice" class="font-bold text-lg mb-2 transition duration-300 ease-in-out hover:text-blue-600">
              {{ location.name }}
            </h3>
            <p class="text-sm flex items-start text-gray-600 mb-2 group">
              <svg class="w-5 h-5 mr-2 mt-0.5 text-gray-500 transition duration-300 ease-in-out group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="transition duration-300 ease-in-out group-hover:text-gray-800">{{ location.address }}</span>
            </p>
            <p class="text-sm flex items-center text-gray-600 group">
              <svg class="w-5 h-5 mr-2 text-gray-500 transition duration-300 ease-in-out group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="transition duration-300 ease-in-out group-hover:text-gray-800">{{ location.phone }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side: Map -->
      <div class="w-2/3 p-6 bg-white">
        <div class="h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265858605295!2d105.81637731476292!3d21.035710985994775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ8O0bmcgTmdo4buHIFNhcG8!5e0!3m2!1sen!2s!4v1635739201863!5m2!1sen!2s"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `]
})
export class SystemComponent {
  selectedCity: string = 'Hà Nội';
  selectedDistrict: string = '';

  locations: Location[] = [
    {
      name: 'TRỤ SỞ HÀ NỘI',
      address: 'Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội',
      phone: '1900 6750',
      isMainOffice: true
    },
    {
      name: 'CHI NHÁNH CẦU GIẤY',
      address: '136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
      phone: '0945321821',
      isMainOffice: false
    },
    {
      name: 'CHI NHÁNH HÀ ĐÔNG',
      address: '39 P. Nguyễn Viết Xuân, P. Quang Trung, Hà Đông, Hà Nội',
      phone: '0965464212',
      isMainOffice: false
    },
    {
      name: 'CHI NHÁNH BẮC ',
      address: '3PGH+8R9, ĐT70A, thôn Trung, Nam Từ Liêm, Hà Nội, Việt Nam',
      phone: '0987654321',
      isMainOffice: false
    },
    {
      name: 'CHI NHÁNH NAM',
      address: '20 Ng. 322 Đ. Mỹ Đình, Nhân Mỹ, Nam Từ Liêm, Hà Nội',
      phone: '20 Ng. 322 Đ. Mỹ Đình, Nhân Mỹ, Nam Từ Liêm, Hà Nội',
      isMainOffice: false
    }
  ];
}