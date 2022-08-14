import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { CartSumProps } from "../../Types";

import {
  removeAllBooksFromCart,
} from "../../Redux/reducers/books";

import Button from "../Button";

import style from "./CartSum.module.scss";

const CartSumChecker: FC<CartSumProps> = ({ price }) => {
  const dispatch = useDispatch();

  const bookPrice = price;
  const Vat = +(bookPrice * 0.19).toFixed(2);
  const totalPrice = (bookPrice + Vat).toFixed(2);

  const getBooks = () => {
      dispatch(removeAllBooksFromCart());
  };

  return (
    <div className={style.sumWrapper}>
      <div className={style.sumRow}>
        <p className={style.title}>Sum total</p>
        <p className={style.value}>{`$ ${bookPrice}`}</p>
      </div>
      <div className={style.sumRow}>
        <p className={style.title}>VAT</p>
        <p className={style.value}>{`$ ${Vat}`}</p>
      </div>
      <div className={style.sumRowTotal}>
        <p className={style.titleTotal}>Total</p>
        <p className={style.valueTotal}>{`$ ${totalPrice}`}</p>
      </div>
      <div className={style.button}>
        <Button title="CHECK OUT" onClick={getBooks} />
      </div>
    </div>
  );
};

export default CartSumChecker;
