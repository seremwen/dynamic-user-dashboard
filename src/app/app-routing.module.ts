import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/components/container/container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },

  
  {
    path: '', component: ContainerComponent,
    children:
      [
        {
          path: 'users',
          loadChildren: () => import('./ui/users/users.module').then(c => c.UsersModule)
        },
        
        { path: '', redirectTo: '/users/all-users', pathMatch: 'full' }

      
      ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
