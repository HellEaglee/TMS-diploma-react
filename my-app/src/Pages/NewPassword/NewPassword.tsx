import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "./NewPassword.module.scss";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const NewPassword: FC = () => {
  const navigate = useNavigate();

  const authPageHandler = () => {
    navigate("/authorization");
  };

  return (
    <div className={classNames(styles.newPassContainer)}>
      <div className={classNames(styles.newPassWrapper)}>
        <h3>NEW PASSWORD</h3>
        <h4>Password</h4>
        <Input
          type="password"
          onChange={() => {}}
          placeholder="Your password"
        />
        <h4>Confirm password</h4>
        <Input
          type="password"
          onChange={() => {}}
          placeholder="Confirm your password"
        />
        <Button
          title="SET PASSWORD"
          onClick={authPageHandler}
          className={classNames(styles.newPasButton)}
        />
      </div>
    </div>
  );
};

export default NewPassword;
