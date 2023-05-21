import { Order } from "./order.class";
import { Product } from "./product.class";



export class Orderline {
    id: number = 0;
    quantity: number = 0;

    orderId: number = 0;
    order: Order | null = null;

    productId: number = 0;
    product: Product | null = null;
}