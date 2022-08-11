import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  getAllBooksApi,
  getSelectedBookApi,
} from "../../api";
import {
  getBooks,
  setBooks,
  setLoadingBooks,
  setSelectedBook,
  setSelectedBookLoading,
} from "../../reducers/books";

function* getBooksSaga() {
  yield put(setLoadingBooks(true));
  const { data, status, problem } = yield call(getAllBooksApi);
  if (status === 200 && data) {
    yield put(setBooks(data.books));
  } else {
    console.log("ERROR FETCHING BOOKS", problem);
  }

  yield put(setLoadingBooks(false));
}

function* getSelectedBookSaga(action: PayloadAction<string>) {
  yield put(setSelectedBookLoading(true));
  const { data, status } = yield call(getSelectedBookApi, action.payload);
  if (status === 200) yield put(setSelectedBook(data));
  yield put(setSelectedBookLoading(false));
}

export default function* booksWatcher() {
  yield all([
    takeLatest(getBooks, getBooksSaga),
    takeLatest(setSelectedBook, getSelectedBookSaga),
  ]);
}
