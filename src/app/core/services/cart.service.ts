import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartResponse } from '../models/cart-response';
import { Tour } from '../models/tour';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = environment.apiUrl + '/api/v1/cart';

  private apiUrl1 = environment.apiUrl + '/api/v1/tour';

  constructor(private http: HttpClient) {}

  // Lấy tất cả các Items
  getAllItems(): Observable<CartResponse> {
    return this.http.get<CartResponse>(this.apiUrl);
  }

  // Lấy Items theo ID
  getItemsById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl1}/${id}`);
  }

  // Tạo mới Items
  createItem(credentials: {
    quantity: number;
    tourId: number;
    date: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Cập nhật Items
  adjustQuantity(credentials: { id: number, quantity: number, tourId: number }): Observable<any> {
    return this.http.put(this.apiUrl, credentials);
  }

  // Bỏ theo dõi
  deleteItems(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/item/${id}`);
  }
}
