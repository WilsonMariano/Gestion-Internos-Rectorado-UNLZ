import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { InternosComponent } from './components/internos/internos.component';
 

const APP_ROUTES: Routes = 
[
    { 
        path: 'principal', 
        component: PrincipalComponent 
    },
    { 
        path: 'oficinas', 
        component: OficinasComponent

    },
    { 
        path: 'internos/:idOf', 
        component: InternosComponent

    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'principal' 
    },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES, {'useHash': true});
