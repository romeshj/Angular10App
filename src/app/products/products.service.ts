import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductOverView, ProductSpecs } from './product.overview.model';
@Injectable()
export class ProductsService {

	products : Product[] = [
		new Product(1, 'Memory Card', '../../assets/images/SDHC-Card.jpg', 500, [
			new ProductOverView('Up to 512 GB capacity'),
			new ProductOverView('Up to 100MB/s transfer speeds. Storage temperature :-40ºC to 85ºC'),
			new ProductOverView('Load apps faster with A1 performance class'),
			new ProductOverView('UHS speed class U1 and speed class 10 for Full HD video recording and playback'),
			new ProductOverView('Compatible with microSDHC and microSDXC supporting host devices')
		], 
		[
			new ProductSpecs('Brand' ,'ScanDisk'),
			new ProductSpecs('Product Dimensions' ,'0.1 x 1.5 x 1.09 cm, 9 Grams'),
			new ProductSpecs('Item model number' ,'SDSQUAR-032G-GN6MA'),
			new ProductSpecs('Manufacturer' ,'SanDisk'),
			new ProductSpecs('Color' ,'New'),
			new ProductSpecs('RAM Size' ,'32 GB'),
			new ProductSpecs('Memory Clock Speed' ,'98 Megabytes Per Second'),
			new ProductSpecs('Hard Drive Size' ,'32 GB'),
			new ProductSpecs('Hard Disk Description' ,'Memory Card'),
			new ProductSpecs('Wireless Type' ,'802.11abg'),
			new ProductSpecs('Number of USB 2.0 Ports' ,'1'),
			new ProductSpecs('Card Reader' ,'MicroSD'),
			new ProductSpecs('Are Batteries Included' ,'No'),
			new ProductSpecs('Item Weight' ,'9 g')
		]),
        new Product(2, 'Pen Drive', '../../assets/images/SanDisk-Cruzer-Blade-USB-Flash.jpg', 750, [
			new ProductOverView('Transfer speeds up to 10x faster than standard USB 2 0 drives'),
			new ProductOverView('Backward compatible with USB 2.0'),
			new ProductOverView('Secure file encryption and password protection(2)'),
			new ProductOverView('5-year limited manufacturer (3)')
		],
		[
			new ProductSpecs('Hardware Interface' ,'USB 3.0, USB 2.0'),
			new ProductSpecs('Memory Storage Capacity' ,'512 GB'),
			new ProductSpecs('Read Speed' ,'130 Megabytes Per Second')
		]
		),
        new Product(3, 'Power Bank', '../../assets/images/power_bank_black.jpg', 100, [
			new ProductOverView('【HEAVYWEIGHT CAPACITY】 On one full charge, the Voyager XL can charge: 1x times: Macbook 12 / Surface Pro 4 -OR- 6x times: iPhone 8 Plus / Google Pixel 2 / Samsung Galaxy S8 -OR- 5x times: iPhone XS Max / Samsung Galaxy Note 8.'),
			new ProductOverView('【LIGHTNING FAST CHARGE TIMES】 15W and 30W ports charge your devices and gadgets 2-3x faster than the traditional powerbank (charges an iPhone XS Max to more than 50% in half an hour).'),
			new ProductOverView('【MULTI-DEVICE COMPATIBILITY】PD 3.0 and QC 3.0 ports allow you to quick-charge all USB-charged devices. Features 2x Micro-USB, 1x USB-C, and 2x USB-A ports. Package includes 1x MicroUSB cable and 1x USB-A to USB-C cable.'),
			new ProductOverView('【NO MORE SLOW RECHARGE TIMES】For optimal recharging, use a 30W Type-C charger to fully recharge your Voyager XL portable phone charger in 3.5 – 4 hours. NOTE: if charged with a non-30W Type-C charger, recharging times may take longer.'),
			new ProductOverView('【PREMIUM, EASILY ACCESSIBLE CUSTOMER SERVICE】Amazon only provides a limited 30-day window for return or refund, and most sellers can only be reached through email. We go above and beyond – your VimPower portable charger power bank comes with a full 3-year warranty and incredibly friendly customer service, available both over email and Amazon messages. If you have any questions or concerns regarding your order whatsoever, find the "Contact Seller" button in your "My Orders" section.')
		],
		[
			new ProductSpecs('Batteries' ,'2 Lithium Polymer batteries required. (included)'),
			new ProductSpecs('Brand' ,'VimPower'),
			new ProductSpecs('Battery Cell Type' ,'Lithium Ion'),
			new ProductSpecs('Compatible Devices' ,'IPhone 8 Plus, IPhone XR, IPhone XS Max, IPad, IPhone 4, IPhone 5, IPhone 6 Plus, IPhone 6, IPhone 7, IPhone X, IPhone 8, Galaxy S8, IPhone 7 Plus'),
			new ProductSpecs('Capacity' ,'22000 Milliamp Hours')
		])
	];
	
  constructor() { }
  
  getProducts(){
	return this.products;
  }
  
  getProduct(pID : number){
	const allProducts =  this.getProducts();
	return allProducts.find(p => p.productID == pID);
  }
}
