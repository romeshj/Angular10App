import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { ProductItemComponent } from './product-item/product-item.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products : Product[];

  constructor(private productsService : ProductsService) { }

  ngOnInit() {	
	this.products = this.productsService.getProducts();
	console.log(this.products)
  }

}
