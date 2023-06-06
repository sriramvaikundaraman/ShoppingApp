import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { CreateAccountComponent } from './common/create-account/create-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create',      component: CreateAccountComponent },
  { path: 'home',      component: HomeComponent },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
