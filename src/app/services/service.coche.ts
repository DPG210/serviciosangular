import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Coche } from "../models/coche";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCoche{
    constructor(private _http: HttpClient){}

    getCochesHttpCLient(): Observable<any>{
        let request="webresources/coches";
        let url= environment.urlApiCoches + request;
        return this._http.get(url);
    }

    getCochesPromise():Promise<any>{
        let request="webresources/coches";
        let url= environment.urlApiCoches + request;
        console.log(url)
        let promise=new Promise((resolve)=>{
            fetch(url).then(response=>{
            resolve(response.json());
            })
        })
        return promise;
        
    }

    getCoches():Promise <Array<Coche>> {
        let request="webresources/coches";
        let url= environment.urlApiCoches + request;
        //EXTRAER LOS DATOS TENEMOS QUE SEGUIR HACIENDOLO
        //LA DIFERENCIA ESTA EN LA Sintaxis
        const coches=
        fetch(url).then(response=>response.json());
        return coches;
    }
}