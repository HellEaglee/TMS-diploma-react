import { FC } from "react";
import classNames from "classnames";

import styles from "./BookCard.module.scss";
import { BookItemProps } from "../../Types";
import { RatingIcon } from "../../Assets";
import { Link } from "react-router-dom";

type BookCardProps = {
  book: BookItemProps;
};

const BookCard: FC<BookCardProps> = (props) => {
  const { book } = props;

  return (
    
      <div className={classNames(styles.bookCardContainer)}>
        <div className={classNames(styles.bookCardWrapper)}>
          <div>
            <div className={classNames(styles.bookCardBackground)}>
              <img src={book.image} alt="book-img" />
            </div>
          </div>
          <div className={classNames(styles.bookCardDescribtion)}>
            <div className={classNames(styles.bookCardTitle)}>
              <Link to={`/main/${book.isbn13}`} className="link">
                  {book.title}
              </Link>
            </div>
            <div className={classNames(styles.bookCardSubTitle)}>
                {book.subtitle}
            </div>
            <div className={classNames(styles.priceRateWrapper)}>
              <div className={classNames(styles.price)}>{book.price}</div>
              <div>
                <img src={RatingIcon} alt="rating-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default BookCard;
