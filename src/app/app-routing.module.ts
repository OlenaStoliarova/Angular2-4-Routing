import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard, CustomPreloadingStrategyService } from './core';

import { AboutComponent, LoginComponent, MessagesComponent, PathNotFoundComponent } from './layout';

const routes: Routes = [
  {
    path: 'messages',
    component: MessagesComponent,
    outlet: 'messages'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin' }
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    data: { 
      preload: true,
      title: 'Users' 
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  enableTracing: true // Makes the router log all its internal events to the console.
};


@NgModule({
  imports: [
    RouterModule.forRoot(routes, extraOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
