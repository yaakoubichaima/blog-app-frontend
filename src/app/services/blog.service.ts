
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080/blogs/';

  constructor(private http: HttpClient) { }

  getBlogById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createBlog(blog: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, blog);
  }

  updateBlog(id: string, value: any): Observable<Object> {
      console.log(value)
    return this.http.put(`${this.baseUrl}${id}`, value);
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getBlogList(): Observable<any> {
    console.log("getAll method")
    return this.http.get(`${this.baseUrl}`);
  }
}
