import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee.class';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
titlePage = "View Employee";
employee!: Employee;
showVerifyRemove: boolean = false;

constructor(
  private empSvc: EmployeeService,
  private route: ActivatedRoute,
  private router: Router
) {}

remove(): void {
  this.empSvc.remove(this.employee.id).subscribe({
    next: (res) => {
      console.debug("Employee Removed!");
      this.router.navigateByUrl("/employee/list");
    },
    error: (err) => {
      console.error(err);
    }
  });
}

ngOnInit(): void {
  let id = Number(this.route.snapshot.params["id"]);
  this.empSvc.get(id).subscribe({
    next: (res) => {
      console.debug("Employee:", res);
      this.employee = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
}
}
