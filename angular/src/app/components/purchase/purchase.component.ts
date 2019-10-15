import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  displayedColumns: string[] = ['Imagen', 'Producto', 'Cantidad', 'Precio', 'Total'];
  items:Array<Object>;
  subtotal:number;
  total:number;
  taxes:number;

  // constructor
  constructor(private db : DbService, private store : StoreService, private router : Router) {
    this.items = [];
  }
  
  ngOnInit() {
    this.items = this.store.getData()['purchase'];
    this.calculateTotal();
    // se suscribe a los eventos del store
    this.store.subscribe('home', data => {
      // si esta autentificado, coloca los datos del carrito
      if(!data['isAuth']){
        this.router.navigate(['/login']);
      }
    });
  }

  calculateTotal(){
    this.total = this.subtotal = this.taxes = 0;
    this.items.forEach( p => {
      this.subtotal += p['price'] * p['purchase'];
    })
    this.taxes = this.subtotal * 0.12; // iva
    this.total = this.subtotal + this.taxes;
  }

  // retorna a la pagina de home al presionar cancelar
  cancel(){
    // no se realiza ningun cambio
    this.store.changeStore({purchase:[], itemsCount:0});
    this.router.navigate(['/home']);
  }

  // actualiza los registros al presionar el boton aceptar
  accept(){
    // actualiza los registros de los items
    this.db.updateProducts(this.items);
    // regresa a la pagina home
    this.store.changeStore({purchase:[], itemsCount:0});
    this.router.navigate(['/home']);
  }

}
