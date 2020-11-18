import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * 移除指定的storage
   * @,@param {type} key:传入键值
   */
  RemoveStorage(key:string){
    localStorage.removeItem(key);
  }
 /**
  * 得到指定的storage
   * @,@param {type} key:传入键值
   */
  getStorage(key:string):any{
    return localStorage.getItem(key);
  }

  /**
   * 设置storage
   * @,@param {type} key:键
   * @,@param {type} value: 值
   */
  setStorage(key:string, value:any){
    localStorage.setItem(key,value);
  }

  /**
   * 一处所有的storage
   * @,@param {type}
   */
  clearAllStorage(){
    localStorage.clear();
  }
}
