import React from "react";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ children, text, slim }) => {
  return (
    <a
      href="/"
      className={`${styles.sidebar_link} ${
        slim ? styles.sidebar_link__slim : ""
      }`}
    >
      {children}
      {slim ? null : (
        <p className={styles.sidebar_link__text_container}>
          <span className={styles.sidebar_link__text}>{text}</span>
        </p>
      )}
    </a>
  );
};

export default SidebarLink;
