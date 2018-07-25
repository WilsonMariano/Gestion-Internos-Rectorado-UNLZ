import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { InternosComponent } from './components/internos/internos.component';
import { VerificarCredencialesService } from './services/verificar-credenciales.service';
 

const APP_ROUTES: Routes = 
[
    { 
        path: 'principal', 
        component: PrincipalComponent 
    },
    { 
        path: 'oficinas', 
        component: OficinasComponent,
        canActivate: [VerificarCredencialesService]

    },
    { 
        path: 'internos/:idOf', 
        component: InternosComponent,
        canActivate: [VerificarCredencialesService]

    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'principal' 
    },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES, {'useHash': true});
