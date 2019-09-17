import { createStore } from "redux";
import reducer from "./reducers";

function configureStore(state = {
                                  isAuth: false,
                                  user: "",
                                  pass: "",
                                  items: [],
                                })
{
  return createStore(reducer, state);
}

export default configureStore;