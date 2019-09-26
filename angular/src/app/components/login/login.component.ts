import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db : DbService) {}

  // variables para realizar el cambio
  user:string;
  pass:string;
  save:string;

  ngOnInit() {
    let formd = this.db.existUser('rrrr', 'test');
    console.log("test", formd);
  }

}
