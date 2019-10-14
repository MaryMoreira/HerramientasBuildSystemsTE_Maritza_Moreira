import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// init store
const initStore = {
  isAuth     : false,
  update     : 0,
  itemsCount : 0,
  curItem    : {},
  items      : [],
  purchase   : []
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // la varible que va a contralar a todo la aplicacion
  private store = {};

  // mensaje que controlara el store
  private subject = new Subject<Object>();

  // constructor
  constructor() {
    this.clearStore();
   }

  // cambia las variables del store
  public changeStore(store : Object){
    if(!store){ // si no tiene no realiza ningun cambio
      return;
    }

    // actualiza el actual store con las propiedades actualizadas
    for(let prop in store){
        this.store[prop] = store[prop];
    }

    // realiza la actualizacion de la variable
    this.subject.next({...this.store});
  }

  // obtiene la observable
  getStore(): Observable<Object> {
        return this.subject.asObservable();
  }

  // limpia el store
  public clearStore(){
      this.changeStore(initStore);
   }

}
