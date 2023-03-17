import { Component } from '@angular/core';
import { RequestService } from '../service/service/request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private request:  RequestService){}
  logout() {
    if(confirm('Do you want to log out is admin page?')){
      this.request.logout();
    }
  }
}
  // ngOnInit(): void {
  //     this.isLogined();
  // }
  // isLogined(){
  //   if(!this.request.isLoggined()){
  //     this.router.navigate(['login-page']);
  //   }
  // }
  // logout(){
  //   if(confirm('Do you want to log out is admin page?')){
  //     this.request.logout();
  //     this.isLogined();
  //   }
  // }
