import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
	@Input('srvElement') element : { type : string, name: string, content : string } /* Bind this by Alias */
	
  constructor() { }

  ngOnInit(): void {
  //console.log(this.element)
  }

}
