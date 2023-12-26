// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
]
})
export class LoginComponent {
branchsSelector(arg0: any) {
this.selectedBranch =arg0;
}

  selectedBranch:any;
  Branches: { name: string }[] = [{ name: "Paravai" }, { name: "Podhumbu" }];
  username: string='';  
  password: string='';
  constructor(private authService: AuthService, private router: Router) {
   }

  validate(){
    this.login(this.username,this.password,this.selectedBranch)
  }

  login(username: string, password: string,selectedBranch:string): void {
    if (this.authService.login(username, password,selectedBranch)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
