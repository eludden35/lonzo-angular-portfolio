import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/you-should-hire-me/view',
    pathMatch: 'full'
  },
  {
    path: 'you-should-hire-me',
    component: LayoutComponent,
    children: [
      {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(module => module.ViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
