import React from "react";
import Search from "./Search/Search";
import User from "./User/User";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/wflogosmall.png";

const Header = () => {
  return (
    <header className={styles.site_header}>
      <div className={`container ${styles.site_header__container}`}>
        <img
          className={styles.site_header__logo}
          src={Logo}
          alt="Webfactory Logo"
        />
        <Search />
        <User />
      </div>
    </header>
  );
};

export default Header;
