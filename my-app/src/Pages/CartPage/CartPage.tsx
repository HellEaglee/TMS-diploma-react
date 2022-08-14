import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";


import {
  CartBooksSelector,
  removeBookFromCart
} from "../../Redux/reducers/books/index"

import { IconArrowLeft } from "../../Assets";
import styles from "./CartPage.module.scss";
import { ReactComponent as Delete } from "../../Assets/icons/Cancel.svg";

import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import BookCounter from "../../Components/BookCounter";
import Button from "../../Components/Button";
import BookPrice from "../../Components/BookPrice";
import CartSum from "../../Components/CartSum";
import { BookItemProps } from "../../Types";

const CartPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector(CartBooksSelector.getCartBooks);

  const removeFromCartHandler = (book: BookItemProps) => {
    dispatch(removeBookFromCart(book?.isbn13));
  };

  const [count, setCount] = useState(1);
  useEffect(() => {
    count >= 1 ? setCount(count) : setCount(1);
  }, [count]);

  const onStepBackHandler = () => {
    navigate(-1);
  };

  let sum = 0;

  return (
    <div className="wrapper">
      <div className={styles.cartWrapper}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <div className={styles.title}>
          <Title text="Your cart" />
        </div>
        <div className={styles.books}>
          {cartList.length > 0 ? (
            cartList.map((book, id) => {
              sum = sum + +book.price.substring(1);
              return (
                <div className={classNames(styles.card, "wrapper")}>
                  <div className={styles.bookCover}>
                    <img src={book?.image} alt="book cover" />
                  </div>
                  <div className={styles.bookInfo}>
                    <div
                      className={styles.title}
                      onClick={() => navigate(`/books/${book?.isbn13}`)}
                    >
                      <Title text={book?.title} />
                    </div>
                    <div className={styles.authors}>
                      <p>{`by ${book?.authors}`}</p>
                    </div>
                    <div className={styles.counter}>
                      <BookCounter
                        count={count}
                        onClickMinus={() => setCount(count - 1)}
                        onClickPlus={() => setCount(count + 1)}
                      />
                    </div>
                  </div>
                  <div className={styles.price}>
                    <BookPrice price={`$ ${+book?.price.substring(1) * count}`} />
                  </div>
                  <div className={styles.delete}>
                    <Delete onClick={() => {removeFromCartHandler(book!)}} />
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.noBooksMessage}>Your cart is empty.</div>
          )}
        </div>
        <div className={styles.sumCheck}>
          <CartSum price={sum} />
        </div>
      </div>
    </div>
  );
};


export default CartPage;
