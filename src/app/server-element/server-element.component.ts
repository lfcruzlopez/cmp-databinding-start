import { Component , Input, OnInit} from '@angular/core';
import {ElementModel} from "./element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements  OnInit{
   // @Input() element:  ElementModel = new ElementModel('Test', 'Test', 'TEst');
  @Input("srvElement")  element : { type:string , content:string, name:string};
  constructor() {
  }

  ngOnInit(){

  }
}
