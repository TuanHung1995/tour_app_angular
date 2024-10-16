import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  link: string;
}

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="bg-gray-100 min-h-screen p-4">
      <div class="container mx-auto">
        <div class="flex items-center text-gray-500 text-sm mb-4">
          <a href="/home" class="hover:text-blue-500">Trang chủ</a>
          <span class="mx-2">›</span>
          <span>Liên hệ</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Contact Form -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <form (ngSubmit)="onSubmit()">
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  class="w-full p-2 border rounded"
                  [(ngModel)]="name"
                  name="name"
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full p-2 border rounded"
                  [(ngModel)]="email"
                  name="email"
                />
              </div>
              <div class="mb-4">
                <input
                  type="tel"
                  placeholder="Điện thoại*"
                  class="w-full p-2 border rounded"
                  [(ngModel)]="phone"
                  name="phone"
                  required
                />
              </div>
              <div class="mb-4">
                <textarea
                  placeholder="Nội dung"
                  class="w-full p-2 border rounded"
                  rows="4"
                  [(ngModel)]="content"
                  name="content"
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Gửi thông tin
              </button>
            </form>
          </div>

          <!-- Support Image and FAQs -->
          <div>
            <div class="bg-white p-6 rounded-lg shadow-md mb-4">
              <div class="flex justify-center mb-4">
                <img
                  src="../../assets/images/p-1.webp"
                  alt="Support"
                  class="w-32 h-32"
                />
              </div>
              <p class="text-center mb-4 text-sm">
                Để được hỗ trợ nhanh hơn, vui lòng gửi yêu cầu của bạn qua biểu
                mẫu
              </p>
              <h3 class="text-lg font-bold mb-2">Câu hỏi & Giải đáp</h3>
              <ul class="space-y-2">
                <li *ngFor="let faq of faqs">
                  <a
                    href="{{ faq.link }}"
                    class="text-blue-500 hover:underline flex items-center justify-between"
                  >
                    <span>{{ faq.question }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Company Information -->
        <div class="bg-white p-6 rounded-lg shadow-md my-4">
          <h3 class="text-lg font-bold mb-2">
            Công ty cổ phần dịch vụ OH!Travel
          </h3>
          <p class="flex items-start mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2 mt-1 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <span
              ><strong>Địa chỉ:</strong><br />Tầng 6, Tòa Ladeco, 266 Đội Cấn,
              Quận Ba Đình, TP Hà Nội</span
            >
          </p>
          <p class="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            <span
              ><strong>Email:</strong> <br />
              <a href="support&#64;sapo.vn">support&#64;sapo.vn </a></span
            >
          </p>
          <p class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span
              ><strong>Hotline:</strong> <br /><a href="1900 6750"
                >1900 6750</a
              ></span
            >
          </p>
        </div>

        <!-- Google Map -->
        <div class="h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265858605295!2d105.81637731476292!3d21.035710985994775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ8O0bmcgTmdo4buHIFNhcG8!5e0!3m2!1sen!2s!4v1635739201863!5m2!1sen!2s"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </div>
  `,
  styleUrl: './phone.component.css',
})
export class PhoneComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  content: string = '';

  faqs: FAQ[] = [
    { question: 'Cách làm thủ tục trực tuyến', link: '#' },
    { question: 'Cách hủy vé và hoàn tiền cho đặt chỗ máy bay', link: '#' },
    {
      question: 'Cách yêu cầu xuất hóa đơn GTGT khi đặt tại OH!Travel',
      link: '#',
    },
    { question: 'Xác nhận và xác thực thanh toán', link: '#' },
    {
      question: 'Làm cách nào để kiểm tra trạng thái hoàn tiền của tôi',
      link: '#',
    },
    { question: 'Cách sửa hoặc đổi tên hành khách bay', link: '#' },
    { question: 'Cách đổi lịch vé máy bay của tôi', link: '#' },
  ];

  onSubmit() {
    console.log('Form submitted', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      content: this.content,
    });
    // Here you would typically send this data to a server
  }
}
