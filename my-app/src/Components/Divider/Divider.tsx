import { FC } from "react";
import classNames from "classnames";

import styles from "./Divider.module.scss";

const Divider: FC = () => {
  return <div className={classNames(styles.divider)} />;
};

export default Divider;
