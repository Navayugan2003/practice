import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  login!:FormGroup;
  user!:string;

  constructor(private router: Router) { }



  ngOnInit(): void {
      this.login = new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)

      });
  }

  navigateToHome() {
    if(this.login.valid){
      console.log(this.login.value);
    this.router.navigate(['product/list']);
    }
  }
}
