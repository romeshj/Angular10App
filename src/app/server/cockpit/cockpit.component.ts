import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName="";
  //newServerContent="";
  
  @ViewChild('serverContentInput', { static: false }) serverContentInput : ElementRef
  
  @Output() serverCreated = new EventEmitter<{type : string, serverName : string, serverContent : string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{type : string, serverName : string, serverContent : string }>(); //using Alias
  
  constructor() { }

  ngOnInit(): void {
  }
  

  /*
	<!-- NgModel Two way data binding -->
	onAddServer(){
		this.serverCreated.emit({
		  type: 'server',
		  serverName: this.newServerName,
		  serverContent: this.newServerContent
		});
	}
	
	 onAddBlueprint(){
		this.blueprintCreated.emit({
		  type: 'blueprint',
		  serverName: this.newServerName,
		  serverContent: this.newServerContent
		});
	}
*/
	
	// using serverNameInput local reference
	// using ViewChild serverContentInput
	onAddServer(serverNameInput : HTMLInputElement){
		this.serverCreated.emit({
		  type: 'server',
		  serverName: serverNameInput.value,
		  serverContent: this.serverContentInput.nativeElement.value
		});
	  }
	  
	  // using serverNameInput local reference
	  // using ViewChild serverContentInput
	  onAddBlueprint(serverNameInput : HTMLInputElement){
		this.blueprintCreated.emit({
		  type: 'blueprint',
		  serverName: serverNameInput.value,
		  serverContent: this.serverContentInput.nativeElement.value
		});
	  }
}
