import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private products: any[] = [];
  private serverURL = environment.SERVER_URL;


  constructor(private http: HttpClient) { }

  getSingleOrder(orderID: number){
    return this.http.get<ProductResponseModel[]>(this.serverURL + '/orders/' + orderID).toPromise();
  }
}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
