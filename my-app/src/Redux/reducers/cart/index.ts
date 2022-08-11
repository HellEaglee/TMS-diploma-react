import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: InitialStateType = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      state.cartTotalQuantity += 1;
      state.cartItems.push(action.payload);
      state.cartTotalAmount +=
        action.payload.price * action.payload.cartTotalQuantity;
    },
    removeFromCart: (state: any, action: any) => {
      let index = state.cartItems.indexOf(action.payload);
      state.cartTotalQuantity -= action.payload;
      state.cartItems.splice(index, 1);
      state.cartItems = [...state.cartItems];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

const reducer = cartSlice.reducer;

export default reducer;

export const CartSelectors = {};
