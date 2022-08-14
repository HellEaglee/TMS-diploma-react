import React, { FC } from "react";
import classNames from "classnames";

import style from "./BookPrice.module.scss";

type PriceProps = {
  price: string | number;
  size?: string;
};

const BookPrice: FC<PriceProps> = ({ price, size }) => {
  return (
    <p className={classNames(style.price, { [style.big]: size === "big" })}>
      {`${price}`}
    </p>
  );
};

export default BookPrice;
