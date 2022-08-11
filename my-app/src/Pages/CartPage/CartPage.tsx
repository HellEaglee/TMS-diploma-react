import { FC, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./CartPage.module.scss";
import IconButton from "../../Components/IconButton";
import Title from "../../Components/Title";
import { IconArrowLeft } from "../../Assets";
import Button from "../../Components/Button";
import { BookModel } from "../../Types/models/book.model";

const CartPage: FC = () => {
  const [cartItems, setCartItems] = useState<BookModel[]>([]);
  const navigate = useNavigate();

  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.cartContainer)}>
      <div className={classNames(styles.cartWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <Title text="YOUR CART" />
      </div>
      <div>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <div>
            {cartItems.map((book) => (
              <div key={book.isbn13}>
                <div>{book.image}</div>
                <div>{book.title}</div>
                <div>{book.authors}</div>
                <div>{book.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={classNames(styles.totalContainer)}>
        <div className={classNames(styles.totalWrapper)}>
          <p>Sum total</p>
          <p>VAT</p>
          <h3>TOTAL:</h3>
          <Button
            title="CHECK OUT"
            onClick={() => {}}
            className={classNames(styles.checkButton)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
