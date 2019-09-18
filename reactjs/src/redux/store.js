import { createStore } from "redux";
import reducer from "./reducers";

function configureStore(state = {
                                  isAuth: false,
                                  update: 0,
                                  user: "",
                                  pass: "",
                                  filter : "",
                                  itemsCount : 0,
                                  curItem : {},
                                  items: [],
                                })
{
  return createStore(reducer, state);
}

export default configureStore;