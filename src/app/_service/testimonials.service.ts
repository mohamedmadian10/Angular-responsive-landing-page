import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  private baseUrl: string = ' https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) {}
  getTestimonials() {
    return this.http.get(this.baseUrl);
  }
}
