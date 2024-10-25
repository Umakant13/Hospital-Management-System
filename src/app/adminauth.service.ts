import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username2:string, password2:string){
    if(username2=='admin' && password2=='admin123'){
      sessionStorage.setItem('username2', username2);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User Login Successfully")
    let user = sessionStorage.getItem('username2');
    console.log(user);
    return !(user==null);
  }

  logout(){
    console.log("User Logout Successfully");
    sessionStorage.removeItem('username2');
  }
}
