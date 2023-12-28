import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import {
  BookstoreLogo,
  FavIcon,
  CartIcon,
  UserIcon,
  SearchIcon,
  CartIconActive,
  FavIconActive,
} from "../../Assets";
import IconButton from "../IconButton";
import Divider from "../Divider";

import styles from "./Header.module.scss";
import useAuth from "../../Utils/hooks/use-auth";

const Header: FC = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const isFavPage = location.pathname === "/favorites";

  const homePageHandler = () => {
    navigate("/main");
  };

  const searchHandler = () => {
    navigate("/search");
  };

  const favoritesHandler = () => {
    navigate("/favorites");
  };

  const cartPageHandler = () => {
    navigate("/cart");
  };

  const accountHandler = () => {
    if (isAuth) {
      navigate("/account-info");
    } else {
      navigate("/authorization");
    }
  };

  return (
    <div className={classNames(styles.headerWrapper)}>
      <div className={classNames(styles.contentWrapper)}>
        <IconButton icon={BookstoreLogo} onClick={homePageHandler} />
        <div className={classNames(styles.iconsWrapper)}>
          <IconButton icon={SearchIcon} onClick={searchHandler} />
          {isFavPage ? (
            <IconButton icon={FavIconActive} onClick={favoritesHandler} />
          ) : (
            <IconButton icon={FavIcon} onClick={favoritesHandler} />
          )}

          {isCartPage ? (
            <IconButton icon={CartIconActive} onClick={cartPageHandler} />
          ) : (
            <IconButton icon={CartIcon} onClick={cartPageHandler} />
          )}

          <IconButton icon={UserIcon} onClick={accountHandler} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
