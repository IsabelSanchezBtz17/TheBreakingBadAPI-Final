import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import StorageHelper from 'src/app/libs/helpers/storage.helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public response: string = '';
  public formLogin!: FormGroup;
  public flag: boolean= false;

  constructor(private api: ApiService,private router: Router ) { 
    
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required] ),  
    }); 
  }
    
  

  onSubmit() {
      
    let username: string = this.formLogin.get('username')?.value;
    let password: string = this.formLogin.value.password;

  
    this.api.login(username, password).subscribe({
      next: resp => {
        StorageHelper.setItem('session', resp )
        this.router.navigate(['home'])
      },
      error: ()=>{
        this.flag= true;
      }
    })

    console.log('encendio')

  }
}


