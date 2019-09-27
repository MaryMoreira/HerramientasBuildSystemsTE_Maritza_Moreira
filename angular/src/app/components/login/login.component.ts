import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db : DbService, private store : StoreService) {}

  // variables para realizar el cambio
  user:string;
  pass:string;
  save:string;

  ngOnInit() {
    let formd = this.db.existUser('rrrr', 'test');
    console.log("test", formd);
    // se suscribe a los eventos del store
    this.store.getStore().subscription( store => {
      console.log("Actual store", store);
    })
  }

}
