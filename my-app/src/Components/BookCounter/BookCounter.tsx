import React, { FC } from "react";

import { ReactComponent as Plus } from "../../Assets/icons/Plus.svg";
import { ReactComponent as Minus } from "../../Assets/icons/Minus.svg";

import style from "./BookCounter.module.scss";

type BookCounterProps = {
  count: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
};

const BookCounter: FC<BookCounterProps> = ({
  count,
  onClickMinus,
  onClickPlus,
}) => {
  return (
    <div className={style.counterWrapper}>
      <Minus style={{ cursor: "pointer" }} onClick={onClickMinus} />
      <p className={style.count}>{count}</p>
      <Plus style={{ cursor: "pointer" }} onClick={onClickPlus} />
    </div>
  );
};

export default BookCounter;
