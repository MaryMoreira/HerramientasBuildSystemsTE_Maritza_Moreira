import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';

// in add-player.ts file
import { ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db : DbService, private store : StoreService, private router : Router, private cdr: ChangeDetectorRef) {}

  // variables para realizar el cambio
  @ViewChild('mailInput', {static: true}) mailInput: ElementRef;
  @ViewChild('passInput', {static: true}) passInput: ElementRef;

  save:string;
  msg:string;
  user:string;
  pass:string
  rememberMe:boolean;

  ngOnInit() {
    // recupera los datos del usuario
    this.recoverData();
        
    // se suscribe a los eventos del store
    this.store.subscribe( 'login', store => {
      //console.log("Actual store", store);
    })
  }

  // recupera los datos del usuario del localstorage
  recoverData(){
    let lstore = localStorage.getItem('rememberMe');
    if(lstore != undefined){
      this.rememberMe = lstore == 'true';
      if(this.rememberMe){
        this.mailInput.nativeElement.value = localStorage.getItem('user');
        this.passInput.nativeElement.value = localStorage.getItem('pass');
        return;
      }
    }else{
      this.rememberMe = false;
    }
    this.mailInput.nativeElement.value = "";
    this.passInput.nativeElement.value = "";
  }

  // guarda los datos del usuario en el localstorage
  saveData(){
    if(this.rememberMe){
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('user', this.user);
      localStorage.setItem('pass', this.pass);
    }else{
      localStorage.setItem('rememberMe', 'false');
    }
  }

  // cuando cambia el valor
  changeRememberMe(value:boolean) {
    setTimeout(() => {
      this.rememberMe = !value;
      this.cdr.detectChanges();  
    }, 10);
  }

  // realiza el login de la pagina
  login() {
      this.user = this.mailInput.nativeElement.value;
      if(this.user && this.user.length == 0){
        this.msg = "Ingrese un correo valido!!!";
        return;
      }

      this.pass = this.passInput.nativeElement.value;
      if(this.pass && this.pass.length == 0){
        this.msg = "Ingrese una contrase~na valida!!!";
        return;
      }

      if(this.db.existUser(this.user, this.pass)){
        this.msg = "usuario valido";
        this.store.changeStore({isAuth:true});
        this.saveData();
        this.router.navigate(['/home']);
      }else{
        this.msg = "Ingrese un usuario valido!!!";
      }
  }

}
