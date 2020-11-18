import { IndexComponent } from './components/component/index/index/index.component';






/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 16:56:16
 * @,@LastEditTime: ,: 2020-11-18 11:21:16
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/component/index/home/home.component';
import { AdminComponent } from './components/component/admin/admin/admin.component';
import { IsLoginGuard } from './guards/admin/is-login.guard';
import { LoginComponent } from './components/component/index/login/login.component';
import { RegisterComponent } from './components/component/index/register/register.component';


const routes: Routes = [
  {
  path: '',
   component: IndexComponent,
   children:[
     {path: '', component:HomeComponent},
     {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
   ]
  },

  {
    path:'admin',
    component: AdminComponent,
    canActivate:[IsLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
