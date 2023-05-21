import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orderline } from '../classes/orderline.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {
  baseurl: string = "http://localhost:8205/api/orderlines"

  constructor(
    private http: HttpClient
  ) { }

      //GET all Orderlines
      list(): Observable<Orderline[]> {
        return this.http.get(`${this.baseurl}`) as Observable<Orderline[]>
      }  
      //GET Orderline by ID
      get(id: number): Observable<Orderline> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Orderline>
      }
      //Create a new Orderline
      create(orderline: Orderline): Observable<Orderline> {
        return this.http.post(`${this.baseurl}`, orderline) as Observable<Orderline>
      }
      //Edit an existing orderline and return a 200 level code
      edit(orderline: Orderline): Observable<any> {
        return this.http.put(`${this.baseurl}/${orderline.id}`, orderline) as Observable<any>
      }
      //Delete an existing orderline
      remove(id: number): Observable<any> {
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
      }
}
