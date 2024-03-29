import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './pages/authentication/services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        m => m.LoginModule,
      ),
  },
  {
    path: 'login-with',
    loadChildren: () =>
      import('./pages/authentication/login-with/login-with.module').then(
        m => m.LoginWithModule,
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/authentication/register/register.module').then(
        m => m.RegisterModule,
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import(
        './pages/authentication/forgot-password/forgot-password.module'
      ).then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('./pages/coming-soon/coming-soon.module').then(
        m => m.ComingSoonModule,
      ),
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'deals',
        loadChildren: () =>
          import('./pages/deals/deals.module').then(m => m.DealsModule),
      },
      {
        path: 'wishlist',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/wishlist/wishlist.module').then(
            m => m.WishlistModule,
          ),
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/account/account.module').then(m => m.AccountModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
