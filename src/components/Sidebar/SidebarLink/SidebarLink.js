import React from "react";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ children, text, slim }) => {
  return (
    <a href="/" className={styles.sidebar_link}>
      {children}{" "}
      {slim ? null : <span className={styles.sidebar_link__text}>{text}</span>}
    </a>
  );
};

export default SidebarLink;
