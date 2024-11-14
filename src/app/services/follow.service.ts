import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour';
import { HttpParams } from '@angular/common/http';
import { Follow } from '../models/follow';
import { FollowResponse } from '../models/follow-response';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private apiUrl = environment.apiUrl + '/api/v1/follow';

  constructor(private http: HttpClient) { }

  // Lấy tất cả các follow
  getAllFollows(): Observable<FollowResponse> {
    return this.http.get<FollowResponse>(this.apiUrl);
  }

  // Lấy follow theo ID
  getFollowById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  // Tạo mới follow
  createFollow(tourId: number): Observable<any> {
    const follow = { tourId: tourId };
    return this.http.post(this.apiUrl, follow);
  }

  // Bỏ theo dõi
  deleteFollow(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
