import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ItemComponent } from '../components/item/item.component';
import { PurchaseComponent } from '../components/purchase/purchase.component';

const routes: Routes = [
  { path: 'login',    component: LoginComponent},
  { path: 'home',     component: HomeComponent},
  { path: 'item',     component: ItemComponent},
  { path: 'purchase', component: PurchaseComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
