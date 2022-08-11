import { FC, useEffect, useMemo } from "react";
import classNames from "classnames";

import styles from "./Favorites.module.scss";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import {
  IconArrowLeft,
  IconArrowRightSmall,
  IconArrowSmall,
} from "../../Assets";
import { useDispatch, useSelector } from "react-redux";
import { BooksSelectors, getBooks } from "../../Redux/reducers/books";
import { BookModel } from "../../Types/models/book.model";
import BookCard from "../../Components/BookCard";
import Divider from "../../Components/Divider";
import { useNavigate } from "react-router-dom";

const Favorites: FC = () => {
  const favBooksList = useSelector(BooksSelectors.getFavBooks);
  const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const favBooksElements = useMemo(() => {
    return favBooksList?.map((book: BookModel) => (
      <BookCard key={book.isbn13} book={book} />
    ));
  }, [favBooksList]);

  const popularBooksElements = useMemo(() => {
    return booksList
      ?.slice(0, 3)
      .map((book: BookModel) => <BookCard key={book.isbn13} book={book} />);
  }, [booksList]);

  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.favoritesContainer)}>
      <div className={classNames(styles.favoritesWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <Title text="FAVORITES" />
      </div>

      {favBooksList?.length === 0 ? (
        <div className={classNames(styles.noFavWrapper)}>
          <p>
            Your Favorites Section is empty. To add one or more favorite book(s)
            simply click on the 'heart' icon next to the item.
          </p>
        </div>
      ) : (
        <div className={classNames(styles.favBooksWrapper)}>
          {favBooksElements}
        </div>
      )}
      <div className={classNames(styles.dividerWrapper)}>
        <Divider />
      </div>

      <div className={classNames(styles.secondTitleContainer)}>
        <h2>POPULAR BOOKS</h2>
        <div className={classNames(styles.arrowsWrapper)}>
          <IconButton icon={IconArrowSmall} onClick={() => {}} />
          <IconButton icon={IconArrowRightSmall} onClick={() => {}} />
        </div>
      </div>
      <div className={classNames(styles.popularBooksContainer)}>
        {popularBooksElements}
      </div>
    </div>
  );
};

export default Favorites;
