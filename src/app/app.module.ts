import { UsualModule } from './models/usual/usual.module';

/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 16:56:16
 * @,@LastEditTime: ,: 2020-11-18 10:11:29
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\app.module.ts
 */

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './models/core/core.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
