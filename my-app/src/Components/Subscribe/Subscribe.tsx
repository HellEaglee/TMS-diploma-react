import { FC } from "react";
import classNames from "classnames";

import styles from "./Subscribe.module.css";
import Input from "../Input";
import Button from "../Button";

const Subscribe: FC = () => {
  return (
    <div className={classNames(styles.subscribeContainer)}>
      <div className={classNames(styles.subscribeWrapper)}>
        <div>
          <h2 className={classNames(styles.h2)}>SUBSCRIBE TO NEWSLETTER</h2>
          <p className={classNames(styles.p)}>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </p>
        </div>
        <div className={classNames(styles.emailWrapper)}>
          <Input type="text" onChange={onchange} placeholder="Your email" />
          <Button title="SUBSCRIBE" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
