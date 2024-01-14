import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
 @Output() serverCreated= new EventEmitter<{serverName:string , serverContent:string}>;
 @Output() blueprintCreated  = new EventEmitter<{bpName:string , bpContent:string}>;

  newServerName = '';
  newServerContent = '';

  onAddServer() {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint()
  {
    this.blueprintCreated.emit({
      bpName: this.newServerName,
      bpContent: this.newServerContent
    });
  }

}