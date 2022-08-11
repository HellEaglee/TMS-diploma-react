import { FC, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./ResetPassword.module.scss";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const ResetPassword: FC = () => {
  const [emailSentShown, setEmailSentShown] = useState("");
  const [email, emailHandler] = useState("");
  const navigate = useNavigate();

  const resetPassHandler = () => {
    setEmailSentShown(email);
    const resetPassData = {
      email,
    };
    console.log(
      "Reset password request was sent with this data:",
      resetPassData
    );
  };

  const homePageHandler = () => {
    navigate("/");
  };

  return (
    <div className={classNames(styles.resetPassContainer)}>
      <div className={classNames(styles.resetPassWrapper)}>
        <h3>RESET PASSWORD</h3>

        {emailSentShown && (
          <div className={classNames(styles.resetText)}>
            You will receive an email to{" "}
            <span className={classNames(styles.resetEmail)}>
              {emailSentShown}
            </span>{" "}
            with a link to reset your password!
          </div>
        )}

        <h4>Email</h4>
        <Input
          type="text"
          value={email}
          onChange={emailHandler}
          placeholder="Your email"
        />

        {emailSentShown ? (
          <Button
            title="GO TO HOME"
            onClick={homePageHandler}
            className={classNames(styles.resetButton)}
          />
        ) : (
          <Button
            title="RESET"
            onClick={resetPassHandler}
            className={classNames(styles.resetButton)}
          />
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
