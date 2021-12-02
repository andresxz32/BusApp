import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';

const routes: Routes = [
  {
    path: 'log-in',
    component: LoginViewComponent,
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
