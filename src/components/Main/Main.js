import React from "react";
import Header from "../Header/Header";
import styles from "./Main.module.scss";

const Main = ({ menuIsOpen, toggle }) => {
  return (
    <div className={styles.main_wrapper}>
      <Header menuIsOpen={menuIsOpen} toggle={toggle} />
    </div>
  );
};

export default Main;
