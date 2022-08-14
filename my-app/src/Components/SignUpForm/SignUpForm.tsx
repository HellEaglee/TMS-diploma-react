import { FC, useState } from "react";
import classNames from "classnames";

import styles from "./SignUpForm.module.scss";
import Input from "../Input";
import Button from "../Button";
import { FormProps } from "../SignInForm/SignInForm";

const SignUpForm: FC<FormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classNames(styles.contentWrapper)}>
      <p>Name</p>
      <Input type="text" onChange={() => {}} placeholder="Your name" />
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
      <p>Confirm password</p>
      <Input
        type="password"
        onChange={() => {}}
        placeholder="Confirm your password"
      />
      <Button
        title="SIGN UP"
        onClick={() => handleClick(email, password)}
        className={classNames(styles.authButton)}
      />
    </div>
  );
};

export default SignUpForm;
