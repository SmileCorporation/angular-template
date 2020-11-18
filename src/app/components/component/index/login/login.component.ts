/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-18 09:54:04
 * @,@LastEditTime: ,: 2020-11-18 15:08:49
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \noma\src\app\components\component\index\login\login.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/service/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }



  }
   Login(){
   if(this.validateForm.valid){
       this.storage.setStorage("_token","cxkkskssww");
       this.router.navigate(['']);
   }

   }
  constructor(private fb: FormBuilder, private storage: StorageService, private router: Router) {}
  getCaptcha(event:any){
    console.log(event);

  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      verfCode: [null,[Validators.required]]
    });
  }
}
