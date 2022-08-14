import { FC, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import classNames from "classnames";

import styles from "./BookPage.module.scss";
import {
  BooksSelectors,
  getBooks,
  setFavBooks,
  setSelectedBook,
  removeBookFromFav,
  removeBookFromCart,
  setBookToCart,
} from "../../Redux/reducers/books";
import Title from "../Title";
import Subscribe from "../Subscribe";
import TabSwitcher from "../TabSwitcher";
import {
  FBIcon,
  Heart,
  HeartActive,
  HeartFav,
  IconArrowLeft,
  MoreIcon,
  RatingIcon,
  TwitterIcon,
} from "../../Assets";
import Button from "../Button";
import IconButton from "../IconButton";
import { BookItemProps } from "../../Types";
import BookCard from "../BookCard";

const BookPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = useSelector(BooksSelectors.getSelectedBook);
  const booksList = useSelector(BooksSelectors.getBooks);
  const { bookId } = useParams<{ bookId: string }>();

  const [tabSelect, setTabSelect] = useState("description");
  const [isActive, setActive] = useState(false);



  useEffect(() => {
    dispatch(setSelectedBook(bookId));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getBooks());
    window.scrollTo(0, 0);
  }, []);
  
  const addToCartHandler = (book: BookItemProps) => {
    dispatch(removeBookFromCart(book.isbn13));
    dispatch(setBookToCart(book));

  };

  const addToFavHandler = (book: BookItemProps) => {
    dispatch(setFavBooks(book));
    setActive(!isActive)
  };

  const removeFromFavHandler = (book: BookItemProps) => {
    dispatch(removeBookFromFav(book.isbn13))
    setActive(!isActive)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const sliderBooksElements = useMemo(() => {
    return booksList
      ?.map((book: BookItemProps) => <BookCard key={book.isbn13} book={book} />);
  }, [booksList]);

  const onStepBackHandler = () => {
    navigate(-1);
  };


  return (
    <div className={classNames(styles.bookPageContainer)}>
      <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
      <Title text={book?.title ?? ""} />
      <div className={classNames(styles.bookInfoContainer)}>
        <div className={classNames(styles.bookImageContainer)}>
          <div className={classNames(styles.bookBackground)}>
            <img src={book?.image} alt="book-preview" />
            <div className={classNames(styles.favButton)}>
              <div className={classNames(!isActive ? styles.favButtonNormal : "")}>
                <IconButton
                icon={Heart}
                onClick={() => {addToFavHandler(book!);}}/>
              </div>
            </div>
            <div className={classNames(styles.favButton)}>
              <div className={classNames(!isActive ? styles.favButtonActive : "")}>
                  <IconButton
                  icon={HeartFav}
                  onClick={() => {removeFromFavHandler(book!);}} 
                  /></div>
              </div>
          </div>
        </div>
        <div className={classNames(styles.bookInfoWrapper)}>
          <div className={classNames(styles.dividerLineSmall)}></div>
          <div className={classNames(styles.detailsWrapper)}>
            <div className={classNames(styles.priceWrapper)}>{book?.price}</div>
            <div>
              <img src={RatingIcon} alt="rating-icon" />
            </div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Authors</p>
            <div className={classNames(styles.authorWrapper)}>
              {book?.authors}
            </div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Publisher</p>
            <div>{book?.publisher}</div>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Language</p>
            <p>English</p>
          </div>

          <div className={classNames(styles.detailsWrapper)}>
            <p className={classNames(styles.textWrapper)}>Format</p>
            <p>Paper book / ebook (PDF)</p>
          </div>
          <Button
            title="ADD TO CART"
            onClick={() => addToCartHandler(book!)}
            className={classNames(styles.buttonWrapper)}
          />
          {(
            <div className={styles.detailsUrl}>
              <a href={book?.url} target="_blank">
                Preview book
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles.switcher}>
        <TabSwitcher
          options={[
            { text: "Description", value: "description" },
            { text: "Authors", value: "authors" },
            { text: "Reviews", value: "reviews" },
          ]}
          changeHandler={(value: string) => setTabSelect(value)}
          type="info"
        />
      </div>
      <div className={styles.infoText}>
        {tabSelect === "description" ? (
          <p>{book?.desc}</p>
        ) : tabSelect === "authors" ? (
          <p>{book?.authors}</p>
        ) : (
          <p>There are no reviews yet. You can write the first one!</p>
        )}
      </div>

      <Subscribe />

      <div className={classNames(styles.secondTitleContainer)}>
        <h2>SIMILAR BOOKS</h2>
      </div>
      <Slider {...settings}>
        {sliderBooksElements}
      </Slider>
    </div>
  );
};

export default BookPage;
