import { Component } from '@angular/core';
import { Employee } from 'src/app/classes/employee.class';
import { EmployeeService } from 'src/app/services/employee.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
pageTitle = "Employee List"
employees: Employee[] = [];

constructor(
private empSvc: EmployeeService,
private sysSvc: SystemService
) {}

ngOnInit(): void {
  this.sysSvc.checkLogin();
  if(this.sysSvc.loggedInEmployee !== null) {
    console.log("Someone is logged in!");
  } else {
    console.log("No one is logged in!");
  }
  this.empSvc.list().subscribe({
    next: (res) => {
      console.debug("Employees:", res);
      this.employees = res;
    },
    error: (err) => {
      console.error(err);
    }
  })
}
}
