import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, ServerResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }


  /* GET ALL THE PRODUCTS FROM THE BACKEND SERVER */
  getAllProducts(numberOfResults = 12): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.SERVER_URL + '/products', {
      params:{
        limit: numberOfResults.toString()
      }
    });
  }

  /* GET SINGLE PRODUCT FROM THE BACKEND SERVER */
  getSingleProduct(id:number): Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

  /* GET PRODUCTS FROM A CERTAIN CATEGORY */
  getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
}


  getHotProducts(numberOfResults = 12): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.SERVER_URL + '/products/hot', {
      params:{
        limit: numberOfResults.toString()
      }
    });
  }
}
