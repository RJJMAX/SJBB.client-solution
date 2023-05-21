import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './classes/employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInEmployee: Employee | null = null;

  constructor(
    private router: Router
  ) { }

  checkLogin(): void {
    if(this.loggedInEmployee === null) {
      this.router.navigateByUrl("employee/login");
    }
  }
}
