import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';
import { NavComponent } from "./nav/nav.component";
import { CommonModule } from '@angular/common';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  http=inject(HttpClient);
  acountService=inject(AccountService);
  users:any;
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }
  getUsers(){
    this.http.get('http://localhost:5012/api/users').subscribe({next:(response)=>{
      this.users=response;
    },error:(error)=>{
      console.log(error);
    }})

  }
  setCurrentUser(){
    const user: User=JSON.parse(localStorage.getItem('user'));
    this.acountService.setCurrentUser(user);
  }
  

}
