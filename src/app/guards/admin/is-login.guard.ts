/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-18 00:49:43
 * @,@LastEditTime: ,: 2020-11-18 01:54:28
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\guards\admin\is-login.guard.ts
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/service/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

  constructor(public storageService: StorageService,private router: Router){
    this.storageService = storageService;
    this.router  =router;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(this.storageService.getStorage("_token")){

         return true;
       }else{
        this.router.navigateByUrl(`?islogin=false`);
         return false;
       }

  }

}
