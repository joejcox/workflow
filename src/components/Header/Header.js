import React from "react";
import Search from "./Search/Search";
import User from "./User/User";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.site_header}>
      <div className={`container ${styles.site_header__container}`}>
        <Search />
        <User />
      </div>
    </header>
  );
};

export default Header;
