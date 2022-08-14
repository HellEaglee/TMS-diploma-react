import { FC, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import styles from "./Books.module.scss";
import { getBooks, BooksSelectors } from "../../Redux/reducers/books";
import Subscribe from "../../Components/Subscribe";
import Title from "../../Components/Title";
import { BookItemProps } from "../../Types";
import BookCard from "../../Components/BookCard";

const Books: FC = () => {
  const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    window.scrollTo(0, 0);
  }, []);

  const allBooksElements = useMemo(() => {
    return booksList?.map((book: BookItemProps) => (
      <BookCard key={book.isbn13} book={book} />
    ));
  }, [booksList]);

  return (
    <div className={classNames(styles.booksContainer)}>
      <Title text="NEW RELEASES BOOKS" />
      <div className={classNames(styles.booksWrapper)}>{allBooksElements}</div>
      <Subscribe />
    </div>
  );
};

export default Books;
