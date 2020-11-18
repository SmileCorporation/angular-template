/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 21:37:08
 * @,@LastEditTime: ,: 2020-11-18 15:09:23
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\components\component\index\index\index.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/service/storage/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  public isLogin: boolean = false;
  constructor(public storage: StorageService) { }

  ngOnInit(): void {

  }
  ngDoCheck(){
    if(this.storage.getStorage("_token")) {
      this.isLogin = true;
    }else{
      this.isLogin  =false
    }
  }
}
