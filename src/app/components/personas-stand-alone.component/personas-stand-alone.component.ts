import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-stand-alone',
  standalone: true,
  templateUrl: './personas-stand-alone.component.html',
  styleUrl: './personas-stand-alone.component.css',
  providers:[ServicePersonas]
  
})
export class PersonasStandAloneComponent implements OnInit {
  public personas!:Array<Persona>;

  constructor(private _service:ServicePersonas){}

  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response=>{
    //   console.log("leyendo");
    //   this.personas=response;
    // })
    this._service.getPersonaPromise().then(response=>{
      this.personas=response;
    })
  }
}
