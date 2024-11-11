import { Component,OnInit,viewChild,ElementRef, ViewChild } from '@angular/core';
import { PlantillaService } from '../../services/plantillas.service';
import { Plantilla } from '../../models/plantilla';
@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css'
})
export class PlantillafuncionsimpleComponent implements OnInit {
  @ViewChild("selectFuncion")selectFuncion!: ElementRef;
  public funciones!: Array<string>
  public empleados: Array<Plantilla>

  constructor(private _service: PlantillaService){
      this.empleados = new Array<Plantilla>
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response=>{
      this.funciones=response
    })
  }

  mostrarPlantilla():void{
    let funcion = this.selectFuncion.nativeElement.value
    this._service.getPlantillaByFUnciones(funcion).subscribe(response=>{
      this.empleados=response
    })
  }


}
