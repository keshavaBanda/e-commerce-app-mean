import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './modules/admin/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../app/modules/auth/login/login.routes')
      },
      {
        path: 'signup',
        loadChildren: () => import('../app/modules/auth/sign-up/sign-up.routes')
      }

      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      // {
      //   path: 'signup',
      //   component: SignUpComponent
      // }
    ]
  },



  {
    path: '**',
    component: PageNotFoundComponent
  }
];
