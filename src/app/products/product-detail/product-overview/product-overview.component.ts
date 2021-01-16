import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
	product : Product;
	prdOverview = [];
	productName = "";
  constructor(private productsService : ProductsService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
	console.log(this.activatedRoute.parent.snapshot.params['pId']);
	
	this.activatedRoute.parent.params
	.subscribe(
		(params : Params) => {
			this.product = this.productsService.getProduct(+params['pId']);
			this.productName = this.product.productName;
			this.prdOverview = this.product.overview;
			console.log(this.prdOverview)
		}
	)
  }

}
