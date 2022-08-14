import { FC } from "react";
import classNames from "classnames";



import styles from "./Input.module.scss";

type InputProps = {
  type: string;
  value?: string | number;
  onChange?: any;
  placeholder?: string;
  onKeyDown?: any;
};

const Input: FC<InputProps> = ({ type, value, onChange, placeholder, onKeyDown }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={classNames(styles.input)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
