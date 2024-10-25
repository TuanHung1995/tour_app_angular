import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private apiUrl = environment.apiUrl + '/api/v1/tours';

  constructor(private http: HttpClient) { }

  // Lấy tất cả các tour
  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  // Lấy tour theo ID
  getTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  // Tạo mới tour
  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, tour);
  }

  // Cập nhật tour
  updateTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${id}`, tour);
  }

  // Xóa tour
  deleteTour(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Phân trang tour theo trạng thái
  getAllToursByStatus(status: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/page`, {
      params: {
        status: status,
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  // Lấy tour theo danh mục và trạng thái
  getAllToursByCategoryAndStatus(category: string, status: string): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.apiUrl}/category`, {
      params: {
        category: category,
        status: status
      }
    });
  }

  sortTours(status: string, location: string, destination: string, minPrice: number, maxPrice: number, direction: string, sortBy: string, page: number, size: number): Observable<Tour[]> {
    let params = new HttpParams()
      .set('status', status)
      .set('location', location)
      .set('destination', destination)
      .set('minPrice', minPrice.toString())
      .set('maxPrice', maxPrice.toString())
      .set('direction', direction)
      .set('sortBy', sortBy)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Tour[]>(`${this.apiUrl}/sort`, { params });
  }
}