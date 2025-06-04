import { Routes } from '@angular/router';
import { ParametrizacionComponent } from './views/parametrizacion/parametrizacion.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: 'parametrizacion', component: ParametrizacionComponent },
          { path: '', redirectTo: '', pathMatch: 'full' }
        ]
      },
];
