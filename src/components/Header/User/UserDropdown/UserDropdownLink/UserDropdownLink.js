import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserDropdownLink.module.scss";

const UserDropdownLink = ({ children, text, count }) => {
  const slug = text.replace(/\s/g, "-").toLowerCase();
  return (
    <Link to={`/user/${slug}`} className={styles.dropdown_link}>
      {children}{" "}
      <span className={styles.dropdown_link__text}>
        {text} {count ? ` - ${count}` : null}
      </span>
    </Link>
  );
};

export default UserDropdownLink;
