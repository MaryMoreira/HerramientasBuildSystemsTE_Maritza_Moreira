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
    // se suscribe a los eventos del store
    this.store.subscribe('home', data => {
        // si esta autentificado, coloca los datos del carrito
        if(data['isAuth']){
          if(this.firstTime){
            this.products = this.db.filterProducts(this.strFilter); // obtiene los productos
          }
        }else{
          this.router.navigate(['/login']);
        }
    })
  }

  // captura el keydown del buscador
  keyDownSearch(event){
    if (event.key === "Enter") {
      console.log(event);
    }
  }


}
