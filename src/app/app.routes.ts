import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'perfil',
  loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage) 
  // El ".then( m => m.PerfilPage)" debe ser igual al nombre de la clase en el archivo .ts
},
{
  path: 'contacto',
  loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
},
];