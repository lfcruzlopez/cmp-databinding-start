import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type:'server',
    name:'TestServer',
    content:'Just a Test!'
  }];
  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData:{serverName:string , serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{bpName:string , bpContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bpName,
      content: blueprintData.bpContent
    });
  }

}
