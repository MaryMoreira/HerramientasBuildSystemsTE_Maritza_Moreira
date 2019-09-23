
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
      curitem : {},
      items: [],
      purcharse : []
};

export default (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {

      case ACTION.SEND_LOGIN:{

        if(DB.existUser(action.user, action.pass)){
          newState.loginMsg = "";
          newState.filter   = "";
          newState.isAuth   = true;
          newState.user     = action.user;
          newState.pass     = action.pass;
          newState.view     = "home";
          newState.items    = DB.filterProducts(newState.filter);
          history.push('/home'); // se diregi a la pagina de home
        }else{
          newState.loginMsg = "Ingrese credenciales validas!!!";
          newState.isAuth   = false;
        }
        console.log("Login:", newState);

        return  newState;
      }

      case ACTION.SEND_LOGOUT:
        return newState;

      case ACTION.SHOW_PURCHASE:
            return newState;

      case ACTION.SHOW_HOME:
        return newState;

      case ACTION.SHOW_ITEM:
        return newState;

      case ACTION.ADD_PURCHASE_ITEM:
        return newState;

      case ACTION.REMOVE_PURCHASE_ITEM:
        return newState;

      default:
        history.push('/');
        return state;
    }
  };