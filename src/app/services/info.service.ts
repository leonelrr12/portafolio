import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = {};
  cargado:boolean = false;

  constructor( public http:Http ) {

    this.http.get("assets/data/info.pagina.json")
              .subscribe( data => {
                console.log(data.json());
                this.info = data.json();
                this.cargado = true;
              })
   }
}
