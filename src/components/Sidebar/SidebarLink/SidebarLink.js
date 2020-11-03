import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { menuIsSlim, toggleMenu } from "redux/menu/menuSlice";
import { Link } from "react-router-dom";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ children, text }) => {
  const dispatch = useDispatch();
  const isSlim = useSelector(menuIsSlim);
  const slug = text.replace(/\s/g, "-").toLowerCase();
  return (
    <Link
      to={`/${slug}`}
      className={`${styles.sidebar_link} ${
        isSlim ? styles.sidebar_link__slim : ""
      }`}
      onClick={() => dispatch(toggleMenu())}
    >
      {children}
      {isSlim ? null : (
        <p className={styles.sidebar_link__text_container}>
          <span className={styles.sidebar_link__text}>{text}</span>
        </p>
      )}
    </Link>
  );
};

export default SidebarLink;
