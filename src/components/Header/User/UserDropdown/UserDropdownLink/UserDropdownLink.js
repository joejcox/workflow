import React from "react";
import styles from "./UserDropdownLink.module.scss";

const UserDropdownLink = ({ children, text }) => {
  return (
    <a href="/" className={styles.dropdown_link}>
      {children} <span className={styles.dropdown_link__text}>{text}</span>
    </a>
  );
};

export default UserDropdownLink;
