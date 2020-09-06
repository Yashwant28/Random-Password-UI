import { Injectable } from '@angular/core';
import { Password } from './../../model/password';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  password: Password;

  url:string = 'https://random-password-generator28.herokuapp.com/generate-password?passwordLength=8';

  constructor(private http: HttpClient) { }

  generatePassword(): Password{
    this.http.get<Password>(`${this.url}`).subscribe(response => {
      this.password = response;
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    });

    return this.password;
  }
}
