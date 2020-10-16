import React from "react";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ children, text }) => {
  return (
    <a href="/" className={styles.sidebar_link}>
      {children} <span className={styles.sidebar_link__text}>{text}</span>
    </a>
  );
};

export default SidebarLink;
