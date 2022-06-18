import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'' , redirectTo : '/home', pathMatch : 'full'},
  {path: 'home', component:HomeComponent},
  {
    path: 'auth/signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth/user/dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'auth/admin/dashboard',
    component: AdminDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
