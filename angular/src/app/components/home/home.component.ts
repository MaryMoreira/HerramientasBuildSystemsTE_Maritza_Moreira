import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // constructor
  constructor(private db : DbService, private store : StoreService, private router : Router) {}

  products:Array<Object>;
  firstTime:boolean;
  strFilter:string;

  // inicializa el componente
  ngOnInit() {
    this.firstTime = true;
    this.strFilter = "";
    this.products  = this.db.filterProducts(this.strFilter); // obtiene los productos
    console.log("Init home");

    // se suscribe a los eventos del store
    this.store.subscribe('home', data => {
        // si esta autentificado, coloca los datos del carrito
        if(!data['isAuth']){
          this.router.navigate(['/login']);
        }
    })
  }

  // captura el keydown del buscador
  onSearchChange(searchValue: string): void {  
    this.products  = this.db.filterProducts(searchValue); // obtiene los productos
  }

  // incrementa la cantidad del producto
  onNumberItemChange(value: string): void {  
    
  }

  // mostrar detalles del producto
  showProductDetail(prod:Object){
    this.store.changeStore({curItem:prod});
    this.router.navigate(['/item']);
  }

  // anadir item al carrito
  addProduct(prod:Object){
    
  }

}
