import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-specifications',
  templateUrl: './product-specifications.component.html',
  styleUrls: ['./product-specifications.component.css']
})
export class ProductSpecificationsComponent implements OnInit {
	product : Product;
	prdSpecs = [];
	productName = "";
  constructor(private productsService : ProductsService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
  this.activatedRoute.parent.params
	.subscribe(
		(params : Params) => {
			this.product = this.productsService.getProduct(+params['pId']);
			this.productName = this.product.productName;
			this.prdSpecs = this.product.specs;
			console.log(this.prdSpecs)
		}
	)
  }

}
