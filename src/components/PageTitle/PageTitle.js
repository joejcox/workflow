import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ children }) => {
  return (
    <section className={styles.page_title__container}>
      <h1 className={styles.page_title}>{children}</h1>
    </section>
  );
};

export default PageTitle;
