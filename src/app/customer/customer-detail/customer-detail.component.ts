import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer.class';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
pageTitle = "Customer Details";
customer!: Customer;

constructor(
  private custSvc: CustomerService,
  private router: Router
) {}

remove(): void {
  this.custSvc.remove(this.customer.id).subscribe({
    next: (res) => {
      console.debug("Customer Removal Standby");
      this.router.navigateByUrl("/customer/list");
    },
    error: (err) => {
      console.error(err);
    }
  });
}

ngOnInit(): void {
  
}
}
