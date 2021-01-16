import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	
  product : Product;
  
  constructor(private productsService : ProductsService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
  
	this.activatedRoute.params
	.subscribe(
		(params : Params)  => {
			this.product = this.productsService.getProduct(+params['pId']);
			console.log(this.product)
		}
	)
  }

  onBack(){
	this.router.navigate(['../'], {relativeTo : this.activatedRoute});	
  }
}
