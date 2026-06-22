import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'carteras',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then((m) => m.ContactoPage),
  },
  {
    path: 'carteras',
    children: [
      {
        path: '',
        loadComponent: () => import('./carteras/carteras.page').then((m) => m.CarterasPage),
      },
      {
        path: ':carterasid',
        loadComponent: () => import('./carteras/bandoleras/bandoleras.page').then((m) => m.BandolerasPage),
      },
  {
  path: 'carteras/:bandoleraId', // <-- El ":carterasId" es vital. Debe coincidir con lo que buscas en tu paramMap.get()
  loadComponent: () => import('./carteras/bandoleras/bandoleras.page').then( m => m.BandolerasPage)
},
],
  },
];