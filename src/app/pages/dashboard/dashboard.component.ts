import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  isCollapsed = false;
  constructor(private authService: AuthService, private router: Router) { }
  bankname:string=''
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(){
    this.bankname=this.authService.bankname;
  }
}