import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ children, text, slim }) => {
  const slug = text.replace(/\s/g, "-").toLowerCase();
  return (
    <Link
      to={`/${slug}`}
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
    </Link>
  );
};

export default SidebarLink;
