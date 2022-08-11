import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./books";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});

export default rootReducer;
