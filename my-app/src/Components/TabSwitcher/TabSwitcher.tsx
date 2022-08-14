import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { TabSwitcherProps } from "../../Types";

import style from "./TabSwitcher.module.scss";

const TabSwitcher: FC<TabSwitcherProps> = ({
  options,
  changeHandler,
  type,
}) => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(options[0].value);
  }, []);

  const clickHandler = (val: any) => {
    setCurrent(val);
    changeHandler(val);
  };

  return (
    <div
      className={classNames(
        style.tabSwitcher,
        type === "auth" && style.authWrapper
      )}
    >
      {options.map((elem) => (
        <div
          key={elem.value}
          className={classNames({
            [style.tab]: type === "info",
            [style.active]: type === "info" && current === elem.value,
            [style.tabAuth]: type === "auth",
            [style.authActive]: type === "auth" && current === elem.value,
          })}
          onClick={() => clickHandler(elem.value)}
        >
          {elem.text}
        </div>
      ))}
    </div>
  );
};

export default TabSwitcher;
