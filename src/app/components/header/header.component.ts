import { Component } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor( public _is:InfoService,
               public router:Router ){}

  buscar_producto(param:string){
    
      //console.log(param);
      this.router.navigate( ['busqueda', param] );
    
  }
}
