import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  http=inject(HttpClient);
  users:any;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    debugger;
    this.http.get('http://localhost:5012/api/users').subscribe({next:(response)=>{
      this.users=response;
    },error:(error)=>{
      console.log(error);
    }})

  }
  

}
