import { FC } from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import styles from "./Home.module.css";

const Home: FC = () => {
  return (
    <div className={classNames(styles.homeContainer)}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
