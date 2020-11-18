/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-17 21:41:26
 * @,@LastEditTime: ,: 2020-11-18 11:17:53
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\components\component\admin\admin\admin.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/service/storage/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  constructor(private storage: StorageService, private router: Router) { }
  logOut():void{
   this.storage.RemoveStorage("_token");
   this.router.navigateByUrl("");
  }
  ngOnInit(): void {
  }

}
