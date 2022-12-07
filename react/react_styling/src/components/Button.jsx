import React from "react";
import styles from "./Button.sccs";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

//props를 받아노는데 children으로 넘겨준 것은
//children으로 받고 나머지는 rest로 받기
const Button = ({ children, ...rest }) => {
  return <div className={cx("button")} {...rest}></div>;
};
