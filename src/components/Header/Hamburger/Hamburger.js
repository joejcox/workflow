import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ menuIsOpen, toggle }) => {
  return (
    <div
      className={`${styles.hamburger} ${menuIsOpen ? styles.open : ""}`}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
