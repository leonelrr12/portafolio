import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[] = [];
  cargando:boolean;

  constructor( public http:Http) {

      this.cargando = true;
      this.cargar_productos();
   }

   public cargar_productos() {

      this.http.get('https://pruebaangular2-190bc.firebaseio.com/productos_idx.json')
          .subscribe( res => {

              //console.log(res.json());
              //setTimeout( () => {
                  this.cargando = false;
                  this.productos = res.json();
              //},1500)
          })
   }

   public datosProducto( cod:string ) {

        return this.http.get(`https://pruebaangular2-190bc.firebaseio.com/productos/${ cod }.json`);
   }
}
