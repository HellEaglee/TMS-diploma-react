import { FC, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./Authorization.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

type Tabs = "Sign in" | "Sign up";

const Authorization: FC = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>("Sign in");
  const [welcomeTextShown, setWelcomeTextShown] = useState(false);

  const changeTabHandler = () => {
    if (currentTab === "Sign in") setCurrentTab("Sign up");
    else setCurrentTab("Sign in");
  };

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  return (
    <div className={classNames(styles.authContainer)}>
      <div className={classNames(styles.authWrapper)}>
        <div className={classNames(styles.tabsContainer)}>
          <div className={classNames(styles.tabsWrapper)}>
            <Button
              title="SIGN IN"
              onClick={changeTabHandler}
              className={classNames(styles.tabsButton)}
            />
            <Button
              title="SIGN UP"
              onClick={changeTabHandler}
              className={classNames(styles.tabsButton)}
            />
          </div>
        </div>

        <div className={classNames(styles.tabContentWrapper)}>
          {currentTab === "Sign in" ? (
            <div className={classNames(styles.signInWrapper)}>
              <div className={classNames(styles.dividerLeft)}></div>

              {welcomeTextShown && <div className={classNames(styles.welcomeTextWrapper)}>
                <div className={classNames(styles.welcomeText)}>Your password has been changed!</div>
                </div>}
              <div className={classNames(styles.contentWrapper)}>

                <p>Email</p>
                <Input
                  type="text"
                  onChange={() => {}}
                  placeholder="Your email"
                />
                <p>Password</p>
                <Input
                  type="password"
                  onChange={() => {}}
                  placeholder="Your password"
                />
                <div className={classNames(styles.forgotPassWrapper)}>
                  <Link to="/reset-password">Forgot password?</Link>
                </div>
                <Button
                  title="SIGN IN"
                  onClick={() => {}}
                  className={classNames(styles.authButton)}
                />
              </div>
            </div>
          ) : (
            <div className={classNames(styles.signUpWrapper)}>
              <div className={classNames(styles.dividerRight)}></div>
              <div className={classNames(styles.contentWrapper)}>
                <p>Name</p>
                <Input
                  type="text"
                  onChange={() => {}}
                  placeholder="Your name"
                />
                <p>Email</p>
                <Input
                  type="text"
                  onChange={() => {}}
                  placeholder="Your email"
                />
                <p>Password</p>
                <Input
                  type="password"
                  onChange={() => {}}
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
                  onClick={() => {}}
                  className={classNames(styles.authButton)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
