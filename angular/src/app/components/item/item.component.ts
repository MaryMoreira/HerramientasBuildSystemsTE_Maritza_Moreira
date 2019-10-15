import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product:Object;

  // constructor
  constructor(private db : DbService, private store : StoreService, private router : Router) {
  
  }
  
  ngOnInit() {
    this.product = this.store.getData()['curItem'];

    // se suscribe a los eventos del store
    this.store.subscribe('home', data => {
      // si esta autentificado, coloca los datos del carrito
      if(!data['isAuth']){
        this.router.navigate(['/login']);
      }
    });
  }

  // retorna a la pagina de home
  showHome(){
    this.router.navigate(['/home']);
  }

}
