import { FC, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./SignInForm.module.scss";
import Input from "../Input";
import Button from "../Button";

export interface FormProps {
  handleClick: (email: string, password: string) => void;
}

const SignInForm: FC<FormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classNames(styles.contentWrapper)}>
      <p>Email</p>
      <Input
        type="text"
        value={email}
        onChange={(event: any) => setEmail(event.target.value)}
        placeholder="Your email"
      />
      <p>Password</p>
      <Input
        type="password"
        value={password}
        onChange={(event: any) => setPassword(event.target.value)}
        placeholder="Your password"
      />
      <div className={classNames(styles.forgotPassWrapper)}>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
      <Button
        title="SIGN IN"
        onClick={() => handleClick(email, password)}
        className={classNames(styles.authButton)}
      />
    </div>
  );
};

export default SignInForm;
