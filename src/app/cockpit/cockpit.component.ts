import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
 @Output() serverCreated= new EventEmitter<{serverName:string , serverContent:string}>;
 @Output('bpCreated') blueprintCreated  = new EventEmitter<{bpName:string , bpContent:string}>;
  //
  // newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput:HTMLInputElement) {

      this.serverCreated.emit({
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement)
  {
    this.blueprintCreated.emit({
      bpName: serverNameInput.value,
      bpContent: this.newServerContent
    });
  }

}
