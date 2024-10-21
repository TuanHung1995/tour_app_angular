import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface VisaFee {
  country: string;
  visaTypes: string[];
  processingTime: string;
  fee: string;
}

interface EuropeVisaFee {
  country: string;
  visaType?: string;
  processingTime?: string;
  adultFee: string;
  childFee: string;
}
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
      <div class="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center text-gray-500 text-sm mb-4">
          <a href="/home" class="hover:text-blue-500">Trang chủ</a>
          <span class="mx-2">›</span>
          <span>
          Chi phí dịch vụ làm visa đi nước ngoài cho người Việt</span>
        </div>
      <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-500 to-purple-500">
          <h1 class="text-3xl font-bold text-white">Chi phí dịch vụ làm visa đi nước ngoài cho người Việt</h1>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p class="text-gray-700 mb-6">Bảng giá làm visa các nước dành cho công dân Việt Nam được cập nhật chi tiết trong bảng dưới đây. Chi phí này có thể thay đổi tùy thời điểm.</p>
          
          <div class="mb-4">
            <label for="region-select" class="block text-sm font-medium text-gray-700">Chọn khu vực:</label>
            <select id="region-select" [(ngModel)]="selectedRegion" (change)="onRegionChange()" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="asia">Châu Á</option>
              <option value="europe">Châu Âu</option>
              <option value="americas">Châu Mỹ và Châu Úc</option>
            </select>
          </div>

          <ng-container [ngSwitch]="selectedRegion">
            <ng-container *ngSwitchCase="'asia'">
              <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800">Chi phí làm visa cho người Việt đi Châu Á</h2>
              <div class="overflow-x-auto mb-8">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-blue-500">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quốc gia</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Loại visa</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Thời gian làm việc</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr *ngFor="let fee of visaFees" class="hover:bg-gray-50">
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.country }}</td>
                      <td class="px-6 py-4">
                        <ul class="list-disc list-inside">
                          <li *ngFor="let type of fee.visaTypes">{{ type }}</li>
                        </ul>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.processingTime }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.fee }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ng-container>

            <ng-container *ngSwitchCase="'europe'">
              <h2 class="text-2xl font-bold text-gray-800">Chi phí làm visa cho người Việt đi Châu Âu</h2>
              <div class="overflow-x-auto mb-8">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-blue-500">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quốc gia</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Loại visa</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Thời gian làm việc</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr *ngFor="let fee of europeanVisaFees" class="hover:bg-gray-50">
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.country }}</td>
                      <td class="px-6 py-4">{{ fee.visaType || 'N/A' }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.processingTime || 'N/A' }}</td>
                      <td class="px-6 py-4 border-b border-gray-200">
                        <div>Người lớn: {{ fee.adultFee }}</div>
                        <div>Trẻ em: {{ fee.childFee }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ng-container>

            <ng-container *ngSwitchCase="'americas'">
              <h2 class="text-2xl font-bold mt-12 mb-4 text-gray-800">Giá dịch vụ làm visa cho người Việt đi Châu Mỹ, Châu Úc</h2>
              <div class="overflow-x-auto mb-8">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-blue-500">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quốc gia</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Loại visa</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Thời gian làm việc</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr *ngFor="let fee of visaFees1" class="hover:bg-gray-50">
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.country }}</td>
                      <td class="px-6 py-4">
                        <ul class="list-disc list-inside">
                          <li *ngFor="let type of fee.visaTypes">{{ type }}</li>
                        </ul>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.processingTime }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">{{ fee.fee }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ng-container>
          </ng-container>

          <p class="text-sm italic text-gray-600">
            *Lưu ý: Chi phí làm visa đi nước ngoài ở trên có thể biến động tùy theo sự thay đổi từ phía Cơ quan lãnh sự. Để được báo giá chính xác tại thời điểm bạn xin thị thực, vui lòng liên hệ đường dây nóng hỗ trợ 24/7 qua số <span class="text-blue-600 font-semibold">1900 6750</span>.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    }
  `]
})
export class InfoComponent {
  selectedRegion: string = 'asia';
  visaFees: VisaFee[] = [
    {
      country: 'Trung Quốc',
      visaTypes: ['Visa du lịch', 'Visa thăm thân', 'Visa công tác'],
      processingTime: '8 ngày',
      fee: '155 USD'
    },
    {
      country: 'Hàn Quốc',
      visaTypes: ['Visa du lịch', 'Visa công tác', 'Visa thăm thân'],
      processingTime: '8 ngày',
      fee: '135 USD'
    },
    {
      country: 'Nhật Bản',
      visaTypes: ['Visa du lịch', 'Visa thăm thân', 'Multiple', 'Visa công tác'],
      processingTime: '8 ngày',
      fee: '175 USD'
    },
    {
      country: 'Đài Loan',
      visaTypes: ['Visa du lịch', 'Visa thăm thân'],
      processingTime: '7 ngày',
      fee: '135 USD'
    },
    {
      country: 'Ấn Độ',
      visaTypes: ['Visa điện tử'],
      processingTime: '3 ngày',
      fee: '95 USD'
    },
    {
      country: 'Hong Kong',
      visaTypes: ['Visa công tác/thương mại', 'Visa thăm thân'],
      processingTime: 'Hơn 4 tuần',
      fee: '170 USD'
    },
    {
      country: 'Singapore',
      visaTypes: ['Visa cho người nước ngoài'],
      processingTime: '5 - 7 ngày',
      fee: '120 USD'
    },
    {
      country: 'Thái Lan',
      visaTypes: ['Visa cho người nước ngoài'],
      processingTime: '5 ngày',
      fee: '135 USD'
    }
  ];
  europeanVisaFees: EuropeVisaFee[] = [
    { country: 'Pháp', adultFee: '250 USD', childFee: '195 - 220 USD' },
    { country: 'Đức', adultFee: '245 USD', childFee: '220 USD' },
    { country: 'Ý', adultFee: '255 USD', childFee: '200 USD' },
    { country: 'Đan Mạch', adultFee: '250 USD', childFee: '210 USD' },
    { country: 'Bồ Đào Nha', adultFee: '260 USD', childFee: '250 USD' },
    { country: 'Tây Ban Nha', visaType: 'Visa du lịch', processingTime: '15 - 21 ngày', adultFee: '240 USD', childFee: '200 USD' },
    { country: 'Thụy Điển', visaType: 'Visa công tác', processingTime: '15 - 21 ngày', adultFee: '250 USD', childFee: '210 USD' },
    { country: 'Bỉ', visaType: 'Visa thăm thân', processingTime: '15 - 21 ngày', adultFee: '265 USD', childFee: '200 USD' },
    { country: 'Slovenia', adultFee: '260 USD', childFee: '200 USD' },
    { country: 'Luxembourg', adultFee: '250 USD', childFee: '200 USD' },
    { country: 'Thụy Sĩ', adultFee: '260 USD', childFee: '200 USD' },
    { country: 'Thổ Nhĩ Kỳ', adultFee: '250 USD', childFee: '200 USD' },
    { country: 'Vương Quốc Anh', processingTime: '23 - 25 ngày', adultFee: 'Khách hàng ở Hà Nội: 300 USD\n\nKhách hàng ở Đà Nẵng, HCM: 355 USD', childFee: '' }
  ];
  visaFees1: VisaFee[] = [
    { country: 'Hoa Kỳ', visaTypes: ['Visa du lịch'], processingTime: '7 - 10 ngày', fee: '260 USD' },
    { country: 'Canada', visaTypes: ['Visa du lịch'], processingTime: '1 - 2 tháng', fee: '325 USD' },
    { country: 'Brazil', visaTypes: ['Visa công tác','Visa du lịch', 'Visa thăm thân'], processingTime: '', fee: '270 USD' },
    { country: 'Úc', visaTypes: ['Visa thăm thân'], processingTime: '15 - 21 ngày', fee: '250 USD' },
    { country: 'New Zealand', visaTypes: ['Visa công tác'], processingTime: '', fee: '325 USD' },
  ];
  
  ngOnInit() {
    // Initialization logic if needed
  }

  onRegionChange() {
    // Any additional logic when region changes
    console.log('Selected region:', this.selectedRegion);
  }
}
