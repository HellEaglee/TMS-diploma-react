import { all } from "redux-saga/effects";
import booksWatcher from "../booksSaga";

function* rootSaga() {
  yield all([booksWatcher()]);
}

export default rootSaga;
