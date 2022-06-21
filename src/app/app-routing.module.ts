import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListordersComponent } from './pages/Orders/listorders/listorders.component';
import { OrderdetailsComponent } from './pages/Orders/orderdetails/orderdetails.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
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
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {path : 'products/create' , component:AddProductComponent},
  {path : 'products/update' , component:UpdateProductComponent},
  {path : 'cart' , component:CartComponent},
  {path : 'orderdetails' , component:OrderdetailsComponent},
  {path : "orders" , component: ListordersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
