import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoche } from '../../services/service.coche';

@Component({
  selector: 'app-coches',
  standalone: false,
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css',
})
export class CochesComponent implements OnInit{
  public coches!: Array<Coche>;

  constructor(private _service:ServiceCoche){}

  ngOnInit(): void {
    // this.coches=this._service.getCoches();

    this._service.getCoches().then((response)=>{
      this.coches=response;
    })
    
  }
}
