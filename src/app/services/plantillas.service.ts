import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {  Observable } from "rxjs";


@Injectable()
export class PlantillaService{
  constructor(private _http: HttpClient){

  }

  getFunciones(): Observable<any>{
    const request ="api/plantilla/Funciones"
    const url = environment.urlAPiPlantilla+request
    return this._http.get(url)
  }
  getPlantillaByFUnciones(funcion:string): Observable<any>{
    let request ="api/Plantilla/PlantillaFuncion/"+funcion
    let url = environment.urlAPiPlantilla+request
    return this._http.get(url)
  }

}
