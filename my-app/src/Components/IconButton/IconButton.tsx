import { FC } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: string;
  onClick: () => void;
};

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, onClick } = props;

  return (
    <button onClick={onClick} className={classNames(styles.iconWrapper)}>
      <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
