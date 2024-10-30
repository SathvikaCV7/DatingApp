import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }
  login() {
      this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.loggedIn = true;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }
  getCurrentUser(){
    this.accountService.currentUser$.subscribe((user)=>{
      this.loggedIn=!!user;
    },error=>{
      console.log(error);
    })
  }
  

  
}
