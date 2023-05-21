import { DeclarationListEmitMode } from "@angular/compiler";
import { Orderline } from "./orderline.class";
import { Customer } from "./customer.class";


export class Order {
    id: number = 0;
    total: number = 0;
    date: string = "";

    customerId: number = 0; 
    customer: Customer | null = null;

    orderline: Orderline[] = [];
}