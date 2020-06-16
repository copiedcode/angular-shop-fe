import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  message: string;
  orderID: number;
  products: any[] = [];
  cartTotal: number;

  constructor(private router: Router,
              private orderService: OrderService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      message: string,
      products: ProductResponseModel[],
      orderID, number,
      total: number
    };
    this.message = state.message;
    this.products = state.products;
    this.orderID = state.orderID;
    this.cartTotal = state.total;

  }

  ngOnInit(): void {
  }
}

interface ProductResponseModel {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantityOrdered: number;
}


