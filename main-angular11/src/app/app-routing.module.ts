import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularEightComponent } from './angular-eight/angular-eight.component';
import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  {
    path: 'angular11',
    children: [{
      path: '**',
      component: MyPageComponent
    }]
  },
  {
    path: 'angular8',
    children: [{
      path: '**',
      component: AngularEightComponent
    }]
  },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '', pathMatch: 'full', redirectTo: '/angular11' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
