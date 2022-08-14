import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookItemProps } from "../../../Types";
import { RootState } from "../../store";

type InitialStateType = {
  booksList: any[];
  selectedBook: BookItemProps | null;
  isBooksLoading: boolean;
  selectedBookLoading: boolean;
  favBooksList: any[];
  cartList: BookItemProps[];
}; 

const initialState: InitialStateType = {
  booksList: [],
  selectedBook: null,
  isBooksLoading: false,
  selectedBookLoading: false,
  favBooksList: [],
  cartList: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<undefined>) => {}, //=== fetch process from BE
    setLoadingBooks: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<any[]>) => {
      state.booksList = action.payload;
    },
    setSelectedBook: (state: any, action: any) => {
      state.selectedBook = action.payload;
    },
    setSelectedBookLoading: (state: any, action: any) => {
      state.isSelectedBookLoading = action.payload;
    },
    setFavBooks: (state: any, action: any) => {
      state.favBooksList.push(action.payload);
    },
    removeBookFromFav: (state, action: PayloadAction<any>) => {
      state.favBooksList = state.favBooksList.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    setBookToCart: (state, action: PayloadAction<BookItemProps>) => {
      state.cartList.push(action.payload);
    },
    removeBookFromCart: (state, action: PayloadAction<any>) => {
      state.cartList = state.cartList.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    removeAllBooksFromCart: (state) => {
      state.cartList = initialState.cartList;
    },
  },
});

export const {
  getBooks,
  setLoadingBooks,
  setBooks,
  setSelectedBook,
  setSelectedBookLoading,
  setFavBooks,
  setBookToCart,
  removeBookFromFav,
  removeBookFromCart,
  removeAllBooksFromCart
} = booksSlice.actions;

const reducer = booksSlice.reducer;

export default reducer;

export const BooksSelectors = {
  getBooks: (state: RootState) => state.books.booksList,
  getBooksLoading: (state: RootState) => state.books.isBooksLoading,
  getAllBooks: (state: RootState) => state.books.booksList,
  getSelectedBook: (state: RootState) => state.books.selectedBook,
  getSelectedBookLoading: (state: RootState) => state.books.selectedBookLoading,
  getFavBooks: (state: RootState) => state.books.favBooksList,
};

export const CartBooksSelector = {
  getCartBooks: (state: RootState) => state.books.cartList,
};

