import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl: string = "http://localhost:8205/api/products"

  constructor(
    private http: HttpClient
  ) { }

      //GET all Products
      list(): Observable<Product[]> {
        return this.http.get(`${this.baseurl}`) as Observable<Product[]>
      }  
      //GET Product by ID
      get(id: number): Observable<Product> {
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>
      }
      //Create a new Product
      create(product: Product): Observable<Product> {
        return this.http.post(`${this.baseurl}`, product) as Observable<Product>
      }
      //Edit an existing product and return a 200 level code
      edit(product: Product): Observable<any> {
        return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<any>
      }
      //Delete an existing product
      remove(id: number): Observable<any> {
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
      }
}
