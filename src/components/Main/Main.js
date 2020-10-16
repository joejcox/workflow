import React from "react";
import Header from "../Header/Header";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main_wrapper}>
      <Header />
    </div>
  );
};

export default Main;