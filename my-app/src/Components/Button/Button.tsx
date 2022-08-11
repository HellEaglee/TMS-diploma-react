import { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
