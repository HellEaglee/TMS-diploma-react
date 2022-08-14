import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import classNames from "classnames";

import styles from "./Favorites.module.scss";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import {
  HeartFav,
  RatingIcon,
  IconArrowLeft,
} from "../../Assets";
import { BooksSelectors, getBooks, removeBookFromFav } from "../../Redux/reducers/books";
import { BookItemProps } from "../../Types";
import BookCard from "../../Components/BookCard";



const Favorites: FC = () => {
  const favBooksList = useSelector(BooksSelectors.getFavBooks);
  const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

    const removeFromFavHandler = (book: BookItemProps) => {
    dispatch(removeBookFromFav(book.isbn13));
    };

  const favBooksElements = useMemo(() => {
    return favBooksList?.map((book: BookItemProps) => (
      <div className={classNames(styles.card, "wrapper")}>
      <div className={styles.bookCover}>
        <img src={book.image} alt="book cover" />
      </div>
      <div className={styles.bookInfo}>
        <div onClick={() => navigate(`/books/${book.isbn13}`)}>
          <div className={styles.title}>
            {book.title}
          </div>
        </div>
        <div className={styles.authors}>
          <p>{`by ${book.authors}`}</p>
        </div>
        <div className={styles.ratingPrice}>
          {book.price}
          <div>
            <img src={RatingIcon} alt="rating-icon" />
          </div>
        </div>
      </div>
      <div className={classNames(styles.fav)}>
        <IconButton
          icon={HeartFav}
          onClick={() => {removeFromFavHandler(book!);}} 
        />
      </div>
    </div>
    ));
  }, [favBooksList]);

  const sliderBooksElements = useMemo(() => {
    return booksList
      ?.map((book: BookItemProps) => <BookCard key={book.isbn13} book={book} />);
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

      <div className={classNames(styles.secondTitleContainer)}>
        <h2>POPULAR BOOKS</h2>
      </div>
      <Slider {...settings} className={classNames(styles.slider)}>
        {sliderBooksElements}
      </Slider>
    </div>
  );
};

export default Favorites;
