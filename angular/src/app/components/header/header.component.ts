import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:Object;
  // constructor
  constructor(private db : DbService, private store : StoreService, private router : Router) { }

  // inicializacion del componente
  ngOnInit() {
    this.data = { isAuth: false, itemsCount : 0 };
    // se suscribe a los eventos del store
    this.store.subscribe( 'header', store => {
      this.data = store;
    })
  }

  
  // muestra el carrito de compras con los datos
  showCar(){
    if(this.data['itemsCount'] == 0){
      return; // no realiza ninguna accion
    }
    // muestra la pagina del carrito de compras
    this.router.navigate(['/purchase']);
  }

  // realiza el logout
  logout(){
    this.store.clearStore(); // limpia el servicio del store
  }

}
