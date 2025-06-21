import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then((m) => m.Home)
    },
},
{
    path: 'about',
    loadComponent: () => {
        return import('./about/about').then((m) => m.About)
    },
},
{
    path: 'contact',
    loadComponent: () => {
        return import('./contact/contact').then((m) => m.Contact)
    },
},
{
    path: 'albums',
    loadComponent: () => {
        return import('./albums/albums').then((m) => m.Albums)
    },
},
];
