import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  provinces: any[] = [];
  province: string = '';
  ward: string = '';
  district: string = '';
  districts: any[] = [];
  wards: any[] = [];
  codCheck: boolean = false;

  filteredDistricts: any[] = [];
  filteredWards: any[] = [];

  selectedProvinceCode: string | null = null;
  selectedDistrictCode: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Load tất cả file JSON
    this.http.get<any>('assets/locations/tinh_tp.json').subscribe((provinceData) => {
      this.provinces = Object.values(provinceData);
    });

    this.http.get<any>('assets/locations/quan_huyen.json').subscribe((districtData) => {
      this.districts = Object.values(districtData);
    });

    this.http.get<any>('assets/locations/xa_phuong.json').subscribe((wardData) => {
      this.wards = Object.values(wardData);
    });

    // Tạo form
    this.checkoutForm = new FormBuilder().group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [`${this.province},${this.district},${this.ward}`, Validators.required],
      note: [''],
    });
  }

  onProvinceChange(): void {
    if (this.selectedProvinceCode) {
      this.filteredDistricts = this.districts.filter(
        (d) => d.parent_code === this.selectedProvinceCode
      );
      this.filteredWards = [];
      this.selectedDistrictCode = null;
    }
  }

  onDistrictChange(): void {
    if (this.selectedDistrictCode) {
      this.filteredWards = this.wards.filter(
        (w) => w.parent_code === this.selectedDistrictCode
      );
    }
  }

  onCODChange(): void {
    this.codCheck = !this.codCheck;
  }
}
