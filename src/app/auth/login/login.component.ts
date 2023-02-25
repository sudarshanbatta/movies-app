import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidUser:boolean=false;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      vendorEmail: ['',Validators.required],
      vendorOtp: ['',Validators.required]
    });
  }
  login(){
    if(this.loginForm.value.vendorEmail === 'shiva@gmail.com' && this.loginForm.value.vendorOtp === "12345678"){
      this.router.navigate(['/dashboard']);
      this.invalidUser = false;
    }else{
      this.invalidUser = true;
      setTimeout(() => {
        this.invalidUser = false;
      }, 5000);
    }
  }

}
