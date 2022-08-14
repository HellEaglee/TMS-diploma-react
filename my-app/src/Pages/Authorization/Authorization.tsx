import { FC, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import styles from "./Authorization.module.scss";

import { setUser } from "../../Redux/reducers/user";
import TabSwitcher from "../../Components/TabSwitcher";
import SignInForm from "../../Components/SignInForm";
import SignUpForm from "../../Components/SignUpForm";

const Authorization: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabSelect, setTabSelect] = useState("signIn");

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/main");
      })
      .catch(console.error);
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/main");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div className="wrapper" style={{ height: "680px" }}>
      <div className={styles.authWrapper}>
        <div className={styles.tabsWrapper}>
          <TabSwitcher
            options={[
              { text: "Sign in", value: "signIn" },
              { text: "Sign up", value: "signUp" },
            ]}
            changeHandler={(value: string) => setTabSelect(value)}
            type={"auth"}
          />
        </div>
        <div className={styles.compWrapper}>
          {tabSelect === "signIn" ? (
            <SignInForm handleClick={handleLogin} />
          ) : (
            <SignUpForm handleClick={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
