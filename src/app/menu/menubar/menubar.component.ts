import { Component } from '@angular/core';
import { Menu } from 'src/app/classes/menu.class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  menus: Menu[] = [
    new Menu("Employees", "/employee/list"),
    new Menu("Customers", "/customer/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Orders", "/order/list"),
    new Menu("Orderlines", "/orderlines/list"),
    new Menu("Products", "/product/list"),
  ]
}
