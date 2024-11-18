import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = environment.apiUrl + '/api/v1/news';

  constructor(private http: HttpClient) {}

  // Lấy tất cả các News
  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/all`);
  }

  // Lấy News theo ID
  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  // Tạo mới News
  createNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  // Cập nhật News
  updateNews(id: number, news: News): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/${id}`, news);
  }

  // Xóa News
  deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Phân trang News theo trạng thái
  getAllNewsByStatus(
    status: string,
    page: number,
    size: number
  ): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/page`, {
      params: {
        status: status,
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  // Lấy News theo danh mục và trạng thái
  getAllNewsByCategoryAndStatus(
    category: string,
    status: string
  ): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/category`, {
      params: {
        category: category,
        status: status,
      },
    });
  }
}
