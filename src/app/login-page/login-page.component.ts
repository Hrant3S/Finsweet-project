import {  FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../service/service/request.service';

interface Token {
  token?: string;
  error?: string;
}

interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup ({});

  constructor(
    public fb: FormBuilder,
    private request: RequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [ '',[ Validators.pattern(/^[0-9a-zA-Z\-_\.]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,4}$/),
          Validators.required, Validators.email,],
        ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isLogined() {
    if (this.request.isLogined()) {
      this.router.navigate(['admin']);
    }
  }

  submit() {
    this.request.login<Token>('https://reqres.in/api/login', this.loginForm.value).subscribe((items: Token) =>{
      if ('token' in items && items.token !== undefined){
        this.request.setToken(items.token);
        this.router.navigate(['admin']);
      }
    }, (error) => {
      alert(error)
    })
  }
}

    // let obj: Login = {
    //   email: this.logform.get('email')?.value,
    //   password: this.logform.get('password')?.value,
    // };
    // this.request
    //   .postData<Login>('https://reqres.in/api/login', obj)
    //   .subscribe((item: Token) => {
    //     if ('token' in item && item.token !== undefined) {
    //       console.log(item.token);
    //       this.request.setToken(item.token);
    //       this.isLogined();
    //     }
    //   });
    // if (this.logform.invalid) {
    //   return;
    // }

    // submit() {
    //   console.log(this.logform);
    //   if (this.logform.invalid) {
    //     return;
    //   }
    // }

