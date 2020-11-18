/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 18:36:20
 * @,@LastEditTime: ,: 2020-11-18 11:58:44
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\models\usual\usual.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from 'src/app/app-routing.module';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';
import {NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzBreadCrumbModule,
    FormsModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
  ],
  exports:[
    CommonModule,
    NzButtonModule,
    NzBreadCrumbModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    AppRoutingModule,
    NzIconModule,
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class UsualModule { }
