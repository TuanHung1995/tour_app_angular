import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = environment.apiUrl + '/api/v1/search';

  constructor(private http: HttpClient) { }

  // Searching tour with keyword, location, destination, start_date, category paramters
  searchTour(keyword: string, status: string, category: string, destination: string, location: string, start_date: string, end_date: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        keyword: keyword,
        status: status,
        category: category,
        destination: destination,
        location: location,
        start_date: start_date,
        end_date: end_date
      }
    });
  }
}
