import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5'

@Component({
  selector: 'login-ionic',
  templateUrl: 'login.html'

})
export class LoginPage {
  registerPage = "RegisterPage";
  /* ListPage = "ListPage"; */
  user: string = "";
  password: string = "";
  languages: string = "es";
  apiUrl = 'http://ec2-18-188-107-88.us-east-2.compute.amazonaws.com:9292/SubastameApi/ValidateServices/validateUser/';
  constructor(
    public http: HttpClient
  ) {

  }

  login() {
    let passMd5 = Md5.hashStr(this.password);
    this.apiUrl = this.apiUrl + this.user + '/' + passMd5
    console.log(this.apiUrl);
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve();
        console.log("Ingreso Exitoso")
      }, err => {
        console.log("usuario o contraseña incorrectas");
      });
    });
  }


}
