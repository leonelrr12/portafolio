
import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    PortafolioItemComponent,
    BusquedaComponent
} from "./components/index.paginas";

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: PortafolioItemComponent },
    { path: 'busqueda/:param', component: BusquedaComponent },
    
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash:true });