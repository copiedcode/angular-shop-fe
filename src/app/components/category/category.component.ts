import { Component, OnInit } from '@angular/core';
import {ProductModelServer, ServerResponse} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: ProductModelServer[] = [];
  catName: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.catName;
      })
    ).subscribe(catName => {
      this.catName = catName;
      // @ts-ignore
      this.productService.getProductsFromCategory(this.catName).subscribe((prods: ServerResponse) => {
        this.products = prods.products;
      });
    });

  }

  selectProduct(id: Number){
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number){
    this.cartService.AddProductToCart(id);
  }

}
