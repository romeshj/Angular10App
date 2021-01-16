import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-n',
  templateUrl: './header-n.component.html',
  styleUrls: ['./header-n.component.css']
})
export class HeaderNComponent implements OnInit {

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
