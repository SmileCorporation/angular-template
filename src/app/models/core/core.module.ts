import { ServiceModule } from './../../services/service/service.module';
import { UsualModule } from './../usual/usual.module';
/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 18:04:50
 * @,@LastEditTime: ,: 2020-11-17 20:52:32
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\models\core\core.module.ts
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { ComponentModule } from 'src/app/components/component/component.module';
registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    UsualModule,
    ComponentModule,
    BrowserAnimationsModule,
    ServiceModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports:[
    UsualModule,
    BrowserAnimationsModule,
    ServiceModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
}
