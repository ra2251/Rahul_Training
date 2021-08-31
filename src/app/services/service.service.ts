import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  role = new BehaviorSubject(0);
  url = "http://localhost:3000/cities"
  constructor(public http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }

  getData(url): Observable<any> {
    return this.http.get<any>(`${url}`)
  }
  storeData(url,data): Observable<any> {
    return this.http.post<any>(url, data);
  }

  storeImageUrl(url, image): Observable<any> {
    return this.http.post<any>(url, image);
  }

  deleteImage(url):Observable<boolean> {
    return this.http.delete<boolean>(url);
  }
  updateData(url,data) : Observable<any>{
    return this.http.put<any>(url,data);
  }
}

export enum Gender {
  male = 'man',
  female = 'woman'
}

export enum Age {
  young = '18',
  old = '41'
}