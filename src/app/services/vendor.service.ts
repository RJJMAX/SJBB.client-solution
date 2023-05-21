import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../classes/vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseurl: string = "http://localhost:8205/api/vendors"

  constructor(
    private http: HttpClient

  ) { }

  //GET all Vendors
  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>
  }
  //GET Vendor by Id
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
  //POST Create New Vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>
  }
  //PUT Edit Existing Vendor
  edit(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>
  }
  //DELETE Remove Existing Vendor
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }
}
