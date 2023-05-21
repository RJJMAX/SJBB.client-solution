import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseurl:  string = "http://localhost:8205/api/customers";

  constructor(
    private http: HttpClient
  ) { }

    //GET all Customers
    list(): Observable<Customer[]> {
      return this.http.get(`${this.baseurl}`) as Observable<Customer[]>
    }  
    //GET Customer by ID
    get(id: number): Observable<Customer> {
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Customer>
    }
    //Create a new Customer
    create(customer: Customer): Observable<Customer> {
      return this.http.post(`${this.baseurl}`, customer) as Observable<Customer>
    }
    //Edit an existing customer and return a 200 level code
    edit(customer: Customer): Observable<any> {
      return this.http.put(`${this.baseurl}/${customer.id}`, customer) as Observable<any>
    }
    //Delete an existing customer
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
    }
}
