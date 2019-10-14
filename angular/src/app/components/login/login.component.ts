import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';

// in add-player.ts file
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db : DbService, private store : StoreService, private router : Router) {}

  // variables para realizar el cambio
  @ViewChild('mailInput', {static: true}) mailInput: ElementRef;
  @ViewChild('passInput', {static: true}) passInput: ElementRef;

  save:string;
  msg:string;
  user:string;
  pass:string

  ngOnInit() {
    // se suscribe a los eventos del store
    this.store.getStore().subscribe( store => {
      console.log("Actual store", store);
    })
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
        this.router.navigate(['/home']);
      }else{
        this.msg = "Ingrese un usuario valido!!!";
      }
  }

}
