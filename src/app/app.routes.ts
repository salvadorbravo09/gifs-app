import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Ruta principal de la aplicación
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    // Rutas hijas de la página del dashboard
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component'),
      },
      // Ruta por defecto si no se especifica ninguna ruta hija
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  // Ruta por defecto si no se especifica ninguna ruta
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
