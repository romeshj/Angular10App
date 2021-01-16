import { ProductOverView, ProductSpecs } from './product.overview.model';
export class Product {
	constructor(
		public productID : number, 
		public productName : string, 
		public productImagePath : string, 
		public productPrice:number, 
		public overview : ProductOverView[],
		public specs : ProductSpecs[]
	){}
}