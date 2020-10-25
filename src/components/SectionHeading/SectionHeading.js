import React from "react";
import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ children }) => {
  return (
    <section className={styles.task_heading}>
      <h3>{children}</h3>
    </section>
  );
};

export default SectionHeading;
