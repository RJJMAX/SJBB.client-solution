import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../classes/order.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
baseurl: string = "http://localhost:8205/api/orders";

  constructor(
    private http: HttpClient
  ) { }

      //GET all Orders
      list(): Observable<Order[]> {
        return this.http.get(`${this.baseurl}`) as Observable<Order[]>
      }  
      //GET Order by ID
      get(id: number): Observable<Order> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Order>
      }
      //Create a new Order
      create(order: Order): Observable<Order> {
        return this.http.post(`${this.baseurl}`, order) as Observable<Order>
      }
      //Edit an existing order and return a 200 level code
      edit(order: Order): Observable<any> {
        return this.http.put(`${this.baseurl}/${order.id}`, order) as Observable<any>
      }
      //Delete an existing order
      remove(id: number): Observable<any> {
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
      }
}
