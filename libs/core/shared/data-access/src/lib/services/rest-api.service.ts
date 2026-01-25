import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@happic/happic-user/environments';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl + '/api' || 'http://localhost:8000/api';

  get<T>(
    path: string,
    params?: Record<string, any>,
    headers?: HttpHeaders,
  ): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, {
      params: this.buildParams(params),
      headers,
    });
  }

  post<T>(path: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, { headers });
  }

  put<T>(path: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, body, { headers });
  }

  patch<T>(path: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${path}`, body, { headers });
  }

  delete<T>(
    path: string,
    params?: Record<string, any>,
    headers?: HttpHeaders,
  ): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, {
      params: this.buildParams(params),
      headers,
    });
  }

  private buildParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();

    if (!params) return httpParams;

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        httpParams = httpParams.set(key, String(value));
      }
    });

    return httpParams;
  }
}
