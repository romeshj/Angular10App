import { Component, OnInit } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  
  serverElements = [
	{type : 'server', name : 'TestServer' , content : 'Just a test server'},
	{type : 'blueprint', name : 'BlueprintServer' , content : 'Just a blueprint server'}
  ];
	
  constructor() { }

  ngOnInit(): void {
  }
  
  onServerAdded(serverData : {serverName: string, serverContent : string}){
	this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onBlueprintAdded(blueprintData : {serverName: string, serverContent : string}){
	this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
