import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None})
export class ServerElementComponent implements  OnInit{
   // @Input() element:  ElementModel = new ElementModel('Test', 'Test', 'TEst');
  @Input("srvElement")  element : { type:string , content:string, name:string};
  constructor() {
  }

  ngOnInit(){

  }
}
