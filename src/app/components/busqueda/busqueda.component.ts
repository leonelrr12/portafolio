import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  param:string = undefined;

  constructor( private route:ActivatedRoute,
               public _ps:ProductosService ) { 

    route.params.subscribe( parametros => {

        this.param = parametros['param'];
        _ps.buscar_producto( this.param );
    })
  }
}
