import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	@Output() featureSelected = new EventEmitter<{feature : string}>()
	
	
  constructor() { }

  ngOnInit(): void {
  }
	
  onNavClick(feature){
	this.featureSelected.emit({
		feature : feature
	})
  }
}
