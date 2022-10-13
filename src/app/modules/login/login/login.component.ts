import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Constants } from 'src/app/libs/constants.class';
import StorageHelper from 'src/app/libs/helpers/storage.helper';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  public response: string = '';
  public formLogin!: FormGroup;
  public flag: boolean= false;

  constructor(private api: ApiService,private router: Router, private authService: AuthService ) { 

    if(this.authService.checkStatus()=== true){
      this.router.navigate(['home'])
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  console.log('refresh')
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

  
   this.authService.login(username, password).subscribe({
      next: resp => {
        StorageHelper.setItem('session', resp )
        StorageHelper.setItem(Constants.auth, true)
        this.router.navigate(['home'])
      },
      error: ()=>{
        this.flag= true;
      }
    }) 

  }
}


