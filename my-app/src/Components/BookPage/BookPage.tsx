import { FC, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./BookPage.module.scss";
import {
  BooksSelectors,
  getBooks,
  setFavBooks,
  setSelectedBook,
} from "../../Redux/reducers/books";
import Title from "../Title";
import Subscribe from "../Subscribe";
import {
  FBIcon,
  Heart,
  IconArrowLeft,
  IconArrowRightSmall,
  IconArrowSmall,
  MoreIcon,
  RatingIcon,
  TwitterIcon,
} from "../../Assets";
import Button from "../Button";
import IconButton from "../IconButton";
import Divider from "../Divider";
import { addToCart } from "../../Redux/reducers/cart";
import { BookModel } from "../../Types/models/book.model";
import BookCard from "../BookCard";

const BookPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector(BooksSelectors.getSelectedBook);
  const booksList = useSelector(BooksSelectors.getBooks);
  const { bookId } = useParams<{ bookId: string }>();

  useEffect(() => {
    dispatch(setSelectedBook(bookId));
  }, []);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const addToCartHandler = (book: BookModel) => {
    dispatch(addToCart(book));
  };

  const addToFavHandler = (book: BookModel) => {
    dispatch(setFavBooks(book));
  };

  const similarBooksElements = useMemo(() => {
    return booksList
      ?.slice(5, 8)
      .map((book: BookModel) => <BookCard key={book.isbn13} book={book} />);
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
            <div>
              <IconButton
                icon={Heart}
                onClick={() => {
                  addToFavHandler(book!);
                }}
              />
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
          <p>More details...</p>
          <Button
            title="ADD TO CART"
            onClick={() => addToCartHandler(book!)}
            className={classNames(styles.buttonWrapper)}
          />
          <p>Preview book</p>
        </div>
      </div>

      <div className={classNames(styles.titlesWrapper)}>
        <div className={classNames(styles.oneTitleWrapper)}>
          <p>Description</p>
          <div className={classNames(styles.dividerLine)}></div>
        </div>

        <p>Authors</p>
        <p>Reviews</p>
      </div>

      <Divider />

      <div className={classNames(styles.descWrapper)}>{book?.desc}</div>

      <div className={classNames(styles.IconsWrapper)}>
        <IconButton icon={FBIcon} onClick={() => {}} />
        <IconButton icon={TwitterIcon} onClick={() => {}} />
        <IconButton icon={MoreIcon} onClick={() => {}} />
      </div>

      <Subscribe />

      <div className={classNames(styles.secondTitleContainer)}>
        <h2>SIMILAR BOOKS</h2>
        <div className={classNames(styles.arrowsWrapper)}>
          <IconButton icon={IconArrowSmall} onClick={() => {}} />
          <IconButton icon={IconArrowRightSmall} onClick={() => {}} />
        </div>
      </div>
      <div className={classNames(styles.popularBooksContainer)}>
        {similarBooksElements}
      </div>
    </div>
  );
};

export default BookPage;
