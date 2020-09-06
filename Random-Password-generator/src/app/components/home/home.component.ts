import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home/home.service';
import { Password } from './../../model/password';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickMessage:string;
  password: Password = null;
  constructor(private homeService: HomeService) { }

  generatePassword() {
    this.clickMessage = 'generate password clicked';
    this.password = this.homeService.generatePassword();

    console.log("password is :"+ this.password.passwordValue);

  }

  ngOnInit(): void {
    
  }

}
