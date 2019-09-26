import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  private users    = [];
  private products = [];

  constructor(private db: AngularFirestore) {
        this.setCollections();
   }

   //// coloca los valores de las colecciones
   private setCollections(){

    // obtiene los usuarios
    this.db.collection('user').snapshotChanges().subscribe( data => {
        console.log("datos", data);
        this.users = data.map( e => {
            return {
              id   : e.payload.doc.id,
              name : e.payload.doc.data()['email'],
              pass : e.payload.doc.data()['pass']
            }
        });
        console.log("Usuarios:", this.users);
    });

    // obtiene los productos
    this.db.collection('product').snapshotChanges().subscribe( data => {
        this.products = data.map( e => {
            return {
              id    : e.payload.doc.id,
              name  : e.payload.doc.data()['name'],
              img   : e.payload.doc.data()['img'],
              price : e.payload.doc.data()['price'],
              stock : e.payload.doc.data()['stock'],
              purchase : 1
            }
        });
        console.log("Productos:", this.products);
    });
   }

   // verifica que exista el usuario
   existUser(user: String, pass: String){
      let exist = false;
      this.users.forEach ( u => {
          if(u.email == user && u.pass == pass){
              exist = true;
          }
      });
      return exist;
   }

   // obtiene los productos filtrados
    filterProducts(filter : string){
        if(!filter || filter.length == 0){
            return this.products;
        }
        return this.products.filter ( p => p.name.toUpperCase().startsWith(filter.toUpperCase()) );
    }

    // realiza el update de los productos
    updateProducts(items : Array<Object>){

        if(items.length == 0){
            return this.products;
        }

        items.forEach( o => { // actualiza el stock de los items comprados
            let id, c = this.products.find( f => f['name'] == o['name']);
            if(c){
                id = c.id; delete c.id;
                c.stock -= o['purchase'];
                // actualiza el objeto en la base de datos
                this.db.doc('product/'+id).update(c);
                c.id = id;
            }
        })
        return this.products.map ( p => p ); // crea un nuevo mapa de arreglos
    }

}