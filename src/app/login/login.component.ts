import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  number : number = 2;
  // @ts-ignore
  user: string;
  // @ts-ignore
  form : FormGroup;
  newUser: User = new User(0,'','');

  date: string = "2022-10-10";
  constructor(private fb: FormBuilder, private userS: UserServiceService) { }

  ngOnInit(): void {
   let userPromise =  this.userS.getExample();
   console.log(userPromise);
    this.user = "Theo";
   this.createForm();
   this.form.controls['login'].setValue('Théo');
   let user = new User(18, 'theo','motdepasse');
   console.log(user);

  }
  createForm(){
    this.form = this.fb.group({
      login: ['', Validators.required],
      password : ['']
    });
  }

  submitForm(){
    // @ts-ignore
    console.log(this.form.controls['login'].value, this.form.get('login').value);
  }

  changeName(){
    if(this.user == 'Theo'){
      this.user = 'Paul';
    }else{
      this.user = "Theo";

    }
  }

}
