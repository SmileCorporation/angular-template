import { UsualModule } from './../../models/usual/usual.module';


import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index/index.component';
import { HomeComponent } from './index/home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './index/login/login.component';
import { RegisterComponent } from './index/register/register.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  declarations: [IndexComponent, HomeComponent, AdminComponent, LoginComponent, RegisterComponent],
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    UsualModule,
    NzCheckboxModule ,
    NzInputModule,
  ]
})
export class ComponentModule { }
