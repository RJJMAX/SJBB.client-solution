import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee.class';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  pageTitle = "Create New Employee";
  employee: Employee = new Employee();

  constructor(
    private empSvc: EmployeeService,
    private router: Router
  ) {}

  save(): void {
    this.empSvc.create(this.employee).subscribe({
      next: (res) => {
        console.debug("Employee Created");
        this.router.navigateByUrl("/employee/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    
  }
}
