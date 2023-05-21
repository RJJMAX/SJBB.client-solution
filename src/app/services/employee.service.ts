import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl: string = "http://localhost:8205/api/employees";
  constructor(

    private http: HttpClient
  ) { }

  //GET all Employees
  list(): Observable<Employee[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Employee[]>
  }

  //GET Employee by ID
  get(id: number): Observable<Employee> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Employee>
  }
  //login by username and password
  login(username: string, password: string): Observable<Employee> {
    return this.http.get(`${this.baseurl}/${username}/${password}`) as Observable<Employee>
  }
  //Create a new Employee
  create(employee: Employee): Observable<Employee> {
    return this.http.post(`${this.baseurl}`, employee) as Observable<Employee>
  }
  //Edit an existing employee and return a 200 level code
  edit(employee: Employee): Observable<any> {
    return this.http.put(`${this.baseurl}/${employee.id}`, employee) as Observable<any>
  }
  //Delete an existing employee
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }
}