import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = {};
  equipo:any[] = [];
  cargado:boolean = false;
  cargado_sobre_nosotros:boolean = false;

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();    

   }

  public carga_info(){
      this.http.get("assets/data/info.pagina.json")
                .subscribe( data => {
                  this.info = data.json();
                  this.cargado = true;
                })
  }

  public carga_sobre_nosotros(){
      this.http.get("https://pruebaangular2-190bc.firebaseio.com/equipo.json")
      .subscribe( data => {
        //console.log(data.json());
        this.equipo = data.json();
        this.cargado_sobre_nosotros = true;
    })
  }
}
