import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  /* GET ALL THE PRODUCTS FROM THE BACKEND SERVER */
  getAllProducts(numberOfResults = 12){
    return this.http.get(this.SERVER_URL + '/products', {
      params:{
        limit: numberOfResults.toString()
      }
    });
  }
}
