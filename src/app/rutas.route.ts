import { RouterModule, Routes } from '@angular/router';
import { InternosComponent } from './components/internos/internos.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
 

const APP_ROUTES: Routes = 
[
    { 
        path: 'internos', 
        component: InternosComponent 
    },
    { 
        path: 'oficinas', 
        component: OficinasComponent

    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'internos' 
    },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES, {'useHash': true});
