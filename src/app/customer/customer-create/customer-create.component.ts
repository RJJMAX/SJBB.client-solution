import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer.class';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {
pageTitle = "Customer Create";
customer!: Customer;

constructor(
  private custSvc: CustomerService,
  private router: Router
) {}

save(): void {
  this.custSvc.create(this.customer).subscribe({
    next: (res) => {
      console.debug("Customer Created");
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
