import { FC } from "react";
import classNames from "classnames";

import styles from "./Title.module.css";

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = (props) => {
  const { text } = props;

  return <h1 className={classNames(styles.titleWrapper)}>{text}</h1>;
};

export default Title;
