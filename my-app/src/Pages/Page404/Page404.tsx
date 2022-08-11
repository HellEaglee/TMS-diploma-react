import { FC } from "react";
import classNames from "classnames";

import styles from "./Page404.module.css";
import { ErrorImg } from "../../Assets";

const Page404: FC = () => {
  return (
    <div className={classNames(styles.page404Container)}>
      <div className={classNames(styles.imgWrapper)}>
        <img src={ErrorImg} alt="page-not-found" />
      </div>
    </div>
  );
};

export default Page404;
