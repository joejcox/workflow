import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuIsOpen, toggleMenu } from "redux/menu/menuSlice";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(menuIsOpen);
  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={() => dispatch(toggleMenu())}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
