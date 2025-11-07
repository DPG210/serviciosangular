import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-personas-stand-alone',
  standalone: true,
  templateUrl: './personas-stand-alone.component.html',
  styleUrl: './personas-stand-alone.component.css',
  
})
export class PersonasStandAloneComponent {
  public personas!:Array<Persona>;
  
    constructor(){
      this.personas=new Array<Persona>;
      let p1 = new Persona(1,"A","A",23);
      this.personas.push(p1);
      let p2 = new Persona(2,"B","B",13);
      this.personas.push(p2);
    }
}
