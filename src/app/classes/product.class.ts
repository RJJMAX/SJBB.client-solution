import { Vendor } from "./vendor.class";


export class Product {
    id: number = 0;
    name: string = "";
    description: string = "";
    categoryNumber: number = 0;
    price: number = 0;

    vendorId: number = 0;
    vendor: Vendor | null = null;
}