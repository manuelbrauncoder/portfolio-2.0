import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: "imprint",
        loadComponent: () => import('./pages/imprint/imprint.component').then((m) => m.ImprintComponent)
    },
    {
        path: "not-found",
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'not-found', pathMatch: 'full'
    }

];
