
import * as ACTION from './const';
import DB from '../services/db';
import { history } from '../redux/store';

let initialState =  {
      view : "login",
      isAuth: false,
      update: 0,
      user: "",
      pass: "",
      loginMsg: "",
      filter : "",
      itemsCount : 0,
      curItem : {},
      items: [],
      purchase : []
};

// reductor de la ienda online
export default (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {

      case ACTION.SEND_LOGIN:{ // realiza el login
        if(DB.existUser(action.user, action.pass)){
          newState.loginMsg = "";
          newState.filter   = "";
          newState.isAuth   = true;
          newState.user     = action.user;
          newState.pass     = action.pass;
          newState.view     = "home";
          newState.items    = DB.filterProducts(newState.filter);
          history.push('/home'); // se coloca en la pagina de home
        }else{
          newState.loginMsg = "Ingrese credenciales validas!!!";
          newState.isAuth   = false;
        }
        return  newState;
      }

      case ACTION.SEND_LOGOUT:{ // realiza el logout
        newState.loginMsg = "";
        newState.filter   = "";
        newState.isAuth   = false;
        newState.user     = "";
        newState.pass     = "";
        newState.view     = "login";
        newState.items    = [];
        history.push('/'); // se coloca en la pagina de login
        return newState;
      }

      case ACTION.FILTER_ITEMS:{ // realiza el filtro de los items
        let filterItems = DB.filterProducts(action.filter);

        newState.items = filterItems.map( item => {
            let found = newState.items.find ( last => item.name == last.name );
            if(found){
              item.purchase = found.purchase;
            }
            return {...item};
        })

        return newState;
      }

      case ACTION.SHOW_PURCHASE:{ // muestra la pagina de compra
        newState.view  = "purchase";
        history.push('/purchase'); // se coloca en la pagina de compra
        return newState;
      }

      case ACTION.SHOW_HOME:{ // regresa a la pagina de home
        newState.view  = "home";
        if(action.clean){
          newState.purchase   = [];
          newState.itemsCount = 0;
        }
        history.push('/home'); // se coloca en la pagina de compra
        return newState;
      }

      case ACTION.SHOW_ITEM:{ // muestra la pagina de items
        newState.view    = "item";
        newState.curItem = {...action.item};
        history.push('/item'); // se coloca en la pagina del detalle del item
        return newState;
      }

      case ACTION.PURCHASE: { // realiza la compra
        if(newState.purchase.length > 0){
          newState.items      = DB.updateProducts(newState.purchase);
          newState.purchase   = [];
          newState.itemsCount = 0;
        }
        history.push('/home'); // se coloca en la pagina inicial
        return newState;
      }

      case ACTION.ADD_PURCHASE_ITEM: { // añade un item al carrito de compras
        let filter = newState.purchase.filter( item => item.name == action.item.name);

        if(filter.length == 0){
          newState.purchase = newState.purchase.map ( item => item );
          newState.purchase.push({...action.item});
          newState.itemsCount += 1; // añade uno al carrito
        }else{
          newState.purchase = newState.purchase.map ( item => {
            if(item.name == action.item.name){
              item.purchase = action.item.purchase;
            }
            return {...item}
           } );
        }
        return newState;
      }

      case ACTION.CHANGE_QUANTITY_ITEM: // cambia la cantidad del item a comprar
        newState.items = newState.items.map( item => {
            if(item.name == action.item.name){
              item.purchase = action.amount;
            }
            return {...item};
        })
        return newState;

      default: // se ubica en la pagina de inicio
        history.push('/');
        return state;
    }
  };