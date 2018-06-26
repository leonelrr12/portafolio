import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean;

  constructor( public http:Http) {

      this.cargando = true;
      this.cargar_productos();
   }

   public buscar_producto( param:string ){

        if( this.productos.length === 0 ){
            this.cargar_productos().then( () => {
                this.filtrar_productos( param );
            });
        }else{
            this.filtrar_productos( param );
        }
   }

   private filtrar_productos( param:string ){

        this.productos_filtrado = [];
        param = param.toLocaleLowerCase();

        this.productos.forEach( prod => {

            if( prod.categoria.indexOf( param ) >= 0 || prod.titulo.toLocaleLowerCase().indexOf( param ) >= 0 ) {
                this.productos_filtrado.push( prod );
                
            }
        })       
   }

   public cargar_productos() {

        let promesa = new Promise( (resolve, reject) => {

            this.http.get('https://pruebaangular2-190bc.firebaseio.com/productos_idx.json')
            .subscribe( res => {

                //console.log(res.json());
                //setTimeout( () => {
                    this.cargando = false;
                    this.productos = res.json();
                //},1500)
                resolve();
            })
        })
        return promesa;

   }

   public datosProducto( cod:string ) {

        return this.http.get(`https://pruebaangular2-190bc.firebaseio.com/productos/${ cod }.json`);
   }
}
